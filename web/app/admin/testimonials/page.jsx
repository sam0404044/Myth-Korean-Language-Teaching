import Link from 'next/link';
import { testimonials } from '../../../data/testimonials';

export const metadata = { title: '學員見證管理 - 神話韓語後台' };

export default function AdminTestimonialsPage() {
  return (
    <>
      <h1 className="admin-page-title">學員見證管理</h1>
      <p style={{ marginBottom: '20px', color: '#666' }}>新增／編輯／上下架、見證類型、顯示位置（首頁摘要）。</p>
      <div className="admin-card">
        <div className="admin-actions" style={{ marginTop: 0, marginBottom: '16px' }}>
          <Link href="/admin/testimonials/new/edit" className="admin-btn admin-btn--primary">新增見證</Link>
        </div>
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>姓名</th>
              <th>身份</th>
              <th>摘要</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {testimonials.map((t) => (
              <tr key={t.id}>
                <td>{t.id}</td>
                <td>{t.name}</td>
                <td>{t.role} · {t.industry}</td>
                <td>{t.quoteShort?.slice(0, 50)}…</td>
                <td>
                  <Link href={`/admin/testimonials/${t.id}/edit`} className="admin-btn admin-btn--small admin-btn--secondary">編輯</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
