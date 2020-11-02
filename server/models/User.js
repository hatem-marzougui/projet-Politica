const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const userSchema=new Schema({
    firstname:{
        type:String,
        required:true},


        lastname:{
            type:String,
            required:true},

    email:{
        type:String,
        required:true,
    unique:true},

    password:{
        type:String,
        required:true},

        role:{
            type:Number,
            default:0
            // 0:user
            //1:admin
        },
        has_voted:{
            type:Boolean,
            default:false
            
        },

        has_lvoted:{
            type:Boolean,
            default:false
            
        }

})




module.exports=User=mongoose.model("User",userSchema)