import express from "express";
// import user from "/Users/farahwanas/Desktop/Akwya/server/models/user.js";
import course from '../models/course.js';
const router =express.Router()
// const userr=new user
import { createCourse, getCourses , getACourse ,filterCourses, viewCourses, searchCourse}from '../controllers/courseController.js'
import { deleteCourse } from "../controllers/courseController.js";




router.get('/getCourses', getCourses)

router.get('/filter', filterCourses)

router.get('/:id',getACourse)

router.post('/',createCourse)

router.get('/',viewCourses)


router.delete('/:id',deleteCourse)

router.get('/search/:title',searchCourse)

router.patch('/:id',(req,res)=>{
    res.json({mssg:'update a guest'})

})

export default router;