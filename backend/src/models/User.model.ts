import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db"; // Ваш экземпляр Sequelize
import bcrypt from "bcryptjs";

export class User extends Model {
  public id!: number; // ID пользователя (генерируется автоматически)
  public email!: string; // Email пользователя
  public password!: string; // Хешированный пароль
  public readonly createdAt!: Date; // Дата создания записи
  public readonly updatedAt!: Date; // Дата обновления записи

  // Метод для проверки пароля
  public async checkPassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED, // Невозможны отрицательные значения
      autoIncrement: true, // Автоинкремент
      primaryKey: true, // Основной ключ
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false, // Обязательное поле
      unique: true, // Уникальное значение
      validate: {
        isEmail: true, // Проверка на валидность email
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false, // Обязательное поле
      validate: {
        len: [6, 100], // Минимальная длина пароля 6 символов
      },
    },
  },
  {
    sequelize, // Экземпляр Sequelize
    tableName: "users", // Название таблицы
    hooks: {
      // Хук для хеширования пароля перед сохранением
      beforeCreate: async (user: User) => {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
      },
      beforeUpdate: async (user: User) => {
        if (user.changed("password")) {
          const salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(user.password, salt);
        }
      },
    },
  }
);

