import mongoose from 'mongoose';
//mongoose allows us to have some sort of uniformity: each post have to have these things



const QuizSchema = mongoose.Schema({
        mustBeSignedIn: {
        type: Boolean, 
        default: false
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
        questionName: String
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


const quiz = mongoose.model('Quizzes', QuizSchema);

export default quiz;



