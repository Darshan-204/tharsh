const suggest = require("../../model/SuggestionModel");


async function GetIndividualQuery(req,res)
{
    try
    {
        const {email}=req.body;
        const userQuery=await suggest.find({email:email});
        if(userQuery.length==0)
        {
            res.json({
                mess:"no data is found",
                error:true,
                success:false
            })
        }
        else
        {
            res.json({
                mess:"data is fetched successfully",
                data:userQuery,
                success:true,
                error:false
    
            })
    

        }
        
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
module.exports=GetIndividualQuery;