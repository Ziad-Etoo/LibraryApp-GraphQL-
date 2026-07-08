import joi from "joi";
import { Types } from "mongoose";

const customID = (id ) =>{
    let data = Types.ObjectId.isValid(id)
    return data? id : message("ID is not valid")
}


export const generalData = {
    ID : joi.string().custom(customID),
    email : joi.string().email({tlds: {allow: true, deny: ["org"]}, minDomainSegments: 2, maxDomainSegments: 5}),
    password : joi.string().regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
    headers : joi.object({
        authentication : joi.string().required(),
        'cache-control' : joi.string(),
        'postman-token' : joi.string(),
        'content-type' : joi.string(),
        'content-length' : joi.string(),
        host : joi.string(),
        'user-agent' : joi.string(),
        accept : joi.string(),
        'accept-encoding' : joi.string(),
        connection : joi.string()
    })
} 