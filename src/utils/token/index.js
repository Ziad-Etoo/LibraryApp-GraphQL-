import jwt from "jsonwebtoken"

export const generateToken = async ({payload = {}, SIGNATURE_KEY, option})=>{
    return  jwt.sign(payload , SIGNATURE_KEY ,option)
}

export const verifyToken = async (token , SIGNATURE_KEY)=>{
    return jwt.verify(token ,SIGNATURE_KEY)
}