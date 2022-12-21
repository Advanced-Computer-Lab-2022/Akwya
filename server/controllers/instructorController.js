//import instructor from '../models/instructor.js';
import instructor from "../models/instructor.js"
import course from "../models/course.js"
import e from "express"
import video from "../models/videos.js"
import nodemailer from 'nodemailer'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


//view all the titles of the courses given by him/her
const viewCoursestitleI = async (req, res) => {
    const Coursestitles = await course.find({instructor:{$eq:req.params.id}}).select('title')

    res.status(200).json(Coursestitles)

}

//filter the courses given by him/her based on a subject
const filterCoursesBySubjectI = async (req, res) => {
    
    const Coursestitles = await course.find({$and:[{instructor:{$eq:req.params.id}},{subject:req.query.subject}]})

    res.status(200).json(Coursestitles)

}



//filter the courses given by him/her based on price
const filterCoursesByPriceI = async (req, res) => {

    let range={}
    if(req.query.price)
    {
        range= {price:req.query.price.split(',')}
    
    const Coursestitles = await course.find({$and:[{instructor:{$eq:req.params.id}},{price: {$gt: range.price[0], $lt:range.price[1]}}]})

    res.status(200).json(Coursestitles)

}
}
//search for a course based on course title or subject or instructor
const searchCourseI = async (req, res) => {
    try {
        const search = req.params.search;
        
        const objs = await course.find({$and:[{instructor:{$eq:req.params.id}},{$or:[{title:{ $regex:'.*'+search+'.*'} }, {subject:{ $regex:'.*'+search+'.*'} } ] }]});

                res.json(objs)

    } catch (error) {

        res.json({message: error}); }
    }


  //create a new course and fill in all its details inclding title, subtitles, price and short summary about the entire course

const createCourseI = async (req, res) => {
    const { title,
        subtitles,
        price,
        summary,
      
    } = req.body


    try {
        const newCourse = await course.create({
            title,
            subtitles,
            price,
            summary,
        });
        res.status(200).json(newCourse)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

    console.log("tmm")
}


//delete all instructors
const deleteAllInstructors = async (req, res) => {

    const badCourse2 = await instructor.deleteMany()
    res.status(200).json("deleted all instructors")
}



//filter by rating
const filterCoursesByRatingAndSubject = async (req, res) => {
    let range={}
    let Coursestitles={}
    if(req.query.subjectAndRating)
    {
        range= {subjectAndRating:req.query.subjectAndRating.split(',')}}

    if(range.subjectAndRating[0]==''){
         Coursestitles = await course.find({rating:range.subjectAndRating[1]})
    
}
    else{
         Coursestitles = await course.find({$and:[{rating:range.subjectAndRating[1]},{subject: range.subjectAndRating[0]}]})
    }
    res.status(200).json(Coursestitles)

}


const addVideo = async (req, res) => {
    const { title,
        url,
        summary,
        totalHours
    } = req.body;

const courseID = req.params.courseID

    try {
        const newVideo = await video.create({
            title,
            url,
            courseID,
            summary,
            totalHours,
        });
        res.status(200).json(newVideo)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

    console.log("tmm")
}

const addPreview = async (req, res) => {
    const { previewVideo } = req.body;

const courseID = req.params.courseID

    try {
        const newVideo = await course.findOneAndUpdate({_id:req.params.courseID},{previewVideo:previewVideo},{
            new: true}  );
        res.status(200).json(newVideo)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

    console.log("tmm")
}

const viewVideos = async (req, res) => {
    const Coursestitles = await video.find({courseID:{$eq:req.params.courseID}})

    res.status(200).json(Coursestitles)

}

const viewPreview = async (req, res) => {
    const Coursestitles = await course.find({_id:{$eq:req.params.courseID}}).select('previewVideo')

    res.status(200).json(Coursestitles)

}

const CanViewVideos = async (req, res) => {
    const Coursestitles = await course.find({$and:[{_id:{$eq:req.params.courseID}},{instructor:{$eq:req.params.instructorID}}]})
    res.status(200).json(Coursestitles)

}//const coursesPrices = await course.find({}).select('title price')
// const  instructorId = req.body.id

const viewEmail = async (req, res) => {
    

    try{
       
        const view = await instructor.find({_id:{$eq:req.params.id}}).select('email')
        
        console.log(view)

        res.status(200).json(view)
    }
    catch( error ){
        res.status(400).json({error: error.message})
        console.log("aytenn")

    }



}

const editEmail = async (req, res) => {
 
   
   try {
 
       const newInstructor = await instructor.findOneAndUpdate({_id:req.params.id},{email:req.query.email},{
        new: true}  );
       res.status(200).json(newInstructor)
   } catch (error) {
       res.status(400).json({error: error.message})
   }

   
}
const changePassword= async (req, res) => {
 
   
    try {
        
        const change = await instructor.findOneAndUpdate({_id:req.params.id},{password:req.query.password},{
         new: true}  );
        res.status(200).json(change)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
    
const checkPassword= async (req, res) => {
 
   
    try {
        
        const check = await instructor.find({_id:req.params.id}).select('password');
        res.status(200).json(check)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const ViewRating = async (req, res) => {
    //instructor view his rating

    try{
       
        const view = await instructor.find({_id:{$eq:req.params.id}}).select('ratings')
        
        console.log(view)

        res.status(200).json(view)
    }
    catch( error ){
        res.status(400).json({error: error.message})
       

    
    }}


 
const editBio = async (req, res) => {
 
   
    try {
  
        const newInstructor = await instructor.findOneAndUpdate({_id:req.params.id},{minibiography:req.query.minibiography},{
         new: true}  );
        res.status(200).json(newInstructor)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
     
    
 
 
 }



 const getRatings = async (req, res) => {
 //this is for the course ratings
   
    try {

        const newCourse = await course.find({_id:req.params.id}).select('noOfRatings');
        res.status(200).json(newCourse)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
     
}

// const resetPassword = async (req,res)=>{
//     const userEmail = req.query.mail;
//     await instructor.find({email: req.query.mail}).then( async (result) =>  {
//         var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//         var length = 8;
//         var newRandom = "";
//         for (var i = 0; i<=length; i++) {
//             var randomNumber = Math.floor(Math.random() * chars.length);
//             newRandom += chars.substring(randomNumber, randomNumber+1);
//         }
//         await instructor.findOneAndUpdate({_id: result[0]._id},{password:newRandom},{ new: true}).then((result)=>{
//             const mail = {
//                 from: process.env.AUTH_EMAIL,
//                 to: userEmail,
//                 subject: "Reset Your Password",
//                 html: `<p>Forgot your password? We've reset it for you!</p>
//                     <p>Use this new password to login safely: <strong> ${newRandom} </strong></p>`
//             }
        
//             let transporter = nodemailer.createTransport({
//                 service: 'hotmail',
//                 auth: {
//                     user: process.env.AUTH_EMAIL,
//                     pass: process.env.AUTH_PASS
//                 }
//             })
//             transporter.sendMail(mail).then((result)=>{
//                 return res.status(200).json({status:true,Message:"Reset mail sent"})
//             }).catch((error) => {
//                 return res.status(400).json({status:false, error:error.message ,Message:"Failed to send mail"}) })
//              }).catch((error)=>{
//                 return res.status(400).json({status:false, error:error.message,Message:"Failed to update password"}) })
//     }).catch((error)=>{
//         return res.status(400).json({status:false, error:error .message,Message:"Email not registered"}) });
//     }

    const maxAge = 3 * 24 * 60 * 60
    const createToken = (name) => {
        return jwt.sign({ name }, process.env.token, {
            expiresIn: maxAge
        });
    }

    // const signin = async (req, res) => {
    //     // TODO: Login the user
    //     const { username, password } = req.body;
    //     console.log('hi');

    //     try {
            
    //         const user = await instructor.findOne({ username: 'joe'});
    //         if(!user){
    //             console.log('username');
    //             res.status(400).json({ error: "Username doesn't match"})
    //             return
    //         }
    //         if(await bcrypt.compare(password, user.password)){
    //             const token = createToken(username);
    //             res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    //             console.log('tmm');

    //             res.status(200).json(user)    
    //             return    
    //         }
    //         else {
    //             console.log('pw');

    //             res.status(400).json({ error: "Password doesn't match"})
    //             return
    //         }
    //     } catch (error) {
    //         console.log('idk');

    //         res.status(400).json({ error: error.message })
    //         return
    //     }
    // }
     
    // const logout = async (req, res) => {
    //     res.clearCookie('jwt');
    //     res.status(200).json("logged out");
    //     res.end();
    
    // }
    const notFirst  = async (req, res) => {
        try {
            const inst = await instructor.findOneAndUpdate({_id:req.params.id},{firstLogin:false},{
             new: true}  );
            res.status(200).json(inst)
        } catch (error) {
            res.status(400).json({error: error.message})
        }
     } 

export {  filterCoursesByPriceI  , viewCoursestitleI  , createCourseI, deleteAllInstructors,filterCoursesBySubjectI,
    filterCoursesByRatingAndSubject, searchCourseI ,addVideo ,viewVideos , viewEmail ,editEmail,editBio, CanViewVideos, addPreview,
    viewPreview, ViewRating, getRatings,changePassword, checkPassword,notFirst}