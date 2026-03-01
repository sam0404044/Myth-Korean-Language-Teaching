'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

/**
 * 【暫時功能】完成真正登入系統後請刪除此元件，改回一般 form 或串接 API。
 * 當帳號 AAA、密碼 123 時導向後台；真正上線前請移除。
 */
export default function LoginForm() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const account = (form.querySelector('[name="email"]') || form.querySelector('[name="account"]'))?.value?.trim?.() ?? '';
    const password = (form.querySelector('[name="password"]')?.value ?? '').trim();

    // 【暫時功能】後台入口：帳號 AAA、密碼 123 → 進入後台。完成真正登入系統後刪除此段。
    if (account === 'AAA' && password === '123') {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('admin_token', '1');
      }
      router.push('/admin');
      return;
    }

    // TODO: 串接真正會員登入 API
    form.submit();
  };

  return (
    <form className="auth-form" action="#" method="post" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="login-email">Email</label>
        {/* 暫時改為 text 以支援後台入口 AAA；完成真正登入後改回 type="email" */}
      <input id="login-email" type="text" name="email" required placeholder="請輸入 Email" autoComplete="username" />
      </div>
      <div className="form-group">
        <label htmlFor="login-password">密碼</label>
        <input id="login-password" type="password" name="password" required placeholder="請輸入密碼" />
      </div>
      <button type="submit" className="btn btn-primary btn--block">登入</button>
      <p className="auth-form__note">
        <Link href="/forgot-password">忘記密碼？</Link>
      </p>
      <hr className="auth-form__divider" />
      <p className="auth-form__note">
        <button type="button" className="btn btn-outline btn--block" disabled>Google 快速登入（待串接）</button>
      </p>
      <p className="auth-form__note">
        還沒有帳號？<Link href="/register">立即註冊</Link>
      </p>
      <p className="auth-form__note" style={{ fontSize: '0.85rem', color: '#888' }}>
        【暫時】後台入口：帳號 AAA / 密碼 123 → 進入後台。完成真正登入後請移除。
      </p>
    </form>
  );
}
