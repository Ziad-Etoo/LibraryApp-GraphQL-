import mongoose from "mongoose"

const borrowedBookSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    bookId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Book', 
        required: true 
    },
    borrowedAt: { 
        type: Date,
        default: Date.now,
        required: true 
    },
    dueDate: { 
        type: Date, 
        required: true 
    },
    returned: { 
        type: Boolean, 
        default: false 
    }
});

const BorrowedBookModel = mongoose.model('BorrowedBook', borrowedBookSchema);

export default BorrowedBookModel