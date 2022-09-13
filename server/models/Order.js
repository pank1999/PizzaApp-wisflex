const { ARRAY } = require("sequelize");

module.exports=(sequelize,DataTypes)=>{
    const Order=sequelize.define("Order",
    {
       userId:{
        type:DataTypes.STRING,
        allowNull: false
       },
        Price:{
        type:DataTypes.INTEGER,
        allowNull: false
       },
        Quantity:{
        type:DataTypes.INTEGER,
        allowNull: false
       },
       Ingredients:{
        type:DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
      },

    });
     return Order;
}