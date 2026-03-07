import express from 'express'
import { connectToDB } from './utils/db.js';
import dotenv from 'dotenv'
import {User} from './models/User.model.js'
import { registerValidations } from './validations/user.validation.js';
import { refineValidationsObject } from './utils/helper.js';
import cors from 'cors'
// 
dotenv.config();

const app = express();

app.use(cors())
app.use(express.json());


app.get("/getUsers" , async (req , res) => {

    const users = await User.find();

    return res.status(200).json({
        success : true,
        message : users
    })
})

app.post(`/register` , async (req , res) => {

    const {firstName , lastName , email , password} = req.body;

    const inputs = registerValidations.safeParse({firstName , lastName  , email , password})

    if(inputs.success ===  false){
        return res.status(400).json({
            success : false,
            message : refineValidationsObject(inputs)
        })
    }

    const isEmailAlreadyTaken = await User.findOne({email}); 

    console.log("isEmailAlreadyTaken" , isEmailAlreadyTaken)


    if(isEmailAlreadyTaken){
        return res.status(400).json({
            success : false,
            message : "email already taken by another user"
        })
    }

    await User.create({email , password , firstName , lastName})

    return res.status(200).json({
        success : true,
        message : "account created successfully!",
    
    })


})

connectToDB().then(() => {
    app.listen(8000 , () => {
    
    return console.log("start to listen on port 8000")
  })
})
