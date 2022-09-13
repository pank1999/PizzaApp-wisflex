const express=require("express");
const db=require("./models");
const userRouter = require("./routes/User"); 
const orderRoutes=require("./routes/Order");
const ingredientRoutes=require("./routes/Ingredient");

// const Sequelize=require("sequelize");

// //creating connnection
// const sequelize = new Sequelize('pizzaApp', 'postgres', 'admin', {
//     host: 'localhost',
//     dialect: 'postgres'
//   });

//checking connection
  // const checkConnection= async ()=>{
  //   try {
  //     await db.authenticate();
  //     console.log('Connection has been established successfully.');
  //   } catch (error) {
  //     console.error('Unable to connect to the database:', error);
  //   }
  // }
  
  // checkConnection();
  
const app=express();

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

// app.listen(3001,()=>{
//     console.log("server is running on port 3001");
// });