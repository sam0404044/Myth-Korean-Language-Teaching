import Link from 'next/link';

export const metadata = { title: '會員註冊 - 神話韓語' };

export default function RegisterPage() {
  return (
    <main className="page-main">
      <section className="section auth-section">
        <div className="container container--narrow">
          <h1 className="page-title">建立新帳號</h1>
          <form className="auth-form" action="#" method="post">
            <div className="form-group"><label>姓名</label><input type="text" name="name" required placeholder="請輸入姓名" /></div>
            <div className="form-group"><label>Email</label><input type="email" name="email" required placeholder="請輸入 Email" /></div>
            <div className="form-group"><label>密碼</label><input type="password" name="password" required placeholder="請設定密碼" /></div>
            <button type="submit" className="btn btn-primary btn--block">註冊</button>
            <p className="auth-form__note">已有帳號？<Link href="/login">立即登入</Link></p>
          </form>
        </div>
      </section>
    </main>
  );
}
