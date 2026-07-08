import mongoose from "mongoose"

const librarySchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    location: { 
        type: String, 
        required: true 
    },
    books: [{ 
        type: mongoose.Schema.Types.ObjectId,
         ref: 'Book' 
    }]
}) 

const libraryModel = mongoose.model('Library', librarySchema);

export default libraryModel