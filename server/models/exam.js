import mongoose from 'mongoose';
//mongoose allows us to have some sort of uniformity: each post have to have these things
const examSchema =mongoose.Schema({
    instructorID:number,
courseID:number,
questions:{question:string,answer1:string,answer2:string,answer3:string,answer4:string},
answers:{answer:number}

   
},{timestamps:true}
)

;

const exam =  mongoose.model('Exam',examSchema);

export default exam;


