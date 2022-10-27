import express from "express";
const router =express.Router()
import { createCourse, getCourses ,viewACourse ,filterCoursesByPrice, viewCourses, searchCourse, viewCoursesPrices,filterCoursesOnSubjAndRating,deleteCourse }from '../controllers/courseController.js'

router.get('/viewCourseDeets',viewCourses)

router.get('/viewCoursePrices',viewCoursesPrices)

router.get('/filterCoursesOnSubjAndRating/:id/:title',filterCoursesOnSubjAndRating)

router.get('/filterCoursesByPrice/:x/:y', filterCoursesByPrice)

router.get('/', getCourses)

router.get('/search/:title',searchCourse)

router.get('/viewACourse/:titlee',viewACourse)

router.post('/',createCourse)

// router.get('/',viewCourses)


router.delete('/:id',deleteCourse)


router.patch('/:id',(req,res)=>{
    res.json({mssg:'update a guest'})

})

export default router;