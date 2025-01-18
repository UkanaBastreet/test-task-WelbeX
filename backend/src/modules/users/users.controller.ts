import { Request, Response } from "express";
import { User } from "../../models/User.model";

interface CreateUserBody {
  email: string;
  password: string;
}

// Создание поста
export const createUser = async (
  req: Request<CreateUserBody>,
  res: Response
) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Failed to create user", error });
  }
};

// Получение всех постов
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const posts = await User.findAll();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve posts", error });
  }
};

// Получение поста по ID
export const getUserById = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve user", error });
  }
};

// Обновление поста
export const updateUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.update(req.body);
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Failed to update user", error });
  }
};

// Удаление поста
export const deleteUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    await user.destroy();
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete user", error });
  }
};
