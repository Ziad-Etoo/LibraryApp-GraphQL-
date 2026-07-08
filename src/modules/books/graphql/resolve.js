import bookModel from "../../../DB/models/book.model.js";

// ---------------------------getBookById--------------------------------------------
export const getBookById = async(parent, args)=>{
    const {id} = args
    const book = await bookModel.findOne({_id: id})
    return book
}

// ---------------------------getAllBooks--------------------------------------------
export const getAllBooks = async()=>{
    const books = await bookModel.find({})
    return books
}

// ---------------------------addBook--------------------------------------------
export const addBook = async(parent, args)=>{
    const book = await bookModel.create(args)
    return book
}