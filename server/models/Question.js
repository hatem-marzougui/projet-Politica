const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const questionSchema=new Schema({
    description:{
        type:String,
        },

        type:{
            type:String,
            },

     


   
})


module.exports=Question=mongoose.model("Question",questionSchema)