const mongoose=require("mongoose")
const CropSchema=new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        nitrogen:{type:Number,required:true},
        potassium:{type:Number,required:true},
        phosphorus:{type:Number,required:true},
        temperature:{type:Number,required:true},
        humidity:{type:Number,required:true},
        ph:{type:Number,required:true},
        rainfall:{type:Number,required:true},
        created_at: { type: Date, default: Date.now },
        updated_at: { type: Date, default: Date.now }
    }
)
const soil=mongoose.model("Soil",CropSchema);
module.exports=soil;