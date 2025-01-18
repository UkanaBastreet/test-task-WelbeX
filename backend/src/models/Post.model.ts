import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db";

export class Post extends Model {
  public id!: number;
  public title!: string;
  public content!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize, // Это подключение sequelize к модели
    modelName: "Post",
  }
);
