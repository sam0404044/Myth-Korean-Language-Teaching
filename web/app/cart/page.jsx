import Link from 'next/link';

export const metadata = {
  title: '購物車 - 神話韓語',
};

export default function CartPage() {
  return (
    <main className="page-main">
      <section className="section">
        <div className="container">
          <h1 className="page-title">購物車</h1>
          <p className="cart-hint">未登入時請導向會員登入；登入後顯示購物車內容。</p>
          <div className="cart-list">
            <div className="cart-item">
              <div className="cart-item__img" />
              <div className="cart-item__info">
                <h3>課程範例 1</h3>
                <p className="cart-item__price">NT$ 1,500</p>
                <button type="button" className="btn btn--small">移除</button>
              </div>
            </div>
          </div>
          <div className="cart-footer">
            <p className="cart-total">合計：NT$ 1,500</p>
            <Link href="/checkout" className="btn btn-primary">選擇付款方式並結帳</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
