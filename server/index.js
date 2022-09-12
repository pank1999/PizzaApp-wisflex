const express=require("express");
const Sequelize=require("sequelize");

//const config=require("./config/config.json");
const sequelize = new Sequelize('pizzaApp', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres'
  });

const app=express();

const checkConnection= async ()=>{
   // const sequelize=new Sequelize(config);
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

checkConnection();

app.listen(3001,()=>{
    console.log("server is running on port 3001");
});