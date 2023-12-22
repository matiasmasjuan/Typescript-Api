import { Model, Sequelize, DataTypes } from 'sequelize';
import Client from './client';
import sequelize from '../db/database'


export default class Message extends Model {
  public id?: number;
  public clientId?: number;
  public text!: string;
  public role!: 'client' | 'agent';
  public sentAt!: Date;

  static associate(models: any) {
    Message.belongsTo(models.Client, { foreignKey: 'clientId' });
  }
}

export const MessageMap = (sequelize: Sequelize) => {
  Message.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    text: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    role: {
      type: DataTypes.STRING(20),
      allowNull: false,
      validate: {
        isIn: [['client', 'agent']]
      }
    },
    sentAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'messages',
    timestamps: false
  });
  Message.sync();
}
