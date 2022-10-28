import admin from "../models/admin.js";
import trainee from "../models/trainee.js"
import instructor from "../models/instructor.js"

export const getAdmins= async(req,res) => {
    try{
        const admins= await admin.find({});
        res.status(200).json(admins)
    }

    catch(error){
        res.status(400).json({message: error.message})
    }
}

 export const createAdmin= async(req,res) => {
    console.log("tmm")

    const {username,password}=req.body

    try {
        console.log("tmm")
        const newadmin = await admin.create({username,password});
        newadmin.save();
        res.status(200).json(newadmin)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
     

}

export const createTrainee= async(req,res) => {
    const {username,password}=req.body

    
    try {
        const newTrainee = await trainee.create({username,password});
        res.status(200).json(newTrainee)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
     

}


export const createInstructor= async(req,res) => {
    const {username,password}=req.body

    
    try {
        const newInstructor = await instructor.create({username,password});
        res.status(200).json(newInstructor)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
     

}

