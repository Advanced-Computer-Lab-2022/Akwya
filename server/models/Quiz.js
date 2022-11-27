import mongoose from 'mongoose';
import course from './course.js';
import instructor from './instructor.js';



const QuizSchema = mongoose.Schema({
        mustBeSignedIn: {
        type: Boolean, 
        default: false
        }, 
        instructorID:{
            type:mongoose.Types.ObjectId, 
            ref: instructor,
            require:true

        }, 
        courseid:{
            type:mongoose.Types.ObjectId, 
            ref: course,
            require:true

        }, 
        name: {
        type: String, 
        required: true
        }, 
        questions: [{
        type: Object,
        contains: {
        answers: {type: Array}, 
        correctAnswer: String, 
        questionName: String,
        chosenAnswer: String
        }
        }],
        category: {
        type: String, 
        required: true
        },
        createdAt: {
        type: Date, 
        default: new Date()
        },
        deleted: {
        type: Boolean, 
        default: false
        }


 

    }, {timestamps: true}
    );


// module.exports = mongoose.model('user',userSchema);


const quiz = mongoose.model('quiz', QuizSchema);

export default quiz;



