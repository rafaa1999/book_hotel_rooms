import express from "express"
import Hotel from "../models/Hotel.js"
import { createError } from "../util/error.js"
//if we use import we should put the extension of the file
const router=express.Router()

// create hotel
router.post("/",async(req,res)=>{
    const newHotel=new Hotel(req.body)
    try {
        const savehotle=await newHotel.save()
        res.status(200).json(savehotle)
    } catch (err) {
        console.error(err)
        res.status(500).json(err)
    }
})
//update hotel
router.put("/:id",async(req,res)=>{
    try {
        //findbyidandupdate without new:true will display the previos item that we want to update it
        const updatehotle=await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatehotle)
    } catch (err) {
        console.error(err)
        res.status(500).json(err)
    }
})

//delete hotel
router.delete("/:id",async(req,res)=>{
    try {
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("hotle has been deleted")
    } catch (err) {
        console.error(err)
        res.status(500).json(err)
    }
})
//get hotel by id
router.get("/:id",async(req,res)=>{
    try {
       const oneHotle = await Hotel.findById(req.params.id)
        res.status(200).json(oneHotle)
    } catch (err) {
        console.error(err)
        res.status(500).json(err)
    }
})
//get all hotel 
router.get("/",async(req,res,next)=>{

    try {
       const getAllHotle = await Hotel.find()
        res.status(200).json(getAllHotle)
    } catch (err) {
      next(err)
    }
})

export default router