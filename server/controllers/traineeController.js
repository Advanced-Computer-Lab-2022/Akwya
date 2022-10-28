import trainee from "../models/trainee.js"

export const getTrainee= async(req,res) => {
  
  console.log("plplplpz")
    try{
        const trainees= await trainee.find({});
        res.status(200).json(trainees)
    }

    catch(error){
        res.status(400).json({message: error.message})
    }
}

