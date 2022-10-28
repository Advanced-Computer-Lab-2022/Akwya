import mongoose from 'mongoose';

const traineeSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    fname: String,
    lname: String,
    gender: String,
    traineetype: String, //corporate or individual
    courses: [{ courseid: Number, progress: Number }],
    country: String



}, { timestamps: true }

)
 
    ;

const trainee = mongoose.model('trainee', traineeSchema);

export default trainee;
