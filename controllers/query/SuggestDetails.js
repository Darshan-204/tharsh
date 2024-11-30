const suggest = require("../../model/SuggestionModel");

async function SuggestDetails(req,res)
{
    try{
   const {email,phone,suggestInfo}=req.body;
   if(!email)
   {
    throw new Error("please provide the email");
   }
   if(!suggestInfo)
   {
    throw new Error("please enter the suggest or query")
   }
   const payload={
    ...req.body
   }
   const savesdetail=await suggest(payload);
   await savesdetail.save();
   
   res.json({
    mess:"query is saved",
    success:true,
    error:false,
    data:savesdetail
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
module.exports=SuggestDetails;