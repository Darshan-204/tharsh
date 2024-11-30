const SoilDetail=require("../../model/SoilModel")
async function GetSoilDetailOfUser(req,res)
{
    try{
        const Id=req.userId;
        const soilDetails = await SoilDetail.find({ userId:Id });
        if (soilDetails.length === 0) {
            return res.status(404).json({
                success: false,
                error: true,
                message: "No soil details found for this user",
            });
        }
        res.status(200).json({
            data: soilDetails,
            success: true,
            error: false,
            message: "Soil details retrieved successfully",
        });

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
module.exports=GetSoilDetailOfUser;