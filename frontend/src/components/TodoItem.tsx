import { useState } from 'react';
import { Todo } from '../types';

interface TodoItemProps {
  todo: Todo;
  onUpdate: (id: string, data: Partial<Todo>) => void;
  onDelete: (id: string) => void;
}

export const TodoItem = ({ todo, onUpdate, onDelete }: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description || '');

  const handleUpdate = () => {
    onUpdate(todo._id, { title, description });
    setIsEditing(false);
  };

  const handleToggleComplete = () => {
    onUpdate(todo._id, { completed: !todo.completed });
  };

  if (isEditing) {
    return (
      <div className="todo-item editing">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <div className="todo-actions">
          <button onClick={handleUpdate} className="btn-save">
            Save
          </button>
          <button onClick={() => setIsEditing(false)} className="btn-cancel">
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggleComplete}
          className="todo-checkbox"
        />
        <div className="todo-text">
          <h3>{todo.title}</h3>
          {todo.description && <p>{todo.description}</p>}
        </div>
      </div>
      <div className="todo-actions">
        <button onClick={() => setIsEditing(true)} className="btn-edit">
          Edit
        </button>
        <button onClick={() => onDelete(todo._id)} className="btn-delete">
          Delete
        </button>
      </div>
    </div>
  );
};
