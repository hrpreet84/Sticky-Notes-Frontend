const mongoose=require('mongoose');
const NoteSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'notes'
    },
    title:{
        type:String
    },
    description:{
        type:String
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'category'
    },
    color:{
        type:String
    },
    created_at:{
        type : Date
    },
    updated_at:{
        type : Date, default: Date.now
    }
})
module.exports=Note=mongoose.model('note',NoteSchema);