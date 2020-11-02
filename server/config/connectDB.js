const mongoose=require ('mongoose');
config=require('config');

const connectDB= async ()=>{
    try{ 
          await  mongoose.connect(config.get('MONGOURI'),{useNewUrlParser: true,useCreateIndex:true,useUnifiedTopology: true,useFindAndModify: false })
          console.log("mongoose connected")
        }
    catch(error){console.log("error with DB connection")}
    

}

module.exports=connectDB