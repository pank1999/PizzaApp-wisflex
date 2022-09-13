const router=require("express").Router();
const {User} = require("../models");


//get all user
router.get("/",(req,res)=>{
     User.findAll().then(users=>{
        console.log(users);
        res.status(200).send(users);
     }).catch(error=>{
        res.status(500).send(error);
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
        res.status(200).send(user);
     }).catch(error=>{
        res.status(500).send(error);
     });

});


//register
router.post("/register",(req,res)=>{
   const pass=req.body.password;
    
   const userData={

    }
    console.log(userData);
    User.create(userData).then((data)=>{
          res.status(200).send(data);
        }).catch(err=>{
            res.status(500).send(err);
        });
})


//login
router.post("/login",(req,res)=>{

});



module.exports=router;
