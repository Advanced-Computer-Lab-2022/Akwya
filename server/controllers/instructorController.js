//import instructor from '../models/instructor.js';
import instructor from "../models/instructor.js"
import course from "../models/course.js"


//view all the titles of the courses available including the total hours of the course and course rating
const getInstructors = async (req, res) => {
    try{
        const instructors= await instructor.find({});
        res.status(200).json(instructors)
    }

    catch(error){
        res.status(400).json({message: error.message})
    }
}

//view all the titles of the courses available including the total hours of the course and course rating
const viewCoursesI = async (req, res) => {

    const allcourses = await instructor.find({}).select('title totalHours ratings')

    res.status(200).json(allcourses)

}
//view the price of each course
const viewCoursesPricesI = async (req, res) => {

    const coursesPrices = await instructor.find({}).select('title price')

    res.status(200).json(coursesPrices)

}

//filter the courses based on a subject and/or rating
const filterCoursesOnSubjAndRatingI = async (req, res) => {

    try {
        const {id,title} = req.params;
        const objs = await instructor.find({$or:[{subject:{ $eq: title} }, {ratings:{$eq: id} }] });
    
        res.json(objs)
    
    } catch (error) {
        res.json({message: error});   
    
    
    }

    

}



//filter the courses based on price (price can be FREE)
const filterCoursesByPriceI = async (req, res) => {
    const {x,y} = req.params;
    const allcourses = await instructor.find({price: {$gt: x, $lt:y}}).sort({ createdAt: -1 })


    res.status(200).json(allcourses)
}
//search for a course based on course title or subject or instructor
const searchCourseI = async (req, res) => {
    try {
        const search = req.params.search;
        
        const objs = await instructor.find({$and:[{_id:{$eq:req.params.id}},{$or:[{title:{ $regex:'.*'+search+'.*'} }, {subject:{ $regex:'.*'+search+'.*'} }, {instructor:{ $regex:'.*'+search+'.*'} } ] }]});

                res.json(objs)

    } catch (error) {
        res.json({message: error});   


    }



}


//"choose a course from the results and view (but not open) its details including course subtitles, excercises , total hours of each subtitle, total hours of the course and price (including % discount if applicable) according to the country selected"

const viewACourseI = async (req, res) => {

    const { titlee } = req.params
    const objs = await instructor.find({title:{$eq:titlee} });

    if (!objs) {
        return res.status(404).json({ error: " No such Course" })

    }
    res.status(200).json(objs)
}

//view all the titles of the courses given by him/her
const viewCoursestitleI = async (req, res) => {
    const Coursestitles = await course.find({instructor:{$eq:req.params.id}}).select('title')

    res.status(200).json(Coursestitles)

}

//filter the courses given by him/her based on a subject or price
const filterCoursesByInstructorI = async (req, res) => {

    try {
        const {instructorr,subjectt,pricee} = req.params;
        const objs = await instructor.find({$or:[{instructor:{ $eq: instructorr} }, {subject:{$eq: subjectt} },{price:{$eq: pricee} }] });
    
        res.json(objs)
    
    } catch (error) {
        res.json({message: error});   
    
    
    }
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








//search for a course given by him/her based on course title or subject or instructor
// const searchCoursee = async (req, res) => {

//     const instructorName = req.query.instructorName;
//     if(instructorName){
//         const findname = req.params.title;
//         const objs = await instructor.find({$or:[{title:{ $regex:'.*'+findname+'.*'} }, {subject:{ $regex:'.*'+findname+'.*'} }, {instructor:{ $regex:'.*'+findname+'.*'} } ] });

//                 res.json(objs)
//     }else{
//         return res.status(404).json({ error: " Not given by instructor" })
//     }
   

//     }



export {getInstructors,viewCoursesI , viewCoursesPricesI ,filterCoursesOnSubjAndRatingI , filterCoursesByPriceI , searchCourseI ,viewACourseI , viewCoursestitleI , filterCoursesByInstructorI , createCourseI, deleteAllInstructors } 