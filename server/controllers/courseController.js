import course from "../models/course.js";


//create course fr23
const createCourse = async (req, res) => {
    const { title,
        subtitles,
        price,
        summary,
        // subject,
        // instructor,
        // totalHours,
        // ratings,
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
            summary
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
export { createCourse, getCourses, getACourse, deleteCourse }
