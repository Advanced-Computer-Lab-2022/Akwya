import express from "express";
const router =express.Router()


import {updateUser,createUser,getAllUser,getUser,deleteUser, rateCourse} from '../controllers/usercontroller.js'


router.get('/',getAllUser)

router.get('/:id',getUser)

router.post('/',createUser)

router.delete('/:id',deleteUser)

router.patch('/:id',updateUser)


export default router;