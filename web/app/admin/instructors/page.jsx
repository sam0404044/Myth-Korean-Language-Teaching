import Link from 'next/link';
import { instructors } from '../../../data/instructors';

export const metadata = { title: '師資管理 - 神話韓語後台' };

export default function AdminInstructorsPage() {
  return (
    <>
      <h1 className="admin-page-title">師資管理</h1>
      <p style={{ marginBottom: '20px', color: '#666' }}>新增／編輯／上下架、頭像、簡介、授課課程綁定、排序。</p>
      <div className="admin-card">
        <div className="admin-actions" style={{ marginTop: 0, marginBottom: '16px' }}>
          <Link href="/admin/instructors/new/edit" className="admin-btn admin-btn--primary">新增師資</Link>
        </div>
        <table className="admin-table">
          <thead>
            <tr>
              <th>排序</th>
              <th>姓名</th>
              <th>職稱</th>
              <th>狀態</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {instructors.map((i) => (
              <tr key={i.id}>
                <td>{i.sortOrder}</td>
                <td>{i.name}</td>
                <td>{i.title}</td>
                <td><span className={`admin-badge admin-badge--${i.published ? 'on' : 'off'}`}>{i.published ? '上架' : '下架'}</span></td>
                <td>
                  <Link href={`/admin/instructors/${i.id}/edit`} className="admin-btn admin-btn--small admin-btn--secondary">編輯</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
