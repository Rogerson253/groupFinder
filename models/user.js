module.exports = function (sequelize, DataTypes) {
    var Users = sequelize.define("user", {
      
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
    return Users;
  };