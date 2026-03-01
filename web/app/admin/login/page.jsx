'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!email.trim() || !password) {
      setError('請輸入帳號與密碼');
      return;
    }
    if (email === 'admin@shenhua.com' && password === 'admin123') {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('admin_token', '1');
      }
      router.push('/admin');
      return;
    }
    setError('帳號或密碼錯誤（示範：admin@shenhua.com / admin123）');
  };

  return (
    <div className="admin-login-card">
      <h1>後台登入</h1>
      <form onSubmit={handleSubmit} className="admin-form">
        <div className="form-row">
          <label>帳號（Email）</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@shenhua.com"
          />
        </div>
        <div className="form-row">
          <label>密碼</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="admin123"
          />
        </div>
        {error && <p style={{ color: '#dc3545', fontSize: '0.9rem', marginBottom: '12px' }}>{error}</p>}
        <button type="submit" className="admin-btn admin-btn--primary" style={{ width: '100%' }}>
          登入
        </button>
      </form>
      <p style={{ marginTop: '16px', fontSize: '0.85rem', color: '#666' }}>
        示範帳密：admin@shenhua.com / admin123
      </p>
    </div>
  );
}
