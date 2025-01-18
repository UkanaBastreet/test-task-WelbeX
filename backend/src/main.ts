import express from "express";
import dotenv from "dotenv";
import { sequelize } from "./db";
import postRoutes from "./modules/posts/posts.router";
dotenv.config();

const app = express();
const PORT = process.env.APP_PORT;

app.get("/", (req, res) => {
  res.send("Hello world!");
});
app.use(express.json());
app.use(postRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

const syncDatabase = async () => {
  try {
    await sequelize.sync({
      // force: true, // force: true — это удалит старую таблицу и создаст новую
    });
    console.log("Database synchronized!");
  } catch (error) {
    console.error("Error syncing database: ", error);
  }
};

syncDatabase();
