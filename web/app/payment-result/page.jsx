import Link from 'next/link';

export const metadata = { title: '付款結果 - 神話韓語' };

export default function PaymentResultPage() {
  return (
    <main className="page-main">
      <section className="section">
        <div className="container container--narrow">
          <h1 className="page-title">付款結果</h1>
          <div className="payment-result payment-result--success">
            <p className="payment-result__msg">付款成功！權限已開通。</p>
            <p><Link href="/member#my-courses" className="btn btn-primary">前往我的課程</Link></p>
          </div>
        </div>
      </section>
    </main>
  );
}
