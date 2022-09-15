const { ARRAY } = require("sequelize");

module.exports=(sequelize,DataTypes)=>{
    const Cart=sequelize.define("Cart",
    {
       userId:{
        type:DataTypes.INTEGER,
        allowNull: false
       },
       Products:{
        type:DataTypes.ARRAY(DataTypes.JSON),
        allowNull:true
       },
       Quantity:{
        type:DataTypes.INTEGER,
        allowNull:false
       }
    });
    return Cart;
}