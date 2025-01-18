import type { NextFunction, Response } from "express";
import { verify } from "jsonwebtoken";
import { type Request } from "../types/express";

const JWT_SECRET = process.env.JWT_SECRET;

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = verify(token, JWT_SECRET as string);
    req.user = decoded;

    next();
  } catch (error) {
    res.status(403).json({ message: "Forbidden: Invalid token" });
    return;
  }
};
