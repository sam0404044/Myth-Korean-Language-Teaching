import Link from 'next/link';

export const metadata = {
  title: '結帳 - 神話韓語',
};

export default function CheckoutPage() {
  return (
    <main className="page-main">
      <section className="section">
        <div className="container container--narrow">
          <h1 className="page-title">結帳</h1>
          <p className="checkout-hint">
            付款方式選擇、訂單摘要。實際金流需串接藍新/綠界等 API，並實作 Webhook 處理付款成功/失敗與權限開通。
          </p>
          <form className="checkout-form" action="#">
            <div className="form-group">
              <label htmlFor="payment">付款方式</label>
              <select id="payment" name="payment">
                <option value="">請選擇</option>
                <option value="credit">信用卡</option>
                <option value="atm">ATM 轉帳</option>
              </select>
            </div>
            <p className="checkout-total">應付金額：NT$ 1,500</p>
            <button type="submit" className="btn btn-primary btn--block">
              確認送出（導向金流頁）
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
