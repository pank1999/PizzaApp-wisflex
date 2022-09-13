const router=require("express").Router();
const {Order} = require("../models");

//Inserting Order 
router.post("/",(req,res)=>{
    const OrderData=req.body; 
    Order.create(OrderData).then((data)=>{
        console.log(data);
        res.status(200).send(data);
    }).catch((error)=>{
        res.status(500).send(error);
    })
});

//get all orders
router.get("/",(req,res)=>{
     Order.findAll().then(data=>{
         console.log(data);
         res.status(200).send(data);
     }).catch(error=>{
        res.status(500).send(error);
     });
});

//get Order by UserId
router.get("/:UserId",(req,res)=>{
    const userId=req.params.UserId;
    Order.findAll({
        where:{
            userId:userId
        }
    }).then(data=>{
        console.log(data);
        res.status(200).send(data);
    }).catch(error=>{
        res.status(500).send(error);
    })
});



module.exports=router;