import React, { useState, useEffect } from 'react';
import { useAppSelector } from './app/hooks';
import './style.css';

export default function Login() {
  const user = useAppSelector((state) => state.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setEmail(user.email);
    setPassword(user.password);
  }, [user]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="auth-forms">
      <div className="form-container">
        <h2>Đăng nhập</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Nhập email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Nhập mật khẩu..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Đăng nhập</button>
        </form>
        <p>Form đăng nhập</p>
      </div>
    </div>
  );
}