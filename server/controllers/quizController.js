import quiz from '../models/Quiz.js';

const createQuiz =  (req, res) => {
    console.log("shshs");
    let newQuiz=  new quiz({
        ...req.body.quizz,
        createdBy:req.body.createdBy
    });
    newQuiz.save().then(result => {
        res.status(200).json({success: true});
        })
}




export{createQuiz}