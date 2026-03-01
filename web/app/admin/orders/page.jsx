import { orders, subscriptions } from '../../../data/orders';
import { plans } from '../../../data/plans';

export const metadata = { title: '訂單／交易 - 神話韓語後台' };

export default function AdminOrdersPage() {
  const planMap = Object.fromEntries(plans.map((p) => [p.id, p.name]));
  const statusLabel = { paid: '已付款', pending: '待付款', failed: '失敗', refunded: '已退款' };

  return (
    <>
      <h1 className="admin-page-title">訂單／交易紀錄</h1>
      <p style={{ marginBottom: '20px', color: '#666' }}>訂單列表、付款狀態、金額、方案。</p>
      <div className="admin-card">
        <table className="admin-table">
          <thead>
            <tr>
              <th>訂單編號</th>
              <th>會員 ID</th>
              <th>方案</th>
              <th>金額</th>
              <th>狀態</th>
              <th>下單時間</th>
              <th>付款時間</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id}>
                <td>{o.id}</td>
                <td>{o.userId}</td>
                <td>{planMap[o.planId] || o.planId}</td>
                <td>NT$ {o.amount}</td>
                <td><span className={`admin-badge admin-badge--${o.status === 'paid' ? 'on' : o.status === 'pending' ? 'pending' : 'off'}`}>{statusLabel[o.status] || o.status}</span></td>
                <td>{o.createdAt ? new Date(o.createdAt).toLocaleString('zh-TW') : '-'}</td>
                <td>{o.paidAt ? new Date(o.paidAt).toLocaleString('zh-TW') : '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 style={{ marginTop: '32px', marginBottom: '12px', fontSize: '1.1rem' }}>訂閱狀態</h2>
      <p style={{ marginBottom: '12px', color: '#666', fontSize: '0.9rem' }}>生效／到期／取消。</p>
      <div className="admin-card">
        <table className="admin-table">
          <thead>
            <tr>
              <th>會員 ID</th>
              <th>方案</th>
              <th>生效日</th>
              <th>到期日</th>
              <th>狀態</th>
            </tr>
          </thead>
          <tbody>
            {subscriptions.map((s, i) => (
              <tr key={i}>
                <td>{s.userId}</td>
                <td>{planMap[s.planId] || s.planId}</td>
                <td>{s.startAt}</td>
                <td>{s.endAt}</td>
                <td><span className="admin-badge admin-badge--on">{s.status === 'active' ? '生效中' : s.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
