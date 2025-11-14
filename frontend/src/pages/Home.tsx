import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { useTodos } from '../hooks/useTodos';
import { TodoForm } from '../components/TodoForm';
import { TodoItem } from '../components/TodoItem';
import { TodoInput } from '../schemas/todoSchemas';

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

  return (
    <div className="home-container">
      <header className="header">
        <h1>My Todo List</h1>
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
            <div className="todos-list">
              {todos.map((todo) => (
                <TodoItem
                  key={todo._id}
                  todo={todo}
                  onUpdate={updateTodo}
                  onDelete={deleteTodo}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
