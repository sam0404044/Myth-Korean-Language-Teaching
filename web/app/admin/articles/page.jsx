import Link from 'next/link';
import { articles } from '../../../data/articles';

export const metadata = { title: '文章管理 - 神話韓語後台' };

export default function AdminArticlesPage() {
  return (
    <>
      <h1 className="admin-page-title">文章管理</h1>
      <p style={{ marginBottom: '20px', color: '#666' }}>新增／編輯／上下架、分類、封面、內容。</p>
      <div className="admin-card">
        <div className="admin-actions" style={{ marginTop: 0, marginBottom: '16px' }}>
          <Link href="/admin/articles/new/edit" className="admin-btn admin-btn--primary">新增文章</Link>
        </div>
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>標題</th>
              <th>分類</th>
              <th>日期</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((a) => (
              <tr key={a.id}>
                <td>{a.id}</td>
                <td>{a.title}</td>
                <td>{a.category}</td>
                <td>{a.date}</td>
                <td>
                  <Link href={`/admin/articles/${a.id}/edit`} className="admin-btn admin-btn--small admin-btn--secondary">編輯</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
