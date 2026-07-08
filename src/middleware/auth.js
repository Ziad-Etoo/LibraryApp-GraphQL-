import userModel from "../DB/models/user.model.js"

export const authGrahp = async () =>{
    // Receive data (token)
    const {authentication} = args
    
    // check payload
    const payload = jwt.verify(token,USER_SIGNATURE_KEY)

    if(!payload){
        throw new Error("Invalid token payload",{cause:400})
    }
    // Check email & user
    const user = await userModel.findOne({email: payload.email})

    if(!user){
        throw new Error("User isn't found",{cause:400})
    }

    return user 
}