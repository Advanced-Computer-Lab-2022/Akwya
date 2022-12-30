import admin from "../models/admin.js";
import trainee from "../models/trainee.js"
import instructor from "../models/instructor.js"

import course from "../models/course.js"

import courseRequest from "../models/courseRequest.js"



import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import courseBought from "../models/courseBought.js";

export const maxAge = 3 * 24 * 60 * 60;
export const createToken = (name) => {
    return jwt.sign({ name }, process.env.token, {
        expiresIn: maxAge
    });
};


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
    // console.log("tmm")

    const {username,password}=req.body

    try {
            // console.log("tmm")
            const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(password, salt);
            const newadmin = await admin.create({username:username,password:hashedPassword});
            newadmin.save();
            const token = createToken(username);
    
            res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
            res.status(200).json(newadmin)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
     

}

export const createTrainee= async(req,res) => {
    const {username,password,email}=req.body
    const wallet=0;
    const type = 'corporate'
    //bykon corporate
    try {
            const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(password, salt);
            const newTrainee = await trainee.create({username:username,password:hashedPassword,email:email,traineetype:type,wallet:wallet});
            const token = createToken(username);
    
            res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
            res.status(200).json(newTrainee)
      
    } catch (error) {
        res.status(400).json({error: error.message})
    }


}


export const createInstructor= async(req,res) => {
    const {username,password,email}=req.body
     console.log(email);
     const minibiography='';
    
    try {
        const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(password, salt);
            const newInstructor = await instructor.create({username:username,password:hashedPassword,email:email,minibiography:minibiography,firstLogin:true});
            const token = createToken(username);
    
            res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
            res.status(200).json(newInstructor)
    } catch (error) {
        res.status(400).json({error: error.message})
    }

    
     

}


export const courseDiscountAdmin = async (req, res) => {
    try{

      //promotionStart
    const discount=await course.findOneAndUpdate({_id:req.params.id},{promotion:req.query.promotion},{new: true}  )

    const date=await course.findOneAndUpdate({_id:req.params.id},{promotionStart:req.query.promotionStart},{promotionExpiry:req.query.promotionExpiry},{new: true}  )
       
        res.status(200).json({discount, date})
    


    }
    catch (error) {
    res.status(400).json({error: error.message})
}
 }


export const promotionFound = async (req, res) => {
try{
    const course1 =await course.findOne({_id:req.params.id})
    res.status(200).json(course1)

}
catch (error) {
    res.status(400).json({error: error.message})
}
}


export const refundTrainee= async(req,res) => {
    
    try {
        const traineee = await trainee.findOne({username:req.query.username});
        const newWallet = parseInt(traineee.wallet) + parseInt(req.query.amount)
        const refunded = await trainee.findOneAndUpdate({username:req.query.username}, {wallet: newWallet},{
            new: true} );
        res.status(200).json(refunded)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

export const grantAccess= async(req,res) => {
    const traineeID =req.params.TraineeID
    const courseID =req.params.CourseID;

    const traineee = await trainee.findOne({_id:req.params.TraineeID});
    const coursee =  await course.findOne({_id:req.params.CourseID});

    try {
        const oldrequest = await courseRequest.findOneAndDelete({$and:[{CourseID:courseID},{TraineeID:traineeID}]});
        const addcourse = await trainee.updateOne({_id:traineeID},{$push:{courses:{courseid:courseID,progress:0}}});
        const courseee = await course.findOneAndUpdate({_id:req.params.CourseID}, {$inc:{registeredTrainees: 1}});

        const addBought = await courseBought.create({username:traineee.username,CourseID:req.params.CourseID,
            TraineeID:traineee._id,courseName:coursee.title,price:0,refundRequested:false});
            addBought.save();

        res.status(200).json({addcourse,oldrequest})
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

export const requestAccess= async(req,res) => {
    const traineeID =req.params.TraineeID
    const courseID =req.params.CourseID;

    try {
        const traineee = await trainee.findOne({_id:traineeID});
        const coursee = await course.findOne({_id:courseID});
        const oldrequest = await courseRequest.findOne({$and:[{CourseID:coursee._id},{TraineeID:traineee._id}]});
        if(oldrequest!=null){
            res.status(400).json({message:"Course Already Requested"})
            return;
        }

        const newrequest = await courseRequest.create({username:traineee.username,CourseID:coursee._id,
        TraineeID:traineee._id,courseName:coursee.title});
        newrequest.save();
        res.status(200).json(newrequest)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


export const viewRequests= async(req,res) => {
    const allrequests = await courseRequest.find({}).select('username TraineeID CourseID courseName')
    res.status(200).json(allrequests)


}

export const viewRefunds= async(req,res) => {
    const allrequests = await courseBought.find({refundRequested:true})
    res.status(200).json(allrequests)


}

