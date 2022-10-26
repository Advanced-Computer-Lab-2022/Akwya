import course from "../models/course.js";


//create course fr23
const createCourse = async (req, res) => {
    const { title,
        subtitles,
        price,
        summary,
        subject,
        // instructor,
        totalHours,
        ratings,
        // reviews,
        // promotion,
        // promotionExpiry,
        // previewVideo
        // certificate
    } = req.body


    try {
        const newCourse = await course.create({
            title,
            subtitles,
            price,
            summary,
            subject,
            totalHours,
            ratings
        });
        res.status(200).json(newCourse)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}



//get all courses
const getCourses = async (req, res) => {
    const allcourses = await course.find({}).sort({ createdAt: -1 })

    res.status(200).json(allcourses)
}


//get all courses
const viewCourses = async (req, res) => {

    // const allcourses = await course.find({},{projection:{title:1 , totalHours : 1, ratings:1}})
    const allcourses = await course.find({}).select('title price totalHours ratings')

    res.status(200).json(allcourses)

}
										


//get a course
const getACourse = async (req, res) => {
    const { id } = req.params

    const ACourse = await course.findById(id)

    if (!ACourse) {
        return res.status(404).json({ error: " No such Course" })

    }
    res.status(200).json(ACourse)
}


//delete a course
const deleteCourse = async (req, res) => {
    const { id } = req.params

    const badCourse = await course.findById(id)
    if (!badCourse) {
        return res.status(404).json({ error: " No such Course" })

    }
    const badCourse2 = await course.findOneAndDelete({ id })
    res.status(200).json(badCourse)
}


//filter course fr10


const filterCourses = async (req, res) => {
    const allcourses = await course.find({price: {$gt: 5, $lt:10}}).sort({ createdAt: -1 })


    res.status(200).json(allcourses)
}


const searchCourse = async (req, res) => {

    try {
        const findname = req.params.title;
        const objs = await course.find({$or:[{title:{ $regex:'.*'+findname+'.*'} }, {subject:{ $regex:'.*'+findname+'.*'} }, {instructor:{ $regex:'.*'+findname+'.*'} } ] });

                res.json(objs)

console.log(findname)
    } catch (error) {
        res.json({message: error});   
        // console.log(findname)


    }
}






//export
export { createCourse, getCourses, getACourse, deleteCourse,filterCourses, viewCourses,searchCourse }
