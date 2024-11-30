const suggest = require("../../model/SuggestionModel");


async function GetQuery(req,res)
{


    try{
        const details=await suggest.find();
        res.json({
            mess:"all query are fetched",
            success:true,
            error:false,
            data:details
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
module.exports=GetQuery;