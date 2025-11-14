export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Todo {
  _id: string;
  userId: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  success: boolean;
  token: string;
  user: User;
}

export interface TodoResponse {
  success: boolean;
  data: Todo | Todo[];
  message?: string;
}
