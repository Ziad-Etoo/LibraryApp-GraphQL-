import mongoose from "mongoose";

const DBConnection = async ()=>{

    await mongoose.connect(process.env.URI)
    .then(()=>{
        console.log("DB is connected");
    
    })
    .catch((err)=>{
        console.log("failed connection", err);  
    
    })
}

export default DBConnection