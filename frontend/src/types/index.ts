export type User = {
  id: string;
  name: string;
  email: string;
};

export type Todo = {
  _id: string;
  userId: string;
  title: string;
  description?: string;
  completed: boolean;
  deadline?: string;
  createdAt: string;
  updatedAt: string;
};

export type AuthResponse = {
  success: boolean;
  token: string;
  user: User;
};

export type TodoResponse = {
  success: boolean;
  data: Todo | Todo[];
  message?: string;
};
