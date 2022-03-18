const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  // define first argument create a table in database
  // allowNull is for required field
  const User = sequelize.define("users", {
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    username: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING, allowNull: false },
    address: { type: DataTypes.STRING, allowNull: false },
  });

  // User.methods.correctPassword = async (typedPassword, originalPassword) => {
  //   return await bcrypt.compare(typedPassword, originalPassword);
  // };
  return User;
};

// pre hook or Instance method

// authenticationSchema.methods.correctPassword = async (typedPassword,originalPassword)=>{

//     return await bcrypt.compare(typedPassword,originalPassword)
// }
