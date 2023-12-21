import { Model, Sequelize, DataTypes } from 'sequelize';

export default class Client extends Model {
  public id?: number;
  public name!: string;
  public rut!: string;
  public salary!: number;
  public savings!: number;
}

export const ClientMap = (sequelize: Sequelize) => {
  Client.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    rut: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    salary: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    savings: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'clients',
    timestamps: false
  });
  Client.sync();
}