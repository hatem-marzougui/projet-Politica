const express=require ('express');
const router=express.Router();
const User=require('../../models/User');
const isAuth=require('../../middlewares/isAuth')





/**
 * @route   GET api/users/all
 * @desc    Get all users
 * @access  Private (admin)
 */

router.get('/all',isAuth, async (req, res) => {
    try {
      // check if user role is admin
      if (!req.user || req.user.role==0) {
        return res.status(401).json({ error: 'acces denied for normal users' })
      };

      const allUsers = await User.find().select('-password');
      if (!allUsers) throw Error('No users exist');
      res.status(200).send({allUsers});
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  });
  

 







/**
 * @route   DELETE api/users/delete/:id
 * @desc    DELETE one user
 * @access  Private (admin)
 */
router.delete('/delete/:id',isAuth, async (req, res) => {
    try {
       // check if user role is admin
       if (!req.user || req.user.role==0) {
        return res.status(401).json({ error: 'acces denied for normal users' })
      };

      const deletedUser = await User.findByIdAndDelete(req.params.id);
      if (!deletedUser) throw Error('No users exist');
      res.status(200).send({msg:"User with name: "+ deletedUser.firstname +" was deleted successfully"});
    } catch (error) {
      res.status(500).send("There was a problem deleting the user.");
    }
  });
  

  /**
 * @route   PUT api/users/hasVoted/:id
 * @desc    update user : has_voted:true
 * @access  Private (user)
 */
router.put('/hasVoted/:id', async (req, res) => {
  try {
     console.log('req.params: ',req.params);
   //  const {_id}=req.params.id;
    const updatedUser = await User.findOneAndUpdate({"_id":req.params.id},{ "has_voted":"true"},{new:true});
    if (!updatedUser) throw Error('No users exist');
    res.status(200).json({"has_voted":true});
  } catch (error) {
    console.log(error);
    res.status(500).send("There was a problem updating user(has_voted) ");
  }
});
  

 /**
 * @route   PUT api/users/legis_hasVoted/:id
 * @desc    update user : legis_has_voted:true
 * @access  Private (user)
 */
router.put('/legis_hasVoted/:id', async (req, res) => {
  try {
     console.log('req.params: ',req.params);
   //  const {_id}=req.params.id;
    const updatedUser = await User.findOneAndUpdate({"_id":req.params.id},{ "has_lvoted":"true"},{new:true});
    if (!updatedUser) throw Error('No users exist');
    res.status(200).json({"has_lvoted":true});
  } catch (error) {
    console.log(error);
    res.status(500).send("There was a problem updating user(legis_has_voted) ");
  }
});


  module.exports= router;