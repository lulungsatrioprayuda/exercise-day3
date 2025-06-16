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

  //get data by id
  getTodoById: (req: Request, res: Response): void => {
    try {
      const id = req.params.id;
      const todo = TodoService.getTodoById(id);

      if (!todo) {
        res.status(404).json({
          success: false,
          error: "Todo not found or not exist",
        });
        return;
      }

      res.status(200).json({
        success: true,
        data: todo,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Gagal mengambil data todo",
      });
    }
  },

  //create todo
  createTodo: (req: Request, res: Response): void => {
    try {
      const todoData: CreateTodoDto = req.body;
      if (!req) {
        res.status(400).json({
          success: false,
          error: "Bad request",
        });
        return;
      }
      const newTodo = TodoService.createTodo(todoData);
      res.status(201).json({
        success: true,
        data: newTodo,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to create todo",
      });
    }
  },
  //  update todo
  updateTodo: (req: Request, res: Response): void => {
    try {
      const id = req.params.id;
      const todoData: UpdateTodoDto = req.body;
      const updatedTodo = TodoService.updateTodo(id, todoData);

      if (!req) {
        res.status(400).json({
          success: false,
          error: "Bad request",
        });
        return;
      }
      if (!updatedTodo) {
        res.status(404).json({
          success: false,
          error: `Todo with id ${id} not found or not exist`,
        });
        return;
      }
      res.status(200).json({
        success: true,
        data: updatedTodo,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to update todo",
      });
    }
  },

  //  delete todo
  deleteTodo: (req: Request, res: Response): void => {
    try {
      const id = req.params.id;
      const idDeleted = TodoService.deleteTodo(id);

      if (!idDeleted) {
        res.status(404).json({
          success: false,
          error: `Todo with id ${id} not found or not exist`,
        });
      }

      res.status(200).json({
        success: true,
        message: "Todo deleted successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to delete todo",
      });
    }
  },
};
