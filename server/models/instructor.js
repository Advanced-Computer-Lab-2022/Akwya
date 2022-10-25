import mongoose from 'mongoose';
//mongoose allows us to have some sort of uniformity: each post have to have these things
const instructorSchema =mongoose.Schema({
username:String,
password:String,
email:String,
courses:{courseid:Number},
// ratings:{rate:Number,owner:id/name},
// reviews:{comment:String,owner:id/name},
country:String,
minibiography:String


   
},{timestamps:true}
)

;

const instructor =  mongoose.model('Instructor',instructorSchema);

export default instructor;


