import z from 'zod'


export const registerValidations = z.object({
    firstName : z.string({message : "miust be type of string"}).min(2 , {message : "atleast 2 characters long"}),
    lastName : z.string({message : "miust be type of string"}).min(2 , {message : "atleast 2 characters long"}),
    email : z.email( {message : "must be valid email"}),
    password : z.string({message : "miust be type of string"}).min(7 , {message : "atleast 2 characters long"}).max(16 , "cannot exceed 16 characters"),
 
})


