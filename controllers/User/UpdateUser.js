const UserModel=require("../../model/UserModel")
async function UpdateUser(req,res)
{
    try
    {
        const sessionId=req.userId;
        const {name,Image_url}=req.body;
        if(!name)
        {
            throw new Error("please provide the name");
        }
        const payload={
            ...(name && {name:name}),
            ...(Image_url && {Image_url:Image_url})
        }
        const userdata=await UserModel.findById(sessionId)
        if(!userdata)
        {
            throw new Error("user is not found in updateUser session");
        }
        const updateUser= await UserModel.findByIdAndUpdate(sessionId,payload);//error an be
        res.json({
            mess:"user detail is updated successfully",
            success:true,
            error:false,
            data:updateUser
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
module.exports=UpdateUser;