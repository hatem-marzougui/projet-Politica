const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const partySchema=new Schema({
    name:{
        type:String,
        required:true},

     voters_nb:{
         type:Number,
         default:0
     } ,

     photo_adress : {
        type : String ,
        required : true
    },  


   
})




module.exports=Party=mongoose.model("Party",partySchema)