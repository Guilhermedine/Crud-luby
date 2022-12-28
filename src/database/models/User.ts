import { sequelize } from '../../config/database';
import { Model, DataTypes } from 'sequelize';



class User extends Model { }
User.init({
  id: {
    type: DataTypes.UUIDV4,
    autoIncrement: true,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV1,
  },
  cpf: {
    type: DataTypes.INTEGER,
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
  },
  updated_at: {
    type: DataTypes.DATE,
  },
  deleted_at: {
    type: DataTypes.DATE,
  },
}, {
  tableName: "users",
  timestamps: false,
  sequelize
});

(async () => {
  await sequelize.sync({ force: true });
})();

export { User }

