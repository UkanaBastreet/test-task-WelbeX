import { Router } from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "./users.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";

export const usersRouter = Router();

usersRouter.post("/users", authMiddleware, createUser);
usersRouter.get("/users", authMiddleware, getAllUsers);
usersRouter.get("/users/:id", authMiddleware, getUserById);
usersRouter.put("/users/:id", authMiddleware, updateUser);
usersRouter.delete("/users/:id", authMiddleware, deleteUser);
