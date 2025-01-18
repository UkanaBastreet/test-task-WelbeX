import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("blog", "postgres", "123456", {
    dialect: "postgres",
    host: "localhost",
    port: 5432,
  });
  