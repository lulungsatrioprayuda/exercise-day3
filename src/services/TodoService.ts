import { todo } from "node:test";
import { Todo, CreateTodoDto, UpdateTodoDto } from "../models/Todos";
import { v4 as uuidv4 } from "uuid";

//membuat memori kosong terlebih dahulu
const todos: Todo[] = [];

export const TodoService = {
  //mengambil atau menampilkan semua data
  getAllTodos: (): Todo[] => {
    return todos;
  },

  // get 1 data by id
  getTodoById: (id: string): Todo | undefined => {
    return todos.find((todo) => todo.id === id);
  },

  //  create some todo
  createTodo: (todoData: CreateTodoDto): Todo => {
    const newTodo: Todo = {
      id: uuidv4(),
      ...todoData,
      createAt: new Date(),
    };

    todos.push(newTodo);
    return newTodo;
  },

  //  update existing todo
  updateTodo: (id: string, todoData: UpdateTodoDto): Todo | null => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);

    if (todoIndex === -1) {
      return null;
    }

    const updatedTodo = {
      ...todos[todoIndex],
      ...todoData,
    };
    todos[todoIndex] = updatedTodo;
    return updatedTodo;
  },

  //  delete
  deleteTodo: (id: string): boolean => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);

    if (todoIndex === -1) {
      return false;
    }

    todos.splice(todoIndex, 1);
    return true;
  },
};
