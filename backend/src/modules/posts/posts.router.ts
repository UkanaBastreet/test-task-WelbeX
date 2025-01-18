import { Router } from "express";
import {
  createPost,
  deletePost,
  getAllPosts,
  getPostById,
  updatePost,
} from "./posts.controller";

export const postsRouter = Router();

postsRouter.post("/posts", createPost);
postsRouter.get("/posts", getAllPosts);
postsRouter.get("/posts/:id", getPostById);
postsRouter.put("/posts/:id", updatePost);
postsRouter.delete("/posts/:id", deletePost);
