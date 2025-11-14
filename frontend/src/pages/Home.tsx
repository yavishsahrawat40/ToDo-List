import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { useTodos } from '../hooks/useTodos';
import { TodoForm } from '../components/TodoForm';
import { TodoItem } from '../components/TodoItem';
import type { TodoInput } from '../schemas/todoSchemas';
import type { Todo } from '../types';

export const Home = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();
  const { todos, isLoading, createTodo, updateTodo, deleteTodo, isCreating } = useTodos();

  const handleLogout = () => {
    logout();
    navigate('/signin');
  };

  const handleCreateTodo = (data: TodoInput) => {
    createTodo(data);
  };

  const handleUpdateTodo = (id: string, data: Partial<Todo>) => {
    updateTodo({ id, data });
  };

  const getCurrentDate = () => {
    const date = new Date();
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const isPastTodo = (todo: Todo) => {
    if (!todo.deadline) return false;
    const deadline = new Date(todo.deadline);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return deadline < today && !todo.completed;
  };

  const activeTodos = todos.filter(todo => !isPastTodo(todo));
  const pastTodos = todos.filter(todo => isPastTodo(todo));

  return (
    <div className="home-container">
      <header className="header">
        <div className="header-left">
          <h1>My Todo List</h1>
          <p className="current-date">{getCurrentDate()}</p>
        </div>
        <div className="user-info">
          <span>Welcome, {user?.name}!</span>
          <button onClick={handleLogout} className="btn-logout">
            Logout
          </button>
        </div>
      </header>

      <div className="content">
        <TodoForm onSubmit={handleCreateTodo} isLoading={isCreating} />

        <div className="todos-container">
          {isLoading ? (
            <p>Loading todos...</p>
          ) : todos.length === 0 ? (
            <p className="no-todos">No todos yet. Create your first one!</p>
          ) : (
            <>
              {activeTodos.length > 0 && (
                <div className="todos-section">
                  <h2 className="section-title">Active Tasks</h2>
                  <div className="todos-list">
                    {activeTodos.map((todo) => (
                      <TodoItem
                        key={todo._id}
                        todo={todo}
                        onUpdate={handleUpdateTodo}
                        onDelete={deleteTodo}
                      />
                    ))}
                  </div>
                </div>
              )}

              {pastTodos.length > 0 && (
                <div className="todos-section past-section">
                  <h2 className="section-title overdue-title">⚠️ Overdue Tasks</h2>
                  <div className="todos-list">
                    {pastTodos.map((todo) => (
                      <TodoItem
                        key={todo._id}
                        todo={todo}
                        onUpdate={handleUpdateTodo}
                        onDelete={deleteTodo}
                      />
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
