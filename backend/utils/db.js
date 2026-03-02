import mongoose from "mongoose"


export const connectToDB = async () => {
   try {
     await mongoose.connect(process.env.DB_URI)
    console.log("connected to db successfully")
   } catch (error) {
    console.log("error" , error)
     throw new Error(error)
   }
}