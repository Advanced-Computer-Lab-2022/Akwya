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


const setChosenAnswer1 = async (req, res) => {
        try {
            
            const { i,
                chosenAnswer
        
            } = req.body
            const Coursestitles = await trainee.find({$and:[{_id:{$eq:req.params.traineeID}},{courses:{$elemMatch:{courseid:req.params.courseID}}}]})

            
                    res.json(objs)
    
        } catch (error) {
    
            res.json({message: error}); }
        }   


const setChosenAnswer = async (req, res) => {
 
   
            try {
          
                const newInstructor = await quiz.findOneAndUpdate({_id:req.params.id},{email:req.query.email},{
                 new: true}  );
                res.status(200).json(newInstructor)
            } catch (error) {
                res.status(400).json({error: error.message})
            }
            
         }       




export{createQuiz,getQuiz,setChosenAnswer}