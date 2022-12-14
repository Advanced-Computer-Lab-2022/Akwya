import express from "express";
const router =express.Router()
import {reportAProblem, createCourse, getCourses ,viewACourse ,filterCoursesByPrice, viewCourses, searchCourse, viewCoursesPrices,filterCoursesOnSubjAndRating,deleteCourse, deleteAllCourses , courseDiscount}from '../controllers/courseController.js'

router.get('/viewCourseDeets',viewCourses)

router.get('/viewCoursePrices',viewCoursesPrices)

router.get('/filterCoursesOnSubjAndRating/:id/:title',filterCoursesOnSubjAndRating)

router.get('/filterCoursesByPrice', filterCoursesByPrice)

router.get('/', getCourses)

router.get('/search/:search',searchCourse)

router.get('/viewACourse/:titlee',viewACourse)

router.post('/report',reportAProblem)

router.post('/:id',createCourse)

router.post('/reporttttt',reportAProblem)



// router.get('/',viewCourses)


router.delete('/:id',deleteCourse)

router.delete('/',deleteAllCourses)

router.patch('/:id',(req,res)=>{
    res.json({mssg:'update a guest'})



    

})


router.get('/courseDiscount/:id',courseDiscount)

export default router;