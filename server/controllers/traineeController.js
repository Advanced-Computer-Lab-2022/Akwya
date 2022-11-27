import trainee from "../models/trainee.js"
import course from "../models/course.js";

export const rateCourse = async (req, res) => {
 
   
    try {
  
        const newCourse = await course.findOneAndUpdate({_id:req.params.id},{rating: (5*noOfRatings+req.query.rating)/(noOfRatings+1)},{
         new: true}  );
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
