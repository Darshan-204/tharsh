const SoilModel=require("../../model/SoilModel")
async function SoilDetails(req,res)
{
    try
    {
        const {nitrogen,potassium,phosphorus,temperature,humidity,ph,rainfall,userId}=req.body;
        if(!nitrogen || !potassium || !phosphorus|| !temperature || !humidity ||!ph || !rainfall)
        {
               throw new Error("please provide the all details")
        }
        const payload = { ...req.body,userId:req.userId };
        const SoilDetl=await SoilModel(payload);
        await SoilDetl.save();
        res.json({
            data:SoilDetl,
            success:true,
             error:false,
            message:"all the deatils is store properly"
            
        })



    }
    catch(err)
    {
        res.json({
            mess:err.message||err,
            error:true,
            success:false
        })
    }

}

module.exports=SoilDetails;