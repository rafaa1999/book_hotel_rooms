//using type to import package
import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import cookieParser from "cookie-parser"
const app=express()
dotenv.config()


const connect=async()=>{
    
    try {

        await mongoose.connect('mongodb+srv://rafaa:rafaa@cluster0.5ryg2u9.mongodb.net/book_hotel_rooms?retryWrites=true&w=majority')
        console.log('database is connected')

    } catch (error) {
        console.log(error)
    }
    
}

//middelware 
//user cookie-parser
app.use(cookieParser())
app.use(express.json())

app.use("/api/auth",authRoute)
app.use("/api/users",usersRoute)
app.use("/api/hotels",hotelsRoute)
app.use("/api/rooms",roomsRoute)

//error handler middelware
app.use((err,req,res,next)=>{
    const errorStatus=err.status || 500
    const errorMessage=err.message || "something went wrong"
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack
    })
})






app.listen(8800,()=>{
    connect()
    console.log('server is running')
})