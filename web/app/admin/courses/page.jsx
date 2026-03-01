import Link from 'next/link';
import { courses } from '../../../data/courses';

export const metadata = { title: '課程管理 - 神話韓語後台' };

export default function AdminCoursesPage() {
  return (
    <>
      <h1 className="admin-page-title">課程管理</h1>
      <p style={{ marginBottom: '20px', color: '#666' }}>新增／編輯／刪除、上下架、排序、試聽設定。章節與單元在編輯頁中管理。</p>
      <div className="admin-card">
        <div className="admin-actions" style={{ marginTop: 0, marginBottom: '16px' }}>
          <Link href="/admin/courses/new/edit" className="admin-btn admin-btn--primary">新增課程</Link>
        </div>
        <table className="admin-table">
          <thead>
            <tr>
              <th>排序</th>
              <th>課程名稱</th>
              <th>價格</th>
              <th>分類</th>
              <th>狀態</th>
              <th>試聽</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((c) => (
              <tr key={c.id}>
                <td>{c.sortOrder}</td>
                <td>{c.title}</td>
                <td>NT$ {c.price}{c.priceOriginal ? `（原價 ${c.priceOriginal}）` : ''}</td>
                <td>{c.category}</td>
                <td><span className={`admin-badge admin-badge--${c.published ? 'on' : 'off'}`}>{c.published ? '上架' : '下架'}</span></td>
                <td>{c.hasTrial ? '是' : '否'}</td>
                <td>
                  <Link href={`/admin/courses/${c.id}/edit`} className="admin-btn admin-btn--small admin-btn--secondary">編輯</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
