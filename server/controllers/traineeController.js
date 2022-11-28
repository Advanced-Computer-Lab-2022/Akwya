import trainee from "../models/trainee.js"
import course from "../models/course.js";
import instructor from "../models/instructor.js";


const rateCourse = async (req, res) => {
 
   
    try {


        const newCourse = await course.updateOne({_id:req.params.id},{$push:{noOfRatings:{rate:req.query.rating,review:req.query.review}}});
        res.status(200).json(newCourse)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
     
}

const rateInstructor = async (req, res) => {
 
   
    try {


        const courseRated = await course.findOne({_id:req.params.id});
        const newinstructor = await instructor.updateOne({_id:courseRated.instructor._id},{$push:{ratings:{rate:req.query.rate, review:req.query.review}}})
        res.status(200).json(newinstructor)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
     
}



const getTrainee= async(req,res) => {
    try{
        const trainees= await trainee.find({});
        res.status(200).json(trainees)
    }

    catch(error){
        res.status(400).json({message: error.message})
    }
}

const registerCourse = async(req, res) => {
    
const  traineeID = req.body.traineeID
const courseID = req.params.courseID

    try {
        const addcourse = await trainee.updateOne({_id:req.params.traineeID},{$push:{courses:{courseid:req.params.courseID,progress:0}}});
        res.status(200).json(addcourse)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

    console.log("tmm")
}

const dropCourse = async(req, res) => {
    
    const  traineeID = req.body.traineeID
    const courseID = req.params.courseID
    
        try {
            const addcourse = await trainee.updateOne({_id:req.params.traineeID},{$pull:{courses:{courseid:req.params.courseID}}});
            res.status(200).json(addcourse)
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    
        console.log("tmm")
    }

const isRegistered = async (req, res) => {

    try {
        const Coursestitles = await trainee.find({$and:[{_id:{$eq:req.params.traineeID}},{courses:{$elemMatch:{courseid:req.params.courseID}}}]})
        res.status(200).json(Coursestitles)
    } catch (error) {
        res.status(400).json({ error: error.message })
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





export {getTrainee,registerCourse,isRegistered,dropCourse,rateCourse,changePassword,rateInstructor}
