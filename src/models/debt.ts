import { Model, DataTypes } from 'sequelize';
import Client from './client';
import sequelize from '../db/database'

class Debt extends Model {
  public id?: number;
  public clientId?: number;
  public institution!: string;
  public amount!: number;
  public dueDate!: Date;

  static associate(models: any) {
    Debt.belongsTo(Client, { foreignKey: 'clientId', as: 'client' });
  }
}

Debt.init(
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
    institution: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dueDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'debts',
    timestamps: false,
  }
);

export default Debt;

