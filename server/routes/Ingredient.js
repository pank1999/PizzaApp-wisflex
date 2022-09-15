const router=require("express").Router();
const {Ingredient} = require("../models");


//add Ingredient
router.post("/",(req,res)=>{
    const IngData=req.body;
    Ingredient.create(IngData).then(data=>{
        console.log(data);
        res.status(200).json(data);
    }).catch(error=>{
        res.status(500).json(error);
    });
});

//get Ingredients
router.get("/",(req,res)=>{
    Ingredient.findAll().then(Ing=>{
        console.log(Ing);
        res.status(200).json(Ing);
    }).catch(error=>{
        res.status(500).json(error);
    });
})

//get Ingredient by id
router.get("/:IngId",(req,res)=>{
    const ID=req.params.IngId;

    Ingredient.findAll({
        where:{
            id:ID
        }
    }).then(Ing=>{
        console.log(Ing);
        res.status(200).json(Ing);
    }).catch(error=>{
        res.status(500).json(error);
    });
})

module.exports=router;