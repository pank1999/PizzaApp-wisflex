const router=require("express").Router();
const {Order} = require("../models");

//Inserting Order 
router.post("/",(req,res)=>{
    const OrderData=req.body; 
    Order.create(OrderData).then((data)=>{
        console.log(data);
        res.status(200).json(data);
    }).catch((error)=>{
        res.status(500).json(error);
    })
});

//get all orders
router.get("/",(req,res)=>{
     Order.findAll().then(data=>{
         console.log(data);
         res.status(200).json(data);
     }).catch(error=>{
        res.status(500).json(error);
     });
});

//get Order by UserId
router.get("/:UserId",(req,res)=>{
    const userId=req.params.UserId;
    //console.log(userId.toString());
    Order.findAll({
        where:{
            userId:userId
        }
    }).then(data=>{
        console.log(data);
        res.status(200).json(data);
    }).catch(error=>{
        res.status(500).json(error);
    })
});



module.exports=router;