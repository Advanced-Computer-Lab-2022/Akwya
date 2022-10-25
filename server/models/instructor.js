import mongoose from 'mongoose';
//mongoose allows us to have some sort of uniformity: each post have to have these things
const instructorSchema =mongoose.Schema({
username:string,
password:string,
email:string,
courses:{courseid:number},
ratings:{rate:number,owner:id/name},
reviews:{comment:string,owner:id/name},
country:string,
minibiography:string


   
},{timestamps:true}
)

;

const instructor =  mongoose.model('Instructor',instructorSchema);

export default instructor;


