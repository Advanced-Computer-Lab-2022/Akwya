import user from '../models/user.js';
import mongoose from 'mongoose';
import course from '../models/course.js';



export const getAllUser= async(req,res) => {

    try{
        const userr= await user.find({});
        res.status(200).json(userr)
    }

    catch(error){
        res.status(400).json({message: error.message})
    }
}


export const createUser= async(req,res) => {
    const {username,Fname,Lname,Email,password,gender,user_type,country}=req.body

    
    try {
        const userr = await user.create({username,Fname,Lname,Email,password,gender,user_type,country});
        res.status(200).json(userr)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
     
    // res.json({mssg:'post a new guests'})

}
        //get a single user
        export const getUser = async(req , res) => {
            const {id} =req.params
    
            if(!mongoose.Types.ObjectId.isValid(id)){
                return res.status(404).json({error:'no user found' })
            }
            const userr= await user.findById({_id: id})
            if(!userr){
                return res.status(404).json({error: 'no such user'})
            }
            res.status(200).json(userr)
        }


        //to delete a user
    export const deleteUser = async(req , res) => {
        const {id} =req.params

        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error:'no user found' })
        }
        const userr= await user.findOneAndDelete({_id: id})
        if(!userr){
            return res.status(404).json({error: 'no such user'})
        }
        res.status(200).json(userr)
    }


    //update a user
    export  const updateUser= async(req, res) => {
        const {id} =req.params

        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error:'no user found' })
    }
    const userr= await user.findOneAndUpdate({_id: id} ,{
        ...req.body
    })
    if(!userr){
        return res.status(404).json({error: 'no such user'})
    }
    res.status(200).json(userr)
}
   

export const rateCourse = async (req, res) => {
 
   
    try {
  
        const newCourse = await course.findOneAndUpdate({_id:req.params.id},{rating: (rating*noOfRatings+req.query.rating)/(noOfRatings+1)},{
         new: true}  );
        res.status(200).json(newCourse)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
     
}