import { sequelize } from '../../config/database';
import { Model, DataTypes } from 'sequelize';

class UserModel extends Model {}

UserModel.init ({
  id: {
    type: DataTypes.UUID,
    primaryKey: true
  }
}, {
  tableName: "user",
  timestamps: false,
  sequelize
});


export default UserModel

