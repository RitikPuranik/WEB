import api from './api';

export const authService = {
  async login(email, password) {
    const response = await api.post('/login', { email, passWord: password });
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  },

  async signup(userData) {
    const response = await api.post('/signUp', userData);
    return response.data;
  },

  async forgotPassword(email) {
    const response = await api.post('/forgot-password', { email });
    return response.data;
  },

  async resetPassword(token, newPassword) {
    const response = await api.post(`/reset-password/${token}`, { newPassword });
    return response.data;
  },

  logout() {
    localStorage.removeItem('token');
  }
};

export default authService;