import Link from 'next/link';

export const metadata = { title: '方案訂閱 - 神話韓語' };

export default function PlansPage() {
  return (
    <main className="page-main">
      <section className="section section--pastel">
        <div className="container">
          <h1 className="page-title section-title--green">方案介紹</h1>
          <div className="plans-grid">
            <div className="plan-card">
              <h3>月訂閱</h3>
              <p className="plan-price">NT$ XXX/月</p>
              <p className="plan-desc">權益說明（由後台提供）</p>
              <Link href="/checkout?plan=monthly" className="btn btn-primary btn--block">前往結帳</Link>
            </div>
            <div className="plan-card plan-card--featured">
              <h3>季訂閱</h3>
              <p className="plan-price">NT$ XXX/季</p>
              <p className="plan-desc">權益說明（由後台提供）</p>
              <Link href="/checkout?plan=quarterly" className="btn btn-primary btn--block">前往結帳</Link>
            </div>
            <div className="plan-card">
              <h3>年訂閱</h3>
              <p className="plan-price">NT$ XXX/年</p>
              <p className="plan-desc">權益說明（由後台提供）</p>
              <Link href="/checkout?plan=yearly" className="btn btn-primary btn--block">前往結帳</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
