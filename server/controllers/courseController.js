import course from "../models/course.js";

//view all the titles of the courses available including the total hours of the course and course rating
const viewCourses = async (req, res) => {

    const allcourses = await course.find({}).select('title totalHours ratings')

    res.status(200).json(allcourses)

}

//view the price of each course
const viewCoursesPrices = async (req, res) => {

    const coursesPrices = await course.find({}).select('title price')

    res.status(200).json(coursesPrices)

}

//filter the courses based on a subject and/or rating
const filterCoursesOnSubjAndRating = async (req, res) => {

try {
    const {id,title} = req.params;
    const objs = await course.find({$or:[{subject:{ $eq: title} }, {ratings:{$eq: id} }] });

    res.json(objs)

} catch (error) {
    res.json({message: error});   


}
}

//filter the courses based on price (price can be FREE)
const filterCoursesByPrice = async (req, res) => {
    const {x,y} = req.params;
    const allcourses = await course.find({price: {$gt: x, $lt:y}}).sort({ createdAt: -1 })


    res.status(200).json(allcourses)
}


//search for a course based on course title or subject or instructor

const searchCourse = async (req, res) => {

    try {
        const findname = req.params.title;
        const objs = await course.find({$or:[{title:{ $regex:'.*'+findname+'.*'} }, {subject:{ $regex:'.*'+findname+'.*'} }, {instructor:{ $regex:'.*'+findname+'.*'} } ] });

                res.json(objs)

    } catch (error) {
        res.json({message: error});   
        // console.log(findname)


    }
}

//"choose a course from the results and view (but not open) its details including course subtitles, excercises , total hours of each subtitle, total hours of the course and price (including % discount if applicable) according to the country selected"

const viewACourse = async (req, res) => {

    const { titlee } = req.params
    const objs = await course.find({title:{$eq:titlee} });

    if (!objs) {
        return res.status(404).json({ error: " No such Course" })

    }
    res.status(200).json(objs)
}

//view all the titles of the courses given by him/her
const viewCoursestitle = async (req, res) => {
    const { instructorr } = req.params
    const Coursestitles = await course.find({instructor:{$eq:instructorr}}).select('title')

    res.status(200).json(Coursestitles)

}

//filter the courses given by him/her based on a subject or price
const filterCoursesByInstructor = async (req, res) => {

    try {
        const {instructorr,subjectt,pricee} = req.params;
        const objs = await course.find({$or:[{instructor:{ $eq: instructorr} }, {subject:{$eq: subjectt} },{price:{$eq: pricee} }] });
    
        res.json(objs)
    
    } catch (error) {
        res.json({message: error});   
    
    
    }
    }


//create a new course and fill in all its details inclding title, subtitles, price and short summary about the entire course

const createCourse = async (req, res) => {
    const { title,
        subtitles,
        price,
        summary,
        // subject,
        // instructor,
        // totalHours,
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
            ratings
        });
        res.status(200).json(newCourse)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////







//get all courses
const getCourses = async (req, res) => {
    const allcourses = await course.find({title:{ $regex:'.*'+'O'+'.*'} }).sort({ createdAt: -1 })

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





//export
export { createCourse, getCourses, viewACourse, deleteCourse,filterCoursesByPrice, viewCourses,searchCourse, viewCoursesPrices, filterCoursesOnSubjAndRating }
