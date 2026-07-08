import bcrypt from 'bcrypt'

export const Hash = async(password, SAULT_ROUNDS = process.env.SAULT_ROUNDS)=>{
    return bcrypt.hashSync(password, +SAULT_ROUNDS)
}

export const hashCompare = async(password , hashed) =>{
    return bcrypt.compareSync(password, hashed)
}