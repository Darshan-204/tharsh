const mongoose=require("mongoose")
const SuggestSchema=mongoose.Schema({
    email: { type: String, required: true},
    phone:{type:String},
    suggestInfo:{type:String,required:true},
    created_at: { type: Date, default: Date.now }
})
const suggest=mongoose.model("suggest",SuggestSchema)
module.exports=suggest;