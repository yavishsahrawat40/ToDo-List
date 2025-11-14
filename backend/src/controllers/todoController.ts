import { Response } from 'express';
import Todo from '../models/Todo';
import { AuthRequest } from '../types';
import { logError } from '../utils/logger';

export const createTodo = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { title, description } = req.body;

    const todo = await Todo.create({
      userId: req.user!.id,
      title,
      description,
    });

    res.status(201).json({ success: true, data: todo });
  } catch (error) {
    await logError('Create Todo Error', error as Error, req.path, req.method, req.user?.id);
    res.status(500).json({ success: false, message: 'Error creating todo' });
  }
};

export const getTodos = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const todos = await Todo.find({ userId: req.user!.id }).sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: todos });
  } catch (error) {
    await logError('Get Todos Error', error as Error, req.path, req.method, req.user?.id);
    res.status(500).json({ success: false, message: 'Error fetching todos' });
  }
};

export const updateTodo = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { title, description, completed } = req.body;

    const todo = await Todo.findOne({ _id: id, userId: req.user!.id });

    if (!todo) {
      res.status(404).json({ success: false, message: 'Todo not found' });
      return;
    }

    if (title !== undefined) todo.title = title;
    if (description !== undefined) todo.description = description;
    if (completed !== undefined) todo.completed = completed;

    await todo.save();

    res.status(200).json({ success: true, data: todo });
  } catch (error) {
    await logError('Update Todo Error', error as Error, req.path, req.method, req.user?.id);
    res.status(500).json({ success: false, message: 'Error updating todo' });
  }
};

export const deleteTodo = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const todo = await Todo.findOneAndDelete({ _id: id, userId: req.user!.id });

    if (!todo) {
      res.status(404).json({ success: false, message: 'Todo not found' });
      return;
    }

    res.status(200).json({ success: true, message: 'Todo deleted successfully' });
  } catch (error) {
    await logError('Delete Todo Error', error as Error, req.path, req.method, req.user?.id);
    res.status(500).json({ success: false, message: 'Error deleting todo' });
  }
};
