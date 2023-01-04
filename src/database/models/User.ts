import { sequelize } from '../../config/database';
import { Model, DataTypes } from 'sequelize';



class User extends Model {
  id;
  password_hash;
  name;
  avatar;
  cpf;
}
User.init({
  id: {
    type: DataTypes.UUIDV4,
    autoIncrement: true,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV1,
  },
  cpf: {
    type: DataTypes.STRING,
  },
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  password_hash: {
    type: DataTypes.STRING,
  },
  avatar: {
    type: DataTypes.STRING,
  },
  biography: {
    type: DataTypes.STRING,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: true
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: true
  },
  deleted_at: {
    type: DataTypes.DATE,
  },
}, {
  tableName: "users",
  timestamps: false,
  sequelize: sequelize
});




export { User }

