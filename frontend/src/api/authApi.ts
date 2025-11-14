import axios from '../lib/axios';
import { AuthResponse } from '../types';
import { SignupInput, SigninInput } from '../schemas/authSchemas';

export const authApi = {
  signup: async (data: SignupInput): Promise<AuthResponse> => {
    const response = await axios.post('/auth/signup', data);
    return response.data;
  },

  signin: async (data: SigninInput): Promise<AuthResponse> => {
    const response = await axios.post('/auth/signin', data);
    return response.data;
  },

  forgotPassword: async (email: string) => {
    const response = await axios.post('/auth/forgot-password', { email });
    return response.data;
  },

  resetPassword: async (token: string, password: string) => {
    const response = await axios.put(`/auth/reset-password/${token}`, { password });
    return response.data;
  },
};
