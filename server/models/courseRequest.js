import mongoose from 'mongoose';
//mongoose allows us to have some sort of uniformity: each post have to have these things



const requestSchema =mongoose.Schema({

    username:String,
    courseName:String,
    CourseID:String,
    TraineeID:String,




}, { timestamps: true }
)

    ;

const courseRequest =  mongoose.model('courseRequest',requestSchema);


export default courseRequest;


