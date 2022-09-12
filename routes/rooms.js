import express from "express"
import { createRoom, deleteRoom, getAllRoom, getRoom, updateRoom } from "../controllers/Room.js"
import Room from "../models/Room.js"
import { createError } from "../util/error.js"
import { verifyAdmin } from "../util/verifyToken.js"
//if we use import we should put the extension of the file
const router=express.Router()

// create room
router.post("/:hotelid",verifyAdmin,createRoom)

//update hotel
router.put("/:id",verifyAdmin,updateRoom)

//delete room
router.delete("/:id/:hotelid",verifyAdmin,deleteRoom)
//get room by id
router.get("/:id",getRoom)
//get all rooms 
router.get("/",getAllRoom)

export default router