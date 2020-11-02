const jwt =require("jsonwebtoken");
const User=require('../models/User');

module.exports= async (req,res,next)=>{
    try { const token=req.headers["authorization"];

        if(!token){ return res.status(401).send({msg:"Unauthorized"}); }
        
        const decoded = await jwt.verify(token,config.get('jwtSecret'));
       
    
        const user= await (await User.findById(decoded._id));

        if(!user){ return res.status(400).send({msg:"unauthorized"})}
        
        req.user = user;
        next();
    }
    catch(error){console.log(error);return res.status(500).send({msg:"Unauthorized"});}

                                         }

    





