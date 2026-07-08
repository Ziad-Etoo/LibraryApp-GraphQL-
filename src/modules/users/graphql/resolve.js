import userModel from "../../../DB/models/user.model.js"
import { authGrahp } from "../../../middleware/auth.js"
import { Encrypt, Hash } from "../../../utils/security/index.js"


export const signUp = async (parent, args)=>{
    // receive data
    const {name , email , phone , password , confirmPassword} = args

    // check password
    if(password != confirmPassword){
        throw new Error("Password & Confirmed password aren't matched",{cause: 400})
    }
    
    //hashing the password
    const hash = await Hash(password, process.env.SAULT_ROUNDS)

    //encrypt phoneNumber
    const encryptPhone =await Encrypt(phone , process.env.PHONE_SECRET_KEY)

    // check email
    const existEmail = await userModel.findOne({email})
    if(existEmail){
        throw new Error("The email already exist",{cause: 409})
    }
    
    // create
    const user = await userModel.create({name , email , phone: encryptPhone , password: hash})
    return {message: "done",user}

}

export const loginUser = async (parent, args)=>{
    // receive data
    const {email , password} = args
    //check the email
    const user = await userModel.findOne({email})

    if(!user){
        throw new Error("This user isn't existed in the system",{cause: 400})
    }
    //check password   
    const matched = await hashCompare(password , user.password)
    if(!matched){
        throw new Error("Invalid password",{cause:400})
    }
    //Creating the token
    const token = await generateToken({
        payload: {email, id: user._id} , 
        SIGNATURE_KEY: USER_SIGNATURE_KEY
        })
    return {message: token}
}

export const deleteUser = async (parent, args)=>{
    // receive data
    const {authentication} = args
    // check authentication
    const user = await authGrahp(authentication)
    // delete user 
    await userModel.findByIdAndDelete(user._id)

    return {message: "user deleted successfully"}
}