import trainee from "../models/trainee.js";
import course from "../models/course.js";
import instructor from "../models/instructor.js";
import nodemailer from 'nodemailer';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

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

const checkPassword= async (req, res) => {

   
    try {
        
        const check = await trainee.find({_id:req.params.id}).select('password');
        res.status(200).json(check)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


const resetPassword = async (req,res)=>{
    const userEmail = req.query.mail;
    await trainee.find({email: req.query.mail}).then( async (result) =>  {
        var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var length = 8;
        var newRandom = "";
        for (var i = 0; i<=length; i++) {
            var randomNumber = Math.floor(Math.random() * chars.length);
            newRandom += chars.substring(randomNumber, randomNumber+1);
        }
        await trainee.findOneAndUpdate({_id: result[0]._id},{password:newRandom},{ new: true}).then((result)=>{
            const mail = {
                from: process.env.AUTH_EMAIL,
                to: userEmail,
                subject: "Reset Your Password",
                html: `<p>Forgot your password? We've reset it for you!</p>
                    <p>Use this new password to login safely: <strong> ${newRandom} </strong></p>`
            }
        
            let transporter = nodemailer.createTransport({
                service: 'hotmail',
                auth: {
                    user: process.env.AUTH_EMAIL,
                    pass: process.env.AUTH_PASS
                }
            })
            transporter.sendMail(mail).then((result)=>{
                return res.status(200).json({status:true,Message:"Reset mail sent"})
            }).catch((error) => {
                return res.status(400).json({status:false, error:error.message ,Message:"Failed to send mail"}) })
             }).catch((error)=>{
                return res.status(400).json({status:false, error:error.message,Message:"Failed to update password"}) })
    }).catch((error)=>{
        return res.status(400).json({status:false, error:error .message,Message:"Email not registered"}) });
    }

    const getWallet= async (req, res) => {

   
        try {
            
            const wallet = await trainee.findOne({_id:req.params.id}).select('wallet');
            console.log(wallet);
            res.status(200).json(wallet)
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    }


const sendCertificate = async (req,res)=>{
    const userEmail = req.query.mail;
    const courseTitle = req.query.title;        
        
            const mail = {
                from: process.env.AUTH_EMAIL,
                to: userEmail,
                subject: courseTitle,
                html: `<p>Congratulations!</p>
                    <p>You have completed <strong> 100% </strong> of this course. Keep it up.</p>
                    <p>Your certificate is attached below</p>`,
                attachments: [{
                    filename: 'Certificate.pdf',
                    path: '/Users/yasmine/Documents/Certificate.pdf',
                    contentType: 'application/pdf'
                }],
            }
        
            let transporter = nodemailer.createTransport({
                service: 'hotmail',
                auth: {
                    user: process.env.AUTH_EMAIL,
                    pass: process.env.AUTH_PASS
                }
            })
            transporter.sendMail(mail).then((result)=>{
                return res.status(200).json({status:true,Message:"Certificate mail sent"})
            }).catch((error) => {
                return res.status(400).json({status:false, error:error.message ,Message:"Failed to send mail"}) })     
    }

    const maxAge = 3 * 24 * 60 * 60;
const createToken = (name) => {
    return jwt.sign({ name }, process.env.token, {
        expiresIn: maxAge
    });
};


    const signUp = async (req, res) => {
        const { username, email, password, fname, lname, gender } = req.body;
        const wallet = 0
        try {
            const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(password, salt);
            const newUser = await trainee.create({ username: username, email: email, password: hashedPassword, fname: fname, lname:lname,gender:gender,wallet:wallet});
            const token = createToken(newUser.name);
    
            res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
            res.status(200).json(newUser)
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    }

    const login = async (req, res) => {
        // TODO: Login the user
        const { username, password } = req.body;
        let type = '';
        try {
            
            const user = await instructor.findOne({ username: username});
            if(!user){
                const user = await trainee.findOne({ username: username});
                if(!user) {
                    res.status(400).json("Username doesn't match")
                }
                else {
                    //check type of trainee
                    type = 'individual'
                }
            }
            else {
                type = 'instructor'
            }
            if(await bcrypt.compare(password, user.password)){
                const token = createToken(user.name);
                res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
                res.status(200).json({type,user})        }
            else {
                res.status(400).json("Password doesn't match")
            }
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    }
    
    const logout = async (req, res) => {
        res.clearCookie('jwt');
        res.status(200).json("logged out");
        res.end();
    
    }

export {getTrainee,registerCourse,isRegistered,dropCourse,rateCourse,changePassword,rateInstructor,checkPassword,resetPassword,getWallet,sendCertificate,signUp,login,logout}
