module.exports=(sequelize,DataTypes)=>{
    const User=sequelize.define("User",
    {
      firstName:{
        type:DataTypes.STRING,
        allowNull: false
      },
      lastName:{
        type:DataTypes.STRING,
        allowNull: false
      },
      mobileNumber:{
        type:DataTypes.STRING,
        allowNull: false
      },
       password:{
        type:DataTypes.STRING,
        allowNull: false
      },
      isAdmin:{
        type:DataTypes.BOOLEAN,
        allowNull: false
      },

    });
     return User;
}