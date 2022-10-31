//import instructor from '../models/instructor.js';
import instructor from "../models/instructor.js"
import course from "../models/course.js"



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
//search for a course based on course title or subject or instructor
const searchCourseI = async (req, res) => {
    try {
        const search = req.params.search;
        
        const objs = await course.find({$and:[{instructor:{$eq:req.params.id}},{$or:[{title:{ $regex:'.*'+search+'.*'} }, {subject:{ $regex:'.*'+search+'.*'} } ] }]});

                res.json(objs)

    } catch (error) {
        res.json({message: error}); }

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







export {  filterCoursesByPriceI  , viewCoursestitleI  , createCourseI, deleteAllInstructors,filterCoursesBySubjectI } 