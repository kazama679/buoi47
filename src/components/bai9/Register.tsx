import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAppDispatch } from './app/hooks';
import { register } from './features/userSlice';
import './style.css';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const history = useHistory();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(register({ email, password }));
    history.push('/login');
  };

  return (
    <div className="auth-forms">
      <div className="form-container">
        <h2>Đăng ký</h2>
        <form onSubmit={handleRegister}>
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
          <button type="submit">Đăng ký</button>
        </form>
        <p>Form đăng ký</p>
      </div>
    </div>
  );
}