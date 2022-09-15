const router=require("express").Router();
const {Cart} = require("../models");

//get cart by userId
router.get("/:userId",(req,res)=>{
    const userID=req.params.userId;
    Cart.findAll({
        where:{
            userId:userID
        }
    }).then((data)=>{
        console.log(data);
        res.status(200).json(data);
    }).catch((err)=>{
        res.status(500).json(err);
    })
});

//add cart
router.post("/",(req,res)=>{
    const cartData=req.body;
    console.log(cartData)
    Cart.create(cartData).then((data)=>{
        console.log("then")
        res.status(200).json(data);
    }).catch((err)=>{
        console.log("err")
        res.status(500).json(err);
    })
});



router.delete("/",async(req,res)=>{
    const userId=req.body.userId;
    const productId=req.body.productId;
    try{
        const resData=await Cart.destroy({
            where:{
                userId:userId,
                Products:{
                    ProductId:productId
                }
            }
        });
        res.status(200).json(resData);
    }catch(err){
        res.status(500).json(err);
    }
});


module.exports=router;