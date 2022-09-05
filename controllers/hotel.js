import Hotel from "../models/Hotel.js"

export const createHotle=async(req,res,next)=>{

    const newHotel=new Hotel(req.body)
    try {
        const savehotle=await newHotel.save()
        res.status(200).json(savehotle)
    } catch (err) {
        next(err)
    }
}

export const updateHotl=async(req,res,next)=>{

    try {
        //findbyidandupdate without new:true will display the previos item that we want to update it
        const updatehotle=await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatehotle)
    } catch (err) {
        next(err)
    }
}

export const deleteHotl=async(req,res,next)=>{

    try {
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("hotle has been deleted")
    } catch (err) {
        next(err)
    }
}

export const getHotle=async(req,res,next)=>{

    try {
        const oneHotle = await Hotel.findById(req.params.id)
         res.status(200).json(oneHotle)
     } catch (err) {
        next(err)
     }
}
export const getAllHotle=async(req,res,next)=>{

    try {
        const getAllHotle = await Hotel.find()
         res.status(200).json(getAllHotle)
     } catch (err) {
       next(err)
     }
}