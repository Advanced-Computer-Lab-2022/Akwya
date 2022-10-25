import mongoose from 'mongoose';
//mongoose allows us to have some sort of uniformity: each post have to have these things
const examSchema = mongoose.Schema({
    instructorID: Number,
    courseID: Number,
    questions: [{ question: String, answer1: String, answer2: String, answer3: String, answer4: String }],
    answers: [{ answer: Number }]


}, { timestamps: true }
)

    ;

const exam = mongoose.model('Exam', examSchema);

export default exam;


