import express from "express"

const router=express.Router()

router.get("/",(req,res)=>{
    res.send("this is auth")
})

router.get("/register",(req,res)=>{
    res.send("this is for auth register endpoint")
})


export default router