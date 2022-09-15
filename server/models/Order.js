const { ARRAY } = require("sequelize");

module.exports=(sequelize,DataTypes)=>{
    const Order=sequelize.define("Order",
    {
       userId:{
        type:DataTypes.INTEGER,
        allowNull: false
       },
        TotalPrice:{
        type:DataTypes.INTEGER,
        allowNull: false
       },
        Quantity:{
        type:DataTypes.INTEGER,
        allowNull: false
       },
       Products:{
        type:DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: false
      },

    });
     return Order;
}