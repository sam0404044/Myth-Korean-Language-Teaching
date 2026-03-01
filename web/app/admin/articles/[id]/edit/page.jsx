'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function AdminArticleEditPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id;
  const isNew = id === 'new';
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(!isNew);

  useEffect(() => {
    if (isNew) {
      setDate(new Date().toISOString().slice(0, 10));
      setLoading(false);
      return;
    }
    import('../../../../../data/articles').then(({ getArticleById }) => {
      const a = getArticleById(id);
      if (a) {
        setTitle(a.title);
        setExcerpt(a.excerpt || '');
        setDate(a.date || '');
        setCategory(a.category || '');
        setContent(a.content?.trim() || '');
      }
      setLoading(false);
    }).catch(() => setLoading(false));
  }, [id, isNew]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('已儲存（示範，實際需串接 API）');
    if (isNew) router.push('/admin/articles');
    else router.push('/admin/articles');
  };

  if (loading) return <p>載入中…</p>;

  return (
    <>
      <h1 className="admin-page-title">{isNew ? '新增文章' : '編輯文章'}</h1>
      <div className="admin-card">
        <form onSubmit={handleSubmit} className="admin-form">
          <div className="form-row">
            <label>標題</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div className="form-row">
            <label>摘要</label>
            <textarea value={excerpt} onChange={(e) => setExcerpt(e.target.value)} rows={2} />
          </div>
          <div className="form-row">
            <label>日期</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </div>
          <div className="form-row">
            <label>分類</label>
            <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="學習筆記、公告..." />
          </div>
          <div className="form-row">
            <label>內容（HTML）</label>
            <textarea value={content} onChange={(e) => setContent(e.target.value)} rows={10} style={{ fontFamily: 'monospace' }} />
          </div>
          <div className="admin-actions">
            <button type="submit" className="admin-btn admin-btn--primary">儲存</button>
            <Link href="/admin/articles" className="admin-btn admin-btn--secondary">取消</Link>
          </div>
        </form>
      </div>
    </>
  );
}
