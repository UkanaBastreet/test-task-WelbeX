import express from "express";
import dotenv from "dotenv";
import { sequelize } from "./db";
import { usersRouter } from "./modules/users/users.router";
import { postsRouter } from "./modules/posts/posts.router";
import { authRouter } from "./modules/auth/auth.router";
dotenv.config();

const app = express();
const PORT = process.env.APP_PORT;

app.get("/", (req, res) => {
  res.send("Hello world!");
});
app.use(express.json());

app.use(postsRouter);
app.use(usersRouter);
app.use(authRouter);

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
