import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useNavigate, Link } from 'react-router-dom';
import { authApi } from '../api/authApi';
import { useAuthStore } from '../store/authStore';
import { signinSchema, SigninInput } from '../schemas/authSchemas';

export const Signin = () => {
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninInput>({
    resolver: zodResolver(signinSchema),
  });

  const mutation = useMutation({
    mutationFn: authApi.signin,
    onSuccess: (data) => {
      setAuth(data.user, data.token);
      navigate('/');
    },
    onError: (error: any) => {
      alert(error.response?.data?.message || 'Signin failed');
    },
  });

  const onSubmit = (data: SigninInput) => {
    mutation.mutate(data);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>Email</label>
            <input type="email" {...register('email')} />
            {errors.email && <span className="error">{errors.email.message}</span>}
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" {...register('password')} />
            {errors.password && <span className="error">{errors.password.message}</span>}
          </div>

          <button type="submit" disabled={mutation.isPending}>
            {mutation.isPending ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className="auth-link">
          <Link to="/forgot-password">Forgot Password?</Link>
        </p>
        <p className="auth-link">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};
