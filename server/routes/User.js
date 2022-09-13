const router=require("express").Router();
const {User} = require("../models");
const Crypto=require("crypto-js");
const jwt = require("jsonwebtoken");

//get all user
router.get("/",(req,res)=>{
     User.findAll().then(users=>{
        console.log(users);
        res.status(200).json(users);
     }).catch(error=>{
        res.status(500).json(error);
     })
});

//get user by id 
router.get("/:userId",(req,res)=>{
    const userId=req.params.userId; 
    User.findAl({
        where:{
            userId:userId
        }
     }).then(user=>{
        console.log(user);
        res.status(200).json(user);
     }).catch(error=>{
        res.status(500).json(error);
     });

});


//register
router.post("/register",(req,res)=>{

   //encrypting the user password
   const hashedPass=Crypto.AES.encrypt(req.body.password,process.env.SECRET_KEY).toString();
   
   const userData={
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        mobileNumber:req.body.mobileNumber,
        password:hashedPass,
        isAdmin:false
    }
    console.log(userData);
    User.create(userData).then((data)=>{
          res.status(200).json(data);
        }).catch(err=>{
            res.status(500).json(err);
        });
})


//login
router.post("/login",(req,res)=>{
   const mobileNumber=req.body.mobileNumber;
   const pass=req.body.password;
    User.findAll({
           where:{
              mobileNumber:mobileNumber
            }
      }).then(user=>{
         if(user){
            // console.log(user[0].dataValues.password);
             var password=Crypto.AES.decrypt(user[0].dataValues.password,process.env.SECRET_KEY).toString(Crypto.enc.Utf8);
            // console.log(password);
             if(password===pass){
                 //created jwt token 
                const token=jwt.sign({
                    id:user.id,
                    isAdmin:user.isAdmin
                 }, process.env.JWT_SECRET_KEY,{ expiresIn: '1d' });
      
                 res.status(200).json({user,token});
             }else{
                res.status(400).json({message:"Password Incorrect!"});
             } 
         }
         else{
            res.status(500).json({message:"user not exits"});
         }
      }).catch(err=>{
          res.status(500).json(err);
      });
      
});



module.exports=router;
