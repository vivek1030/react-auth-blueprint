import axios from 'axios';

const API_URL = 'https://dummyjson.com/auth';

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    localStorage.setItem('token', response.data.token);
  } catch (err) {
    localStorage.removeItem('token');
    throw err;
  }

};

export const logout = () => {
  localStorage.removeItem('token');
};

export const getToken = () => {
  return localStorage.getItem('token');
};
