import express from "express"
import { deleteUser, getAllUser, getUser, updateUser } from "../controllers/user.js"
import Hotel from "../models/Hotel.js"
import { createError } from "../util/error.js"
import { verifyAdmin, verifyToken, verifyUser } from "../util/verifyToken.js"
//if we use import we should put the extension of the file
const router=express.Router()

// // check the existance of token(the right to get some access)
// router.get("/checkauthentication",verifyToken,(req,res,next)=>{
//     res.send("hello user, you are logged in")
// })

// // just to verufy the user
// router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
//     res.send("hello user, you are logged in and you can delete your account")
// })
// // just to verufy the admin 
// router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
//     res.send("hello admin, you are logged in and you can delete all accounts")
// })

//update user
router.put("/:id",verifyUser,updateUser)

//delete user
router.delete("/:id",verifyUser,deleteUser)
//get user by id
router.get("/:id",verifyUser,getUser)
//get all user 
router.get("/",verifyAdmin,getAllUser)

export default router