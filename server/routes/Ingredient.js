const router=require("express").Router();
const {Ingredient} = require("../models");


//add Ingredient
router.post("/",(req,res)=>{
    const IngData=req.body;
    Ingredient.create(IngData).then(data=>{
        console.log(data);
        res.status(200).send(data);
    }).catch(error=>{
        res.status(500).send(error);
    });
});

//get Ingredients
router.get("/",(req,res)=>{
    Ingredient.findAll().then(Ing=>{
        console.log(Ing);
        res.status(200).send(Ing);
    }).catch(error=>{
        res.status(500).send(error);
    });
})



module.exports=router;