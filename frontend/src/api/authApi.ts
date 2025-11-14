import axios from '../lib/axios';
import type { AuthResponse } from '../types';
import type { SignupInput, SigninInput } from '../schemas/authSchemas';

export const authApi = {
  signup: async (data: SignupInput): Promise<AuthResponse> => {
    const response = await axios.post('/auth/signup', data);
    return response.data;
  },

  signin: async (data: SigninInput): Promise<AuthResponse> => {
    const response = await axios.post('/auth/signin', data);
    return response.data;
  },
};
