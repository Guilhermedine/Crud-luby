import { sequelize } from '../../config/database';
import { Model, DataTypes } from 'sequelize';



class Car extends Model { }

Car.init({
  id: {
    type: DataTypes.UUIDV4,
    autoIncrement: true,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV1,
  },
  brand: {
    type: DataTypes.STRING
  },
  model: {
    type: DataTypes.STRING
  },
  year: {
    type: DataTypes.STRING
  },
  km: {
    type: DataTypes.STRING
  },
  color: {
    type: DataTypes.STRING
  },
  chassis: {
    type: DataTypes.STRING
  },
  purchase_price: {
    type: DataTypes.STRING
  },
  status: {
    type: DataTypes.STRING
  },
  solded_by: {
    type: DataTypes.STRING
  },
  created_at: {
    type: DataTypes.DATE,
  },
  updated_at: {
    type: DataTypes.DATE,
  }
}, {
  tableName: "cars",
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "updated_at",
  sequelize: sequelize,
});


export { Car }