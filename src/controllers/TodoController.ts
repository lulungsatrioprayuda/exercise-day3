import { Request, Response } from "express";
import { TodoService } from "../services/TodoService";
import { CreateTodoDto, UpdateTodoDto } from "../models/Todo";

export const TodoController = {
  //get all todos
  getAllTodos: (req: Request, res: Response): void => {
    try {
      const todos = TodoService.getAllTodos();
      res.status(200).json({
        success: true,
        data: todos,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error,
      });
    }
  },
};
