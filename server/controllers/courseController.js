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
    let range={}
    if(req.query.price)
    {
        range= {price:req.query.price.split(',')}
        console.log(range.price[0])
    }
    const allcourses = await course.find({price: {$gt: range.price[0], $lt:range.price[1]}}).sort({ createdAt: -1 })


    res.status(200).json(allcourses)
}


//search for a course based on course title or subject or instructor

const searchCourse = async (req, res) => {
    try {
        const search = req.params.search;
        
        const objs = await course.find({$or:[{title:{ $regex:'.*'+search+'.*'} }, {subject:{ $regex:'.*'+search+'.*'} } ] });

                res.json(objs)

    } catch (error) {
        res.json({message: error}); }
    }
//"choose a course from the results and view (but not open) its details including course subtitles, excercises , total hours of each subtitle, total hours of the course and price (including % discount if applicable) according to the country selected"

const viewACourse = async (req, res) => {

    const { titlee } = req.params
    const objs = await course.find({_id:{$eq:titlee} });

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
        subject,
        totalHours,

        rating,
        // reviews,
        //  promotion,
        //  promotionExpiry,
        // previewVideo
        // certificate
    } = req.body
     const instructor = req.params.id

    const promotion=0;
    const promotionExpiry="";

    try {
        const newCourse = await course.create({
            title,
            subtitles,
            price,
            summary,
            subject,
            instructor,
            totalHours,
            promotion,
            promotionExpiry,


            rating
        });
        res.status(200).json(newCourse)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






    // const allcourses = await course.find({},{projection:{title:1 , totalHours : 1, ratings:1}})
    // const allcourses = await course.find({}).select('title price totalHours ratings')


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


//delete all courses
const deleteAllCourses = async (req, res) => {

    const badCourse2 = await course.deleteMany()
    res.status(200).json("deleted all course")
}



const courseDiscount = async (req, res) => {
    try{

      
        const discount=await course.findOneAndUpdate({_id:req.params.id},{promotion:req.query.promotion},{new: true}  )

      const date=await course.findOneAndUpdate({_id:req.params.id},{promotionExpiry:req.query.promotionExpiry},{new: true}  )
       
        res.status(200).json(discount)
        res.status(200).json(date)
       

    }
    catch (error) {
    res.status(400).json({error: error.message})
}
 }



//export
export { createCourse, getCourses, viewACourse, deleteCourse,filterCoursesByPrice, viewCourses,searchCourse, viewCoursesPrices, filterCoursesOnSubjAndRating, deleteAllCourses ,courseDiscount }
