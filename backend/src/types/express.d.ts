import { Request } from "express";

declare global {
  namespace Express {
    export interface Request {
      user?: any; // Или типизируйте как хотите, например: user?: User
    }
  }
}
export { Request };

