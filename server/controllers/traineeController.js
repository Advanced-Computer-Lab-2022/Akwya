import trainee from "../models/trainee.js";
import course from "../models/course.js";
import admin from "../models/admin.js";
import videos from "../models/videos.js";
import instructor from "../models/instructor.js";
import userWatchVideos from "../models/userWatchVideos.js";
import nodemailer from 'nodemailer';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import courseBought from "../models/courseBought.js";
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
        
        
        const traineeee = await trainee.findOne({_id:req.params.traineeID});
        const coursee =  await course.findOne({_id:req.params.courseID});
        const pricee = Math.round(coursee.price-(coursee.price*coursee.promotion/100));
        const payment = traineeee.wallet-pricee;
        
        if(traineeee.wallet<pricee){
            res.status(400).json({message:"You Dont Have Enough Funds in your Wallet"})
            return;
        }
           
        const traineee = await trainee.findOneAndUpdate({_id:req.params.traineeID},{$push:{courses:{courseid:req.params.courseID,
            progress:0,courseName:coursee.title}}});
        const traineeeee = await trainee.findOneAndUpdate({_id:req.params.traineeID},{$set:{wallet:payment}});

        const courseee = await course.findOneAndUpdate({_id:req.params.courseID}, {$inc:{registeredTrainees: 1}});


        const addBought = await courseBought.create({username:traineee.username,CourseID:req.params.courseID,
            TraineeID:traineee._id,courseName:coursee.title,price:pricee,refundRequested:false});
            addBought.save();
        
        res.status(200).json(addBought)
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

const requestRefund = async(req, res) => {

    
        try {
            const alreadyRequested = await courseBought.findOne({$and:[{CourseID:req.params.CourseID},{TraineeID:req.params.TraineeID}]});
            if(alreadyRequested.refundRequested==true){
                res.status(400).json({message:"Refund Request Pending..."})
                return;
            }
            const refund = await courseBought.findOneAndUpdate({$and:[{CourseID:req.params.CourseID},{TraineeID:req.params.TraineeID}]},{$set:{refundRequested:true}});
            const deleteprogress = await userWatchVideos.deleteMany({$and:[{CourseID:req.params.CourseID},{TraineeID:req.params.TraineeID}]})
            res.status(200).json(refund)
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    
        console.log("tmm")
    }

    const refundCourse = async(req, res) => {
        
        try {
            const addcourse = await trainee.findOneAndUpdate({_id:req.params.TraineeID},{$pull:{courses:{courseid:req.params.CourseID}}});
            const removeCourse = await courseBought.findOneAndDelete({$and:[{CourseID:req.params.CourseID},{TraineeID:req.params.TraineeID}]});

            const refund = addcourse.wallet+removeCourse.price

            const addrefund = await trainee.updateOne({_id:req.params.TraineeID},{$set:{wallet:refund}});
            const courseee = await course.findOneAndUpdate({_id:req.params.CourseID}, {$inc:{registeredTrainees: -1}});
            res.status(200).json(removeCourse)
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

        if(result.length==0){
            //didnt find in trainee, check instructor
            await instructor.find({email: req.query.mail}).then( async (result) =>  {
                if(result.length==0){
                    return res.status(400).json({status:false,Message:"Email not registered"})
                }
                var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                var length = 8;
                var newRandom = "";
                for (var i = 0; i<=length; i++) {
                    var randomNumber = Math.floor(Math.random() * chars.length);
                    newRandom += chars.substring(randomNumber, randomNumber+1);
                }
                await instructor.findOneAndUpdate({_id: result[0]._id},{password:newRandom},{ new: true}).then((result)=>{
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
            })  
        }
        else {
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
             }
    }).catch((error)=>{
        return res.status(400).json({status:false, error:error .message,Message:"Email not registered"}) });
    }

    const getWallet= async (req, res) => {

   
        try {
            
            const wallet = await trainee.findOne({_id:req.params.id}).select('wallet');
            res.status(200).json(wallet)
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    }












const sendCertificate = async (req,res)=>{
    const coursee = req.params.CourseID;
    const traine = await trainee.findOne({_id:req.params.TraineeID}).select('email');
    const cours = await course.findOne({_id:req.params.CourseID}).select('title');

    console.log("Title: "+cours.title)
    console.log("Email: "+traine.email)

            const mail = {
                from: process.env.AUTH_EMAIL,
                to: traine.email,
                subject: cours.title,
                html: `<p>Congratulations!</p>
                    <p>You have completed <strong> 100% </strong> of this course. Keep it up.</p>
                    <p>Your certificate is attached below</p>`,
                attachments: [{
                    filename: 'Certificate.pdf',
                    path: '../server/Certificate.pdf',
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
        const type = 'individual'
        try {
            const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(password, salt);
            const newUser = await trainee.create({ username: username, email: email, password: hashedPassword, fname: fname, lname:lname,gender:gender,traineetype:type,wallet:wallet});
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
            let user = await instructor.findOne({ username: username});
            if(!user){
                user = await trainee.findOne({ username: username});
                if(!user) {
                    user = await admin.findOne({ username: username});
                    if(!user) {
                        res.status(400).json("Username doesn't match")
                        return;
                    }else {
                        type='admin'
                    }
                }
                else {
                    //get type of trainee
                    if(!user.traineetype){
                        type='individual'
                    }else {
                        type = user.traineetype
                    }
                }
            }
            else {
                type = 'instructor'
            }
            if(await bcrypt.compare(password, user.password)){
                const token = createToken(user.name);
                res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
                res.status(200).json({type,user}) 
                return;       }
            else {
                res.status(400).json("Password doesn't match")
                return;
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

    const videoCount= async(req,res) => {
        try{
            const videoos= await videos.find({courseID:req.params.CourseID}).count();
            res.status(200).json(videoos)
        }
    
        catch(error){
            res.status(400).json({message: error.message})
        }
    }

    const getUserProgress= async(req,res) => {
        try{


            const videoos= await userWatchVideos.find({$and:[{CourseID:req.params.CourseID},{TraineeID:req.params.TraineeID}]}).count();

            const vidcount= await videos.find({courseID:req.params.CourseID}).count();

        
            res.status(200).json(Math.round((videoos/vidcount)*100))
        }
    
        catch(error){
            res.status(400).json({message: error.message})
        }
    }

    const userWatchVideo= async(req,res) => {
        try{
            const videoos= await videos.findOne({_id:req.params.VideoID});

            const oldWatchedVideo = await userWatchVideos.findOne({$and:[{VideoID:videoos._id},{TraineeID:req.params.TraineeID}]});
        if(oldWatchedVideo!=null){
            res.status(400).json({message:"Video Already Watched"})
            return;
        }
            
            const newWatchedVideo = await userWatchVideos.create({VideoID:videoos._id,CourseID:videoos.courseID,
                TraineeID:req.params.TraineeID});
                newWatchedVideo.save();
            
            const traineee = await trainee.findOneAndUpdate({_id:{$eq:req.params.TraineeID}},
                {$inc:{"courses.$[course].progress": 1}},{ arrayFilters: [  { "course.courseid":  videoos.courseID } ] });



            res.status(200).json(traineee)
        }
    
        catch(error){
            res.status(400).json({message: error.message})
        }
    }

    const myCourses= async(req,res) => {
        try{

            const courses= await courseBought.find({TraineeID:req.params.TraineeID})
            const courseDetails = await course.find({}) 
            let common = [];                   // Array to contain common elements
            for(let i=0 ; i<courses.length ; i++) {
                for(let j=0 ; j<courseDetails.length ; j++) {
                    
                if(courses[i].CourseID == courseDetails[j]._id.toString()) {  
                    console.log('dakhalt');     // If element is in both the arrays
                    common.push(courseDetails[j]);        // Push to common array
                }
                }
            }
            res.status(200).json(common)
        }
    
        catch(error){
            res.status(400).json({message: error.message})
        }
    }

export {getTrainee,registerCourse,isRegistered,dropCourse,rateCourse,changePassword,rateInstructor,checkPassword,
    resetPassword,getWallet,videoCount,sendCertificate,signUp,login,logout,userWatchVideo,getUserProgress,
    refundCourse,requestRefund,myCourses}

