export interface Todo {
  id: string;
  tittle: string;
  description?: string;
  completed: boolean;
  createAt: Date;
}

export type CreateTodoDto = Omit<Todo, "id" | "createAt">;
export type UpdateTodoDto = Partial<CreateTodoDto>;
