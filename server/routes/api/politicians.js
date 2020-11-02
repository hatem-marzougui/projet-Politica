const express=require ('express');
const router=express.Router();
const Politician=require('../../models/Politician');
const isAuth=require('../../middlewares/isAuth');




/**
 * @route   GET api/politicians/all
 * @desc    Get all politicians
 * @access  Private (admin)
 */

router.get('/all', async (req, res) => {
    try {
    
      

      const politicians = await Politician.find() .sort({voters_nb:'desc'});
      if (!politicians) throw Error('No politician in the DataBase');
      res.status(200).send({politicians});
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  });



/**
 * @route   POST api/politicians/add
 * @desc    add one politician
 * @access  Private (admin)
 */
router.post('/add',isAuth,async (req, res) => {
    try {
       // check if user role is admin
       if (!req.user || req.user.role==0) {
        return res.status(401).json({ error: 'acces denied for normal users' })
           };     

     const {name,voters_nb,photo_adress }=req.body; 

     //check if politician already exists
     const politician =await Politician.findOne({name})
     if(politician){   return res.status(400).json({msg:'politician already exists'})}; 

      const newPolitician = new Politician({name,voters_nb,photo_adress });
      newPolitician.save();
      res.status(200).send(newPolitician);
    } catch (error) {
      res.status(500).send("There was a problem creating the Politician.");
    }
  });





/**
 * @route   DELETE api/politicians/delete
 * @desc    DELETE one politician
 * @access  Private (admin)
 */
router.delete('/delete/:id',isAuth, async (req, res) => {
    try {
       // check if user role is admin
       if (!req.user || req.user.role==0) {
        return res.status(401).json({ error: 'acces denied for normal users' })
      };

      const deletedPolitician = await Politician.findByIdAndDelete(req.params.id);
      if (!deletedPolitician) throw Error('No users exist');
      res.status(200).send("Politician with name: "+ deletedPolitician.name +" was deleted.");
    } catch (error) {
      res.status(500).send("There was a problem deleting the Politician.");
    }
  });


  /**
 * @route   PUT api/politicians/update/:id
 * @desc    update one politician
 * @access  Private (admin)
 */
router.put('/update/:id',isAuth, async (req, res) => {
    try {
       // check if user role is admin
       if (!req.user || req.user.role==0) {
        return res.status(401).json({ error: 'acces denied for normal users' })
      };
      console.log('req.params: ',req.params)
      const {name,photo_adress}=req.body
      const updatedPolitician = await Politician.findOneAndUpdate({"_id":req.params.id},{ name,photo_adress },{new:true});
      if (!updatedPolitician) throw Error('No users exist');
      res.status(200).json({updatedPolitician:updatedPolitician});
    } catch (error) {console.log(error);
      res.status(500).send("There was a problem deleting the Politician.");
    }
  });

/**
 * @route   PUT api/politicians/vote
 * @desc    update one politician voters_nb
 * @access  Private (user)
 */
router.put('/vote', async (req, res) => {
  try {
    
    const {name}=req.body
    
    const updatedPolitician = await Politician.findOneAndUpdate({name},{ $inc:{ voters_nb:1} },{new:true});
    console.log(updatedPolitician);
    if (!updatedPolitician) throw Error('No politician exist');
    res.status(200).json({msg:"You have voted succesfully",updatedPolitician:updatedPolitician.name});
  } catch (error) {console.log(error);
    res.status(500).send("There was a problem on voting .");
  }
});





  module.exports= router;