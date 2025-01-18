import { Router } from "express";
import {
  createPost,
  deletePost,
  getAllPosts,
  getPostById,
  updatePost,
} from "./posts.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";

export const postsRouter = Router();

postsRouter.post("/posts", authMiddleware, createPost);
postsRouter.get("/posts", authMiddleware, getAllPosts);
postsRouter.get("/posts/:id", authMiddleware, getPostById);
postsRouter.put("/posts/:id", authMiddleware, updatePost);
postsRouter.delete("/posts/:id", authMiddleware, deletePost);
