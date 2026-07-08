import bookModel from "../../../DB/models/book.model.js";
import BorrowedBookModel from "../../../DB/models/borrowedBook.model.js"
import userModel from "../../../DB/models/user.model.js";
import { authGrahp } from "../../../middleware/auth.js";

export const getOverdueBooks = async()=>{
    const overdueBooks = await BorrowedBookModel.find({
    dueDate: { $lt: new Date() },
    returned: false
    });
    return overdueBooks;
}   

export const borrowBook = async(parent,  args )=>{
    const {bookId} = args;
    const user = await authGrahp() 
    await BorrowedBookModel.create({
        userId: user._id,
        bookId, 
        borrowedAt:new Date(), 
        dueDate:new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000)     
    });
    await bookModel.updateOne(
        { _id: bookId },
        { $inc: { availableCopies: -1 } }
    );
    await userModel.updateOne(
        { _id: user._id },
        { $push: { borrowedBooks: bookId } }
    );
   const book = await BorrowedBookModel.findOne({ bookId }).populate('book');

    return book;
}

export const returnBook = async(parent,  args )=>{
    const {bookId} = args;
    const user = await authGrahp() 
    await BorrowedBookModel.updateOne(
        { bookId, userId: user._id },
        { $set: { returned: true } }
    );
    await bookModel.updateOne(
        { _id: bookId },
        { $inc: { availableCopies: 1 } }
    );
    await userModel.updateOne(
        { _id: user._id },
        { $pull: { borrowedBooks: bookId } }
    );
    return {message: "Book is now available for borrowing"}
}
