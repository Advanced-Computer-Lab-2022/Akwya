import express from "express";
const router =express.Router()
import { createCourse, getCourses ,viewACourse ,filterCoursesByPrice, viewCourses, searchCourse, viewCoursesPrices,filterCoursesOnSubjAndRating,deleteCourse, deleteAllCourses }from '../controllers/courseController.js'

router.get('/viewCourseDeets',viewCourses)

router.get('/viewCoursePrices',viewCoursesPrices)

router.get('/filterCoursesOnSubjAndRating/:id/:title',filterCoursesOnSubjAndRating)

router.get('/filterCoursesByPrice', filterCoursesByPrice)

router.get('/', getCourses)

router.get('/search/:search',searchCourse)

router.get('/viewACourse/:id',viewACourse)

router.post('/:id',createCourse)

// router.get('/',viewCourses)


router.delete('/:id',deleteCourse)

router.delete('/',deleteAllCourses)

router.patch('/:id',(req,res)=>{
    res.json({mssg:'update a guest'})

})

export default router;