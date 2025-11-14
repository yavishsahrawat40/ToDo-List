import axios from '../lib/axios';
import { Todo, TodoResponse } from '../types';
import { TodoInput } from '../schemas/todoSchemas';

export const todoApi = {
  getTodos: async (): Promise<Todo[]> => {
    const response = await axios.get<TodoResponse>('/todos');
    return response.data.data as Todo[];
  },

  createTodo: async (data: TodoInput): Promise<Todo> => {
    const response = await axios.post<TodoResponse>('/todos', data);
    return response.data.data as Todo;
  },

  updateTodo: async (id: string, data: Partial<Todo>): Promise<Todo> => {
    const response = await axios.put<TodoResponse>(`/todos/${id}`, data);
    return response.data.data as Todo;
  },

  deleteTodo: async (id: string): Promise<void> => {
    await axios.delete(`/todos/${id}`);
  },
};
