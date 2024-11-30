const User = require("../../model/UserModel");
const bcryptjs=require("bcryptjs")
const jwt = require('jsonwebtoken');
async function UserSignin(req,res)
{

   try{
    const {email,password}=req.body;
    if(!email)
    {
        throw new Error("please provide the email");
    }
    if(!password)
    {
        throw new Error("please provide the passwor");
    }
    const user=await User.findOne({email});
    if(!user)
    {
        throw new Error(" user not yet registered");
    }

    const comparePassword=await bcryptjs.compare(password,user.password);

    if(comparePassword===false)
    {
        throw new Error("Password is incoorect");
    }

const tokenData=
{
     _id:user._id,
    email:user.email
}

const token=await jwt.sign(tokenData,process.env.TOKEN_SECRET_KEY, { expiresIn: 60 * 60 * 8});

// localStorage.setItem("token", token);

const tokenOption=
{
  httpOnly:true,
  secure:true
}

res.cookie("token",token,tokenOption).status(200).json({
      data2:token,
      mess:"user have login to website successfully",
      error:false,
      success:true
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

module.exports=UserSignin;