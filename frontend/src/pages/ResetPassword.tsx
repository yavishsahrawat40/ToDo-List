import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { authApi } from '../api/authApi';
import { resetPasswordSchema } from '../schemas/authSchemas';
import type { ResetPasswordInput } from '../schemas/authSchemas';

export const ResetPassword = () => {
  const navigate = useNavigate();
  const { token } = useParams<{ token: string }>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordInput>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const mutation = useMutation({
    mutationFn: (data: ResetPasswordInput) => authApi.resetPassword(token!, data.password),
    onSuccess: () => {
      alert('Password reset successful! Please sign in.');
      navigate('/signin');
    },
    onError: (error: any) => {
      alert(error.response?.data?.message || 'Failed to reset password');
    },
  });

  const onSubmit = (data: ResetPasswordInput) => {
    mutation.mutate(data);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Reset Password</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>New Password</label>
            <input type="password" {...register('password')} />
            {errors.password && <span className="error">{errors.password.message}</span>}
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" {...register('confirmPassword')} />
            {errors.confirmPassword && (
              <span className="error">{errors.confirmPassword.message}</span>
            )}
          </div>

          <button type="submit" disabled={mutation.isPending}>
            {mutation.isPending ? 'Resetting...' : 'Reset Password'}
          </button>
        </form>
      </div>
    </div>
  );
};
