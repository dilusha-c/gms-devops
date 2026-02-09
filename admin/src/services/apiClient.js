import axios from 'axios';
import authService from './authService';

// Resolve the current origin in-browser so we can construct absolute URLs
// (used by QR codes) without relying on Vite env files.
export const API_ROOT = typeof window !== 'undefined' ? window.location.origin : '';

// Always hit the backend via the same origin `/api` path so Nginx can proxy it.
const api = axios.create({
  baseURL: API_ROOT ? `${API_ROOT}/api` : '/api',
});

// Add a request interceptor to include the auth token
api.interceptors.request.use(
  (config) => {
    // Get the token from authService
    const token = authService.getToken();
    
    // If token exists, add it to the request headers
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle token expiration
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Check if error is due to an unauthorized request (401)
    if (error.response && error.response.status === 401) {
      // If we're not on the login page, log the user out
      if (!window.location.pathname.includes('/login')) {
        console.log('Token expired or invalid. Logging out...');
        
        // Determine which type of user is logged in and log them out
        if (authService.isAdminAuthenticated()) {
          authService.logoutAdmin();
          window.location.href = '/admin/login'; // Redirect to admin login
        } else {
          // Handle other types of users if needed
          localStorage.removeItem('token');
          window.location.href = '/login'; // Redirect to main login
        }
      }
    }
    
    return Promise.reject(error);
  }
);

export default api;

export { api as axiosInstance };
