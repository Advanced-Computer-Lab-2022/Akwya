import mongoose from 'mongoose';
//mongoose allows us to have some sort of uniformity: each post have to have these things



const boughtSchema =mongoose.Schema({

    username:String,
    courseName:String,
    CourseID:String,
    TraineeID:String,
    price:Number,
    refundRequested:Boolean




}, { timestamps: true }
)

    ;

const courseBought =  mongoose.model('courseBought',boughtSchema);


export default courseBought;


