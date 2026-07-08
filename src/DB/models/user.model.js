import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
        lowercase : true
    },
    password : {
        type : String,
        required : true,
        minlength : 8
    },
    phone : {
        type : String,
        required : true
    },
    borrowedBooks : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book' 
    }]
})  

const userModel = mongoose.model("user", userSchema)

export default userModel