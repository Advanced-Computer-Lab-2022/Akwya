import express from "express";
const router =express.Router()
import {getMyCourseName, adminFollowUpOnAProblem, problemState, getAllProblems, followUpOnAProblem, getProblems, reportAProblem, createCourse, getCourses ,viewACourse ,filterCoursesByPrice, viewCourses, searchCourse, viewCoursesPrices,filterCoursesOnSubjAndRating,deleteCourse, deleteAllCourses , courseDiscount}from '../controllers/courseController.js'

router.get('/viewCourseDeets',viewCourses)

router.get('/viewCoursePrices',viewCoursesPrices)

router.get('/filterCoursesOnSubjAndRating/:id/:title',filterCoursesOnSubjAndRating)

router.get('/filterCoursesByPrice', filterCoursesByPrice)

router.get('/', getCourses)

router.get('/search/:search',searchCourse)

router.get('/viewACourse/:titlee',viewACourse)

router.post('/report',reportAProblem)

router.post('/followUp',followUpOnAProblem)
router.post('/followUp2',adminFollowUpOnAProblem)

router.post('/problemState',problemState)


router.post('/:id',createCourse)

router.get('/getProblems/:id',getProblems)

router.get('/getAllProblems',getAllProblems)

router.get('/getMyCourseName/:id',getMyCourseName)




// router.get('/',viewCourses)


router.delete('/:id',deleteCourse)

router.delete('/',deleteAllCourses)

router.patch('/:id',(req,res)=>{
    res.json({mssg:'update a guest'})



    

})


router.get('/courseDiscount/:id',courseDiscount)

export default router;