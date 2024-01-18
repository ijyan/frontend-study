import React, { useState } from 'react';
import axios from 'axios';
import { useAuthStore } from './store';
import { useCookies } from 'react-cookie';

function Login() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [cookie, setCookie, removeCookies] = useCookies(['token']);
  const API_URL = 'http://localhost:5001';
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/login`, { userId, password });
      useAuthStore.getState().setToken(response.data.token);
      setCookie('token', response.data.token, { path: '/' });
    } catch (e) {
      console.error(e);
    }
  };

  const logout = () => {
    // removeCookies('token', { path: '/' });
    setCookie('token', '', { path: '/', expires: new Date(0) });
  };

  return (
    <>
      <form action="" onSubmit={handleLogin}>
        <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">로그인</button>
        <button type="button" onClick={logout}>로그아웃</button>
      </form>
    </>
  );
}

export default Login;
