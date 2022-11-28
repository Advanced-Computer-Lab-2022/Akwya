//import instructor from '../models/instructor.js';
import instructor from "../models/instructor.js"
import course from "../models/course.js"
import e from "express"
import video from "../models/videos.js"



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





export {  filterCoursesByPriceI  , viewCoursestitleI  , createCourseI, deleteAllInstructors,filterCoursesBySubjectI,
    filterCoursesByRatingAndSubject, searchCourseI ,addVideo ,viewVideos , viewEmail ,editEmail,editBio, CanViewVideos, addPreview,
    viewPreview, ViewRating, getRatings,changePassword }