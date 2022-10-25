import mongoose from 'mongoose';
//mongoose allows us to have some sort of uniformity: each post have to have these things
const traineeSchema =mongoose.Schema({
username:string,
password:string,
email:string,
fname:string,
lname:string,
gender:string,
traineetype:string, //corporate or individual
courses:[{courseid:number,progress:number}],
country:string


   
},{timestamps:true}
)

;

const trainee =  mongoose.model('Trainee',traineeSchema);

export default trainee;


