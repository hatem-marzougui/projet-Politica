const express=require ('express');
const router=express.Router();
const Party=require('../../models/Party');
const isAuth=require('../../middlewares/isAuth');




/**
 * @route   GET api/parties/all
 * @desc    Get all parties
 * @access  Private (admin)
 */

router.get('/all', async (req, res) => {
    try {

      const parties = await Party.find().sort({voters_nb:'desc'});
      if (!parties) throw Error('No parties in the DataBase');
      res.send({parties});
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  });



/**
 * @route   POST api/parties/add
 * @desc    add one political party
 * @access  Private (admin)
 */
router.post('/add',isAuth,async (req, res) => {
    try {
       // check if user role is admin
       if (!req.user || req.user.role==0) {
        return res.status(401).json({ error: 'acces denied for normal users' })
           };
    
     const {name,voters_nb,photo_adress }=req.body; 

     //check if party already exists
     const party =await Party.findOne({name})
     if(party){   return res.status(400).json({msg:'party already exisits'})};

      const newParty = new Party({name,voters_nb,photo_adress });
      newParty.save();
      res.status(200).send(newParty);
    } catch (error) {
      res.status(500).send("There was a problem creating the Party.");
    }
  });





/**
 * @route   DELETE api/parties/delete
 * @desc    DELETE one party
 * @access  Private (admin)
 */
router.delete('/delete/:id',isAuth, async (req, res) => {
    try {
       // check if user role is admin
       if (!req.user || req.user.role==0) {
        return res.status(401).json({ error: 'acces denied for normal users' })
      };

      const deletedParty = await Party.findByIdAndDelete(req.params.id);
      if (!deletedParty) throw Error('No party exists');
      res.status(200).send("Party: "+ deletedParty.name +" was deleted.");
    } catch (error) {
      res.status(500).send("There was a problem deleting the Party.");
    }
  });


  /**
 * @route   UPDATE api/parties/update
 * @desc    update one party
 * @access  Private (admin)
 */
router.put('/update/:id',isAuth, async (req, res) => {
    try {
       // check if user role is admin
       if (!req.user || req.user.role==0) {
        return res.status(401).json({ error: 'acces denied for normal users' })
      };

      const {name,photo_adress}=req.body
      const updatedParty = await Party.findOneAndUpdate({"_id":req.params.id},{ name,photo_adress },{new:true});
      if (!updatedParty) throw Error('No users exist');
      res.status(200).json({updatedParty:updatedParty});
    } catch (error) {
      res.status(500).send("There was a problem deleting the Party.");
    }
  });


/**
 * @route   PUT api/parties/vote
 * @desc    update one parties voters_nb
 * @access  Private (user)
 */
router.put('/vote', async (req, res) => {
  try {
    
    const {name}=req.body
    
    const updatedParty = await Party.findOneAndUpdate({name},{ $inc:{ voters_nb:1} },{new:true});
    console.log(updatedParty);
    if (!updatedParty) throw Error('No party exist');
    res.status(200).json({legis_msg:"you have voted succesfully",updatedParty:updatedParty.name});
  } catch (error) {console.log(error);
    res.status(500).send("There was a problem on voting .");
  }
});



  module.exports= router;