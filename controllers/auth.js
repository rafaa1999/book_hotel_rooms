import User from "../models/User.js"
import bcrypt from "bcryptjs"
import { createError } from "../util/error.js";

export const register=async(req,res,next)=>{

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
 try {
    const newUser=new User({
        username:req.body.username,
        email:req.body.email,
        password:hash,
    })

    await newUser.save()
    res.status(200).json(newUser)
 } catch (err) {
    next(err)
 }
}



export const login=async(req,res,next)=>{

 try {
    const user=await User.findOne({username:req.body.username})
    //verify if the user exist
    if(!user){
        return next (createError(404,"uer not found"))
    }
    const isPasswordCorrect=await bcrypt.compare(req.body.password,user.password)
    // check if password correct or not
    if(!isPasswordCorrect){
        return next (createError(400,"wrong passwor or maybe uername"))
    }
    // we use that to do not show the password and isAdmin for the client side
    //use user.doc cos user under ._doc
    const{password,isAdmin,...otherDetails}=user._doc
    //if it's ok we send our user
    res.status(200).json({...otherDetails})
} catch (err) {
    next(err)
 }
}