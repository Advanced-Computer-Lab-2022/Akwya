import course from "../models/course.js";
import problem from "../models/problem.js";

//view all the titles of the courses available including the total hours of the course and course rating
const viewCourses = async (req, res) => {

    const allcourses = await course.find({})

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

    const previewVideo = ""
    const noOfRatings=[]
    const promotion=0; 
    const promotionExpiry="";
    const registeredTrainees=0; 
    
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


            rating,
            noOfRatings,
            previewVideo,
            registeredTrainees
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
    const allcourses = await course.find({}).sort({ registeredTrainees: -1 })

    res.status(200).json(allcourses)
}									


//get a course
// const getACourse = async (req, res) => {
//     const { id } = req.params

//     const ACourse = await course.findById(id).select('title')

//     if (!ACourse) {
//         return res.status(404).json({ error: " No such Course" })

//     }
//     res.status(200).json(ACourse)
// }


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
       
        res.status(200).json({discount, date})
       


    }
    catch (error) {
    res.status(400).json({error: error.message})
}
 }


 const reportAProblem =  (req, res) => {

    try{

    console.log("ana weselttttt");
    let newProblem=  new problem({
        ...req.body.prob,
    });
    newProblem.save().then(result => {
        res.status(200).json({success: true});
        })
    }
        catch (error) {
            res.status(400).json({error: error.message})
        }

}

const getProblems = async (req, res) => {
    try {

        const { id } = req.params
        const objs = await problem.find({ownerID:{$eq:id} });
        res.json(objs)
    } catch (error) {

        res.json({message: error}); }
    }

    const getAllProblems = async (req, res) => {
        try {
    
            const { id } = req.params
            const objs = await problem.find({}).sort({ createdAt: -1 })

            res.json(objs)
        } catch (error) {
    
            res.json({message: error}); }
        }

    
    
    
const followUpOnAProblem  = async (req, res) => {
        const {
            id,
            input
        } = req.body.prob

        const theProblem = await problem.findById(id)

        console.log('4' + theProblem)

            theProblem.followUps.push(input)

        try{
            const p=await problem.findOneAndUpdate({_id:id},{followUps:theProblem.followUps},{new: true})
            res.status(200).json({p})
        }
            catch (error) {
                console.log('dakhlyyy')

                res.status(400).json({error: error.message})
            }

            console.log('hena3    '+theProblem.followUps)
    
    }
    const adminFollowUpOnAProblem  = async (req, res) => {
        const {
            id,
            input
        } = req.body.prob
        console.log('4sjhshxshxshhxshhxshxgsxghsgx' )

        const theProblem = await problem.findById(id)

        console.log('4' + theProblem)

            theProblem.messages.push(input)

        try{
            const p=await problem.findOneAndUpdate({_id:id},{messages:theProblem.messages},{new: true})
            res.status(200).json({p})
        }
            catch (error) {
                console.log('dakhlyyy')

                res.status(400).json({error: error.message})
            }

            console.log('hena3    '+theProblem.messages)
    
    }


    const problemState  = async (req, res) => {
        const {
            id,
            status
        } = req.body.prob




        try{
            const p=await problem.findOneAndUpdate({_id:id},{status:status},{new: true})
            res.status(200).json({p})
        }
            catch (error) {

                res.status(400).json({error: error.message})
            }

    
    }

    const getMyCourseName = async (req, res) => {

        console.log('wes')
        let myCourse = await course.find({_id:{$eq:req.params.id}}).select('title')
        let title=JSON.stringify(myCourse[0].title)

        console.log(title)
        // const { id } = req.params
    
        // const ACourse = await course.findById(id).select('title')
    
        if (!myCourse) {
            return res.status(404).json({ error: " No such Course" })
    
        }

        // const x=res.body.title
        // console.log(x)
        res.send(title)
    }

   

   





//export
export {getMyCourseName, adminFollowUpOnAProblem, problemState, getAllProblems, followUpOnAProblem, getProblems, reportAProblem, createCourse, getCourses, viewACourse, deleteCourse,filterCoursesByPrice, viewCourses,searchCourse, viewCoursesPrices, filterCoursesOnSubjAndRating, deleteAllCourses ,courseDiscount }
