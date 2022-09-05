import express from "express"
import { createHotle, deleteHotl, getAllHotle, getHotle, updateHotl } from "../controllers/Hotel.js"
import Hotel from "../models/Hotel.js"
import { createError } from "../util/error.js"
//if we use import we should put the extension of the file
const router=express.Router()

// create hotel
router.post("/",createHotle)

//update hotel
router.put("/:id",updateHotl)

//delete hotel
router.delete("/:id",deleteHotl)
//get hotel by id
router.get("/:id",getHotle)
//get all hotel 
router.get("/",getAllHotle)

export default router