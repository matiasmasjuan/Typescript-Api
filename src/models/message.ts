import { Model, DataTypes } from 'sequelize';
import Client from './client';
import sequelize from '../db/database'

class Message extends Model {
  public id?: number;
  public clientId?: number;
  public text!: string;
  public role!: 'Client' | 'Agent';
  public sentAt!: Date;

  static associate(models: any) {
    Message.belongsTo(Client, { foreignKey: 'clientId' });
  }
}

Message.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    clientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    text: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING(20),
      allowNull: false,
      validate: {
        isIn: [['Client', 'Agent']],
      },
    },
    sentAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'messages',
    timestamps: false,
  }
);

export default Message;

