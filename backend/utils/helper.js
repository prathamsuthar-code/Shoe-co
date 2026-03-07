import jwt from 'jsonwebtoken'

export const refineValidationsObject = (inputs) => {
    return inputs.error.flatten().fieldErrors
}

export const getToken = (payload) => {
   return jwt.sign(payload , process.env.SECRET_KEY , {expiresIn : "7d"})
}