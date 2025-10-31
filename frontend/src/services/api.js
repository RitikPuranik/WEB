import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add a response interceptor to handle common errors
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      // Handle specific error cases here
      switch (error.response.status) {
        case 401:
          // Unauthorized - redirect to login
          window.location.href = '/login';
          break;
        case 403:
          // Forbidden
          alert('Access denied');
          break;
        case 404:
          // Not found
          alert('Resource not found');
          break;
        default:
          // General error
          alert('An error occurred. Please try again.');
      }
    }
    return Promise.reject(error);
  }
);

// Add a request interceptor to add authentication token
api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default api;