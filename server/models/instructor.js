import mongoose from 'mongoose';
//mongoose allows us to have some sort of uniformity: each post have to have these things

const instructorSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    courses: [{ courseid: Number }],
    ratings: [{ rate: Number, review: String, ownerName: String, ownerID: Number }],
    country: String,
    minibiography: String,
    firstLogin: Boolean


}, { timestamps: true }
)

    ;

const instructor = mongoose.model('Instructor', instructorSchema);




export default instructor;


