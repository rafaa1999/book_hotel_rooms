import User from "../models/User.js"


export const updateUser=async(req,res,next)=>{

    try {
        //findbyidandupdate without new:true will display the previos item that we want to update it
        const updateUser=await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updateUser)
    } catch (err) {
        next(err)
    }
}

export const deleteUser=async(req,res,next)=>{

    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("user has been deleted")
    } catch (err) {
        next(err)
    }
}

export const getUser=async(req,res,next)=>{

    try {
        const oneUser = await User.findById(req.params.id)
         res.status(200).json(oneUser)
     } catch (err) {
        next(err)
     }
}
export const getAllUser=async(req,res,next)=>{

    try {
        const getAllUser = await User.find()
         res.status(200).json(getAllUser)
     } catch (err) {
       next(err)
     }
}