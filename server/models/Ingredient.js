module.exports=(sequelize,DataTypes)=>{
    const Ingredient=sequelize.define("Ingredient",
    {
      Name:{
        type:DataTypes.STRING,
        allowNull: false
      },
      Price:{
        type:DataTypes.INTEGER,
        allowNull: false
      },
      Img:{
        type:DataTypes.STRING,
        allowNull: false
      }
    });
     return Ingredient;
}