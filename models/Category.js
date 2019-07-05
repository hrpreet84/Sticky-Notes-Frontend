const mongoose=require('mongoose');

const CategorySchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'notes'
    },
    title:{
        type:String
    },
    description:{
        type:String,
        default:''
    }
})
module.exports=Category=mongoose.model('category',CategorySchema);