import { Model, DataTypes } from 'sequelize';
import sequelize from '../db/database'
import Message from './message';
import Debt from './debt';

class Client extends Model {
  public id?: number;
  public name!: string;
  public rut!: string;
  public salary!: number;
  public savings!: number;

  static associate(models: any) {
    Client.hasMany(Message, { foreignKey: 'clientId' });
    Client.hasMany(Debt, { foreignKey: 'clientId' });
  }
}

Client.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    rut: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    salary: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    savings: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'clients',
    timestamps: false,
  }

);

Client.hasMany(Message, { foreignKey: 'clientId' });
Client.hasMany(Debt, { foreignKey: 'clientId' });

export default Client;

