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
        
const resetQuiz = async (req, res) => {        
            
            try {    
                const updatedQuiz = await quiz.find({courseid:{$eq:req.params.id}})
                const quizid = await quiz.find({courseid:{$eq:req.params.id}})
                console.log('yo am her '+quizid[0]._id)
                var myobj = JSON.stringify(quizid[0]._id);
                console.log('yo am her '+updatedQuiz.length)

                    for (let i = 0; i < updatedQuiz.length; i++) {
                        console.log('ana apaapapapppaap'+quizid[i]._id)                      
                        for (let index = 0; index < updatedQuiz[i].questions.length ; index++) {
                            console.log('ana babbaababababaaaba'+updatedQuiz[i].questions[index].chosenAnswer)
                            updatedQuiz[i].questions[index].chosenAnswer=''
                }
                let text1 = "'";
                let text2 = quizid[i]._id;
                let result = text1.concat(text2);

                let text3 = "'";
                let result2 = result.concat(text3);
                console.log('ressss'+result2)    
                await quiz.findOneAndUpdate({_id:quizid[i]},updatedQuiz[i],{new: true} )
                console.log('singleQuiz kheles')
            }
            const updatedQuizz = await quiz.find({courseid:{$eq:req.params.id}})


            res.json(updatedQuizz)

            
            console.log(' kharagtttt')

                } catch (error) {
            
                    res.json({message: error}); }
                }  




const viewQuestionGrade = async (req, res) => { 
    var chosenAnswerr=0;
    var correctAnswerr=0;


    try {
            const updatedQuiz = await quiz.find({courseid:{$eq:req.params.id}})

            // console.log(await quiz.find({courseid:{$eq:req.params.id}}))
            const i= req.params.quiz;
            console.log(i)
                for (let index = 0; index < updatedQuiz[i].questions.length; index++) {

                correctAnswerr=correctAnswerr+1;
                

                if (updatedQuiz[i].questions[index].correctAnswer.valueOf()===updatedQuiz[i].questions[index].chosenAnswer.valueOf()) {
                    chosenAnswerr=chosenAnswerr+1;
                } 
        
                
                // {chosenAnswerr&&'/'+correctAnswerr}
        }

        console.log(correctAnswerr);
        console.log(chosenAnswerr)
    
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

const viewGrade = async (req, res) => {
            var chosenAnswerr=0;
            var correctAnswerr=0;
            let temp=  {
                ...req.body.level,
            };

            try {
                    

//course el wahed momken yekon liii kaza quiz
                    const updatedQuiz = await quiz.find({courseid:{$eq:req.params.id}, level:{$eq:req.params.level}}).select('questions')

                    
        
                    for (let i = 0; i < updatedQuiz.length; i++) {

                        for (let index = 0; index < updatedQuiz[i].questions.length ; index++) {

                        correctAnswerr=correctAnswerr+1;
                        

                        if (updatedQuiz[i].questions[index].correctAnswer.valueOf()===updatedQuiz[i].questions[index].chosenAnswer.valueOf()) {
                            chosenAnswerr=chosenAnswerr+1;
                        }
                
                        console.log(correctAnswerr);
                        console.log(chosenAnswerr)
                }
            }
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
     


    
     
     
     




export{resetQuiz,createQuiz,getQuiz,submitQuiz,viewGrade,viewQuestionGrade}