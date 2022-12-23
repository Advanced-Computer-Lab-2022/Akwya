import mongoose from 'mongoose';
import course from './course.js';

const traineeSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    fname: String,
    lname: String,
    gender: String,
    traineetype: String, //corporate or individual
    courses: [{ courseid: String, progress: Number }],
    country: String,
    wallet: Number

    

}, { timestamps: true }

)
 
    ;

const trainee = mongoose.model('trainee', traineeSchema);

export default trainee;
