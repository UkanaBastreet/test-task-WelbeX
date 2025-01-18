import { Request, Response } from "express";
import { Post } from "../../models/Post.model";

// Создание поста
export const createPost = async (req: Request, res: Response) => {
  try {
    const { title, content } = req.body;
    const newPost = await Post.create({ title, content });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: "Failed to create post", error });
  }
};

// Получение всех постов
export const getAllPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Post.findAll();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve posts", error });
  }
};

// Получение поста по ID
export const getPostById = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { id } = req.params;
    const post = await Post.findByPk(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve post", error });
  }
};

// Обновление поста
export const updatePost = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const post = await Post.findByPk(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    post.title = title;
    post.content = content;
    await post.save();
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: "Failed to update post", error });
  }
};

// Удаление поста
export const deletePost = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params;
    const post = await Post.findByPk(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    await post.destroy();
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete post", error });
  }
};
