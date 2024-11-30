const express=require("express");
const UserRegister = require("../controllers/User/UserRegister");
const UserSignin = require("../controllers/User/UserSignin");
const ForgotPassword = require("../controllers/User/ForgotPassword");
const UserLogout = require("../controllers/User/UserLogout");
const authtoken = require("../middleware/authtoken");
const UpdateUser = require("../controllers/User/UpdateUser");
const SoilDetails = require("../controllers/soilFertility/soilFertilityDetails");
const getUserDetails = require("../controllers/User/GetUserDetails");
const GetSoilDetailOfUser = require("../controllers/soilFertility/GetSoilDetailOfUser");
const EmailService=require("../controllers/User/EmailService");
const SuggestDetails = require("../controllers/query/SuggestDetails");
const GetQuery = require("../controllers/query/GetQuery");
const router=express.Router()



//user end point
router.post("/register",UserRegister);
router.post("/signin",UserSignin);
router.put("/update-password",ForgotPassword);
router.post("/logout",UserLogout);
router.post("/update-user",authtoken,UpdateUser);
router.post("/user-details",authtoken,getUserDetails);



// end point for soil fertility
router.post("/store-soil-details",authtoken,SoilDetails);
router.post("/soilDetail",GetSoilDetailOfUser);
router.post("/email",EmailService);


//end point for the query from the user
router.post("/query-detail",SuggestDetails);
router.post("/GetQuery",GetQuery);

module.exports=router;