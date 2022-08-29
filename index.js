//using type to import package
import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

const app=express()
dotenv.config()


const connect=async()=>{
    
    try {

        await mongoose.connect(process.env.MONGO)
        console.log('database is connected')

    } catch (error) {
        console.log(error)
    }
    
}

app.listen(3000,()=>{
    connect()
    console.log('server is running')
})