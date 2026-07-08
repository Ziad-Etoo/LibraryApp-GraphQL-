import mongoose from "mongoose"

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    publishedYear: {
        type: Number,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    availableCopies: {
        type: Number,
        required: true
    }
}) 

const bookModel = mongoose.model("book", bookSchema) 

export default bookModel