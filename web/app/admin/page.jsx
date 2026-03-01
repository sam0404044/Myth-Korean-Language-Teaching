import Link from 'next/link';
import { articles } from '../../data/articles';
import { testimonials } from '../../data/testimonials';

export const metadata = { title: '儀表板 - 神話韓語後台' };

export default function AdminDashboardPage() {
  const featuredCourses = [{ id: 1, title: '課程範例 1' }, { id: 2, title: '課程範例 2' }];
  const showTestimonials = testimonials.slice(0, 3);
  const showArticles = articles.slice(0, 3);

  return (
    <>
      <h1 className="admin-page-title">儀表板</h1>
      <p style={{ marginBottom: '20px', color: '#666' }}>首頁呈現內容的後台設定。</p>

      <div className="admin-card">
        <h2 style={{ margin: '0 0 12px', fontSize: '1.1rem' }}>精選／熱門課程</h2>
        <p style={{ marginBottom: '12px', fontSize: '0.9rem', color: '#666' }}>指定課程與排序（前台首頁輪播）</p>
        <table className="admin-table">
          <thead>
            <tr>
              <th>排序</th>
              <th>課程名稱</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {featuredCourses.map((c, i) => (
              <tr key={c.id}>
                <td>{i + 1}</td>
                <td>{c.title}</td>
                <td><Link href="/admin/courses" className="admin-btn admin-btn--small admin-btn--secondary">編輯設定</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
        <p><Link href="/admin/courses" className="admin-btn admin-btn--primary">前往課程管理</Link></p>
      </div>

      <div className="admin-card">
        <h2 style={{ margin: '0 0 12px', fontSize: '1.1rem' }}>學員見證摘要（首頁顯示）</h2>
        <table className="admin-table">
          <thead>
            <tr>
              <th>姓名</th>
              <th>摘要</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {showTestimonials.map((t) => (
              <tr key={t.id}>
                <td>{t.name}</td>
                <td>{t.quoteShort?.slice(0, 40)}…</td>
                <td><Link href={`/admin/testimonials/${t.id}/edit`} className="admin-btn admin-btn--small admin-btn--secondary">編輯</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
        <p><Link href="/admin/testimonials" className="admin-btn admin-btn--primary">前往學員見證管理</Link></p>
      </div>

      <div className="admin-card">
        <h2 style={{ margin: '0 0 12px', fontSize: '1.1rem' }}>最新文章／公告摘要（首頁顯示）</h2>
        <table className="admin-table">
          <thead>
            <tr>
              <th>標題</th>
              <th>日期</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {showArticles.map((a) => (
              <tr key={a.id}>
                <td>{a.title}</td>
                <td>{a.date}</td>
                <td><Link href={`/admin/articles/${a.id}/edit`} className="admin-btn admin-btn--small admin-btn--secondary">編輯</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
        <p><Link href="/admin/articles" className="admin-btn admin-btn--primary">前往文章管理</Link></p>
      </div>
    </>
  );
}
