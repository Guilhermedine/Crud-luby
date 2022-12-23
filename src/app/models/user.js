module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    cpf: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password_hash: DataTypes.STRING,
  });

  return User;
}