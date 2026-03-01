import Link from 'next/link';
import { plans } from '../../../data/plans';

export const metadata = { title: '方案管理 - 神話韓語後台' };

export default function AdminPlansPage() {
  return (
    <>
      <h1 className="admin-page-title">方案管理</h1>
      <p style={{ marginBottom: '20px', color: '#666' }}>訂閱方案名稱、價格、描述、是否上架、排序。</p>
      <div className="admin-card">
        <table className="admin-table">
          <thead>
            <tr>
              <th>排序</th>
              <th>方案名稱</th>
              <th>價格（NT$）</th>
              <th>週期</th>
              <th>狀態</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {plans.map((p) => (
              <tr key={p.id}>
                <td>{p.sortOrder}</td>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td>{p.period === 'month' ? '月' : p.period === 'quarter' ? '季' : '年'}</td>
                <td><span className={`admin-badge admin-badge--${p.published ? 'on' : 'off'}`}>{p.published ? '上架' : '下架'}</span></td>
                <td>
                  <Link href={`/admin/plans/${p.id}/edit`} className="admin-btn admin-btn--small admin-btn--secondary">編輯</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
