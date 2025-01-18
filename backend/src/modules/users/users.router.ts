import { Router } from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "./users.controller";

export const usersRouter = Router();

usersRouter.post("/users", createUser);
usersRouter.get("/users", getAllUsers);
usersRouter.get("/users/:id", getUserById);
usersRouter.put("/users/:id", updateUser);
usersRouter.delete("/users/:id", deleteUser);
