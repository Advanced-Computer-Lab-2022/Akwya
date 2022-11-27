import trainee from "../models/trainee.js"
import course from "../models/course.js";

export const viewRate = async (req, res) => {
 
   
    try {


        const newCourse = await course.updateOne({_id:req.params.id},{$push:{noOfRatings:{rate:req.query.rating}}});
        res.status(200).json(newCourse)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
     
}


export const rateCourse = async (req, res) => {
 
   
    try {


        const newCourse = await course.updateOne({_id:req.params.id},{$push:{noOfRatings:{rate:req.query.rating,review:req.query.review}}});
        res.status(200).json(newCourse)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
     
}

export const getTrainee= async(req,res) => {
    try{
        const trainees= await trainee.find({});
        res.status(200).json(trainees)
    }

    catch(error){
        res.status(400).json({message: error.message})
    }
}
