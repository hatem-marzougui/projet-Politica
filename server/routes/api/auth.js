const express=require ('express');
const router=express.Router();
const bcrypt =require('bcrypt');
const config=require('config');
const jwt=require('jsonwebtoken');
const User=require('../../models/User');
const {validator,loginRules,registerRules} =require('../../middlewares/bodyValidator');
const isAuth=require('../../middlewares/isAuth');
const { selectFields } = require('express-validator/src/select-fields');

/** 
 * @route   POST api/auth/register
 * @desc    register new user
 * @access  Public
 */
router.post("/register",registerRules(),validator,async(req,res)=>{
    const {firstname,lastname,email,password,role }=req.body;
//check for existing user
try{
     let existuser= await User.findOne({email});
     if(existuser){   return res.status(400).send({msg:'User already exists'})};   
     //create the new user
     const user=new User({firstname,lastname,email,password,role});
     
    //hash the password
    const salt=10;
     const hashedPassword=await bcrypt.hash(password,salt);
    //assign hashed password to user password
      user.password= hashedPassword;
      
     //save the user
      await user.save();
      
       const payload={_id:user._id};
       const token=await jwt.sign(payload,config.get('jwtSecret'));
       res.status(200).send({msg:"register success",user,token});
     }

 catch(error){ 
  res.status(500).send({msg:"server errors",})
          }
                                                              } );




                                                              
/**
 * @route   POST api/auth/login
 * @desc    Login user
 * @access  Public
 */
router.post("/login",loginRules(),validator,async(req,res)=>{
    const {email,password }=req.body;
    try{
        //check for existing user
        const user= await User.findOne({email});
        if(!user){ return res.status(400).send({msg:"bad credentials"})}
     
          //validate password
           const isMatch= await bcrypt.compare(password,user.password)
            if(!isMatch) {return res.status(400).send({msg:"invalid credentials "})};
       
             const payload={_id:user._id,};
             const token=await jwt.sign(payload,config.get('jwtSecret'), {expiresIn:'7 days'},)

           res.send({msg:"login success",user,token})
          }
  catch (error){res.status(500).send({msg:"server errors"})}
                 
                    });


/**
 * @route   GET api/auth/me
 * @desc    get user data
 * @access  Private
 */
router.get("/me", isAuth, (req, res) => {
  res.status(200).send({ user: req.user });
});
        
    


 module.exports=router
