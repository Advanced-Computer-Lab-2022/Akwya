import admin from "../models/admin.js";
import trainee from "../models/trainee.js"
import instructor from "../models/instructor.js"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

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