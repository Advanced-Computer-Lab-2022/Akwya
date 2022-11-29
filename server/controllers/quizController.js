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



const getQuiz = async (req, res) => {
    try {
        
        const objs = await quiz.find({courseid:{$eq:req.params.id}})

                res.json(objs)

    } catch (error) {

        res.json({message: error}); }
    }


const submitQuiz = async (req, res) => {
    console.log('ana hena')

    
    try {
            
            const updatedQuiz = req.body
            console.log('ana hena')

            console.log(updatedQuiz)
            
            const updateQuizz = await quiz.findOneAndReplace({_id:req.body._id},updatedQuiz)
            //  ({_id:updatedQuiz._id},{questions:{updatedQuiz.question}, {new: true});

            
                    res.json(updateQuizz)
    
        } catch (error) {
    
            res.json({message: error}); }
        }   

const viewGrade = async (req, res) => {
            console.log('ana hhhhh')
            var chosenAnswerr=0;
            var correctAnswerr=0;

            try {
                    

//course el wahed momken yekon liii kaza quiz
                    const updatedQuiz = await quiz.find({courseid:{$eq:req.params.id}}).select('questions')

                    console.log(await quiz.find({courseid:{$eq:req.params.id}}))

                    console.log('hhh'+updatedQuiz[0].questions.length)
        
                    for (let i = 0; i < updatedQuiz.length; i++) {
                        console.log('yooo')

                        for (let index = 0; index < updatedQuiz[i].questions.length; index++) {
                        console.log('ana hena ok')

                        correctAnswerr=correctAnswerr+1;
                        

                        if (updatedQuiz[i].questions[index].correctAnswer.valueOf()===updatedQuiz[i].questions[index].chosenAnswer.valueOf()) {
                            chosenAnswerr=chosenAnswerr+1;
                        }
                
                        console.log(correctAnswerr);
                        console.log(chosenAnswerr)
                        console.log('chosenAnswerr')
                        // {chosenAnswerr&&'/'+correctAnswerr}
                }
            }
            console.log('bye')
            const x=chosenAnswerr.toString();
            const y=correctAnswerr.toString();
            console.log(x+'/'+y)

            res.send(x+'/'+y)

                console.log('ana we2eft ok')

            
                
             }
              catch (error) {
            
                    res.json({message: error}); }

                    console.log('ana we2eft ok')

                } 
     


    
     
     
     




export{createQuiz,getQuiz,submitQuiz,viewGrade}