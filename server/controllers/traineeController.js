import trainee from "../models/trainee.js"

const getTrainee= async(req,res) => {
    try{
        const trainees= await trainee.find({});
        res.status(200).json(trainees)
    }

    catch(error){
        res.status(400).json({message: error.message})
    }
}

const changePassword= async (req, res) => {
   
    try {
        const change = await trainee.findOneAndUpdate({_id:req.params.id},{password:req.query.password},{
         new: true}  );
        res.status(200).json(change)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
export {getTrainee, changePassword};
