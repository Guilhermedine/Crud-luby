/*module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    cpf: DataTypes.INTEGER,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password_hash: DataTypes.STRING,
    avatar: DataTypes.STRING,
    biography: DataTypes.STRING,
  });
  return User;
}*/

const { Sequelize, Model } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        cpf: Sequelize.STRING,
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        avatar: Sequelize.STRING,
        biography: Sequelize.STRING,
      },
      { sequelize },
    );

    return this;
  }
}

module.exports = { User };

