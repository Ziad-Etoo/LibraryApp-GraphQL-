import CryptoJS from "crypto-js"

export const Encrypt = async(code, SECRET_KEY= process.env.SECRET_KEY)=>{
    return CryptoJS.AES.encrypt(code, SECRET_KEY).toString(); 
}

export const Decrypt = async(code, SECRET_KEY= process.env.SECRET_KEY)=>{
    return CryptoJS.AES.decrypt(code, SECRET_KEY).toString(CryptoJS.enc.Utf8); 
}