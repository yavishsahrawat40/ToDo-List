import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { todoSchema } from '../schemas/todoSchemas';
import type { TodoInput } from '../schemas/todoSchemas';

interface TodoFormProps {
  onSubmit: (data: TodoInput) => void;
  isLoading: boolean;
}

export const TodoForm = ({ onSubmit, isLoading }: TodoFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TodoInput>({
    resolver: zodResolver(todoSchema),
  });

  const handleFormSubmit = (data: TodoInput) => {
    onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="todo-form">
      <div className="form-group">
        <input type="text" placeholder="Todo title" {...register('title')} />
        {errors.title && <span className="error">{errors.title.message}</span>}
      </div>

      <div className="form-group">
        <textarea placeholder="Description (optional)" {...register('description')} />
      </div>

      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Adding...' : 'Add Todo'}
      </button>
    </form>
  );
};
