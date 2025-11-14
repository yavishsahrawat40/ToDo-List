import { useState } from 'react';
import type { Todo } from '../types';

interface TodoItemProps {
  todo: Todo;
  onUpdate: (id: string, data: Partial<Todo>) => void;
  onDelete: (id: string) => void;
}

export const TodoItem = ({ todo, onUpdate, onDelete }: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description || '');
  const [deadline, setDeadline] = useState(
    todo.deadline ? new Date(todo.deadline).toISOString().split('T')[0] : ''
  );

  const handleUpdate = () => {
    onUpdate(todo._id, { title, description, deadline: deadline || undefined });
    setIsEditing(false);
  };

  const handleToggleComplete = () => {
    onUpdate(todo._id, { completed: !todo.completed });
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const isOverdue = () => {
    if (!todo.deadline || todo.completed) return false;
    return new Date(todo.deadline) < new Date();
  };

  if (isEditing) {
    return (
      <div className="todo-item editing">
        <div className="edit-form">
          <label className="edit-label">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter todo title"
            autoFocus
          />
          <label className="edit-label">Deadline</label>
          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
          <label className="edit-label">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description (optional)"
          />
        </div>
        <div className="todo-actions">
          <button onClick={() => setIsEditing(false)} className="btn-cancel">
            Cancel
          </button>
          <button onClick={handleUpdate} className="btn-save">
            Save Changes
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''} ${isOverdue() ? 'overdue' : ''}`}>
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggleComplete}
          className="todo-checkbox"
        />
        <div className="todo-text">
          <div className="todo-header">
            <h3>{todo.title}</h3>
            {todo.deadline && (
              <span className={`deadline-badge ${isOverdue() ? 'overdue' : ''}`}>
                📅 {formatDate(todo.deadline)}
              </span>
            )}
          </div>
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
