import { Router } from "express";
import { login, registration } from "./auth.controller";

export const authRouter = Router();

authRouter.post("/auth/registration", registration);
authRouter.post("/auth/login", login);
