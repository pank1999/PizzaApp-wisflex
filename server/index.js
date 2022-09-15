const express=require("express");
const db=require("./models");
const userRouter = require("./routes/User"); 
const orderRoutes=require("./routes/Order");
const ingredientRoutes=require("./routes/Ingredient");
const cartRoutes=require("./routes/Cart");
const dotenv=require("dotenv");
const cors = require("cors");

  
const app=express();

app.use(cors());

dotenv.config();

app.use(express.json());

//add new user or register user
app.use("/api/user",userRouter);
app.use("/api/order",orderRoutes);
app.use("/api/ingredient",ingredientRoutes);
app.use("/api/cart",cartRoutes);




db.sequelize.sync().then((res)=>{
  app.listen(3001,()=>{
     console.log("server is running on port 3001");
  });
});