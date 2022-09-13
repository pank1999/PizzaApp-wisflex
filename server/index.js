const express=require("express");
const db=require("./models");
const userRouter = require("./routes/User"); 
const orderRoutes=require("./routes/Order");
const ingredientRoutes=require("./routes/Ingredient");
const dotenv=require("dotenv");

  
const app=express();

dotenv.config();

app.use(express.json());

//add new user or register user
app.use("/api/user",userRouter);
app.use("/api/order",orderRoutes);
app.use("/api/ingredient",ingredientRoutes);





db.sequelize.sync().then((res)=>{
  app.listen(3001,()=>{
     console.log("server is running on port 3001");
  });
});