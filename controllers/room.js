import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../util/error.js";


export const createRoom=async(req,res,next)=>{
    // get the id of hotel to link with
    // his rooms
    const hotelId=req.params.hotelId
    const newRoom=new Room(req.body)

    try {
        const savedRoom=await newRoom.save()
        try {
            // push rooms in their own hotel
            await Hotel.findByIdAndUpdate(hotelId,{ $push :{rooms: savedRoom._id}})
        } catch (err) {
            next(err)
        }
        res.status(200).json(savedRoom)
        
    } catch (err) {
        next(err)
    }
    
}


export const updateRoom=async(req,res,next)=>{

    try {
        //findbyidandupdate without new:true will display the previous item that we want to update it
        const updateRoom=await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updateRoom)
    } catch (err) {
        next(err)
    }
}

export const deleteRoom=async(req,res,next)=>{
    const hotelId=req.params.hotelId
    try {
        await Room.findByIdAndDelete(req.params.id)
        try {
            // push rooms in their own hotel
            await Hotel.findByIdAndUpdate(hotelId,{ $pull :{rooms: req.params.id}})
        } catch (err) {
            next(err)
        }
        res.status(200).json("room has been deleted")
    } catch (err) {
        next(err)
    }
}

export const getRoom=async(req,res,next)=>{

    try {
        const oneRoom = await Room.findById(req.params.id)
         res.status(200).json(oneRoom)
     } catch (err) {
        next(err)
     }
}
export const getAllRoom=async(req,res,next)=>{

    try {
        const getAllRoom = await Room.find()
         res.status(200).json(getAllRoom)
     } catch (err) {
       next(err)
     }
}