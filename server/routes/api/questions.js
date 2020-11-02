const express=require ('express');
const router=express.Router();
const Question=require('../../models/Question');
const isAuth=require('../../middlewares/isAuth');



/**
 * @route   GET api/questions/all
 * @desc    Get all questions
 * @access  Private 
 */
router.get('/all',isAuth, async (req, res) => {
    try {
      
      const questions = await Question.find();
      if (!questions) throw Error('No Questions in the DataBase');
      res.send({questions});
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  });
  


/**
 * @route   GET api/questions/pres
 * @desc    Get presidential question
 * @access  Private 
 */
router.get('/pres', async (req, res) => {
  try {
    
    const question = await Question.findOne({type:'presidential'});
    
    if (!question) throw Error('No Questions with this type');
   res.send({pres_description:question.description});
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});


/**
 * @route   GET api/questions/pres
 * @desc    Get legislative question
 * @access  Private 
 */
router.get('/legis', async (req, res) => {
  try {
    
    const question = await Question.findOne({type:'legislative'});
    
    if (!question) throw Error('No Questions with this type');
   res.send({legis_description:question.description});
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});





  /**
 * @route   POST api/questions/add
 * @desc    add one question
 * @access  Private (admin)
 */
router.post('/add',isAuth,async (req, res) => {
    try {
       // check if user role is admin
       if (!req.user || req.user.role==0) {
        return res.status(401).json({ error: 'acces denied for normal users' })
           };     

     const {description,type }=req.body; 

     //check if question already exists
     const question =await Question.findOne({description,type})
     if(question){   return res.status(400).json({msg:'question already exists'})}; 

      const newQuestion = new Question({description,type });
      newQuestion.save();
      res.status(200).send(newQuestion);
    } catch (error) {
      res.status(500).send("There was a problem creating the Question");
    }
  });



   /**
 * @route   UPDATE api/questions/update
 * @desc    update one question
 * @access  Private (admin)
 */
router.put('/update/:id',isAuth, async (req, res) => {
  try {
     // check if user role is admin
     if (!req.user || req.user.role==0) {
      return res.status(401).json({ error: 'acces denied for normal users' })
    };

    const {description}=req.body
    const updatedQuestion = await Question.findOneAndUpdate({'_id':req.params.id},{ description },{new:true});
    if (!updatedQuestion) throw Error('No question exist');
    res.status(200).json({updatedQuestion:updatedQuestion});
  } catch (error) {
    res.status(500).send("There was a problem updating the Question.");
  }
});





  module.exports= router;