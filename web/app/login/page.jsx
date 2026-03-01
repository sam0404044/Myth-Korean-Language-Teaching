import Link from 'next/link';
import LoginForm from '../../components/LoginForm';

export const metadata = {
  title: '會員登入 - 神話韓語',
};

export default function LoginPage() {
  return (
    <main className="page-main">
      <section className="section auth-section">
        <div className="container container--narrow">
          <h1 className="page-title">會員登入</h1>
          {/* 【暫時功能】LoginForm 內含帳號 AAA / 密碼 123 進入後台；完成真正登入系統後改回一般 form */}
          <LoginForm />
        </div>
      </section>
    </main>
  );
}
