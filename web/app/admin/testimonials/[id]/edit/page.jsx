'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function AdminTestimonialEditPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id;
  const isNew = id === 'new';
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [industry, setIndustry] = useState('');
  const [quote, setQuote] = useState('');
  const [quoteShort, setQuoteShort] = useState('');
  const [courseRecommend, setCourseRecommend] = useState('');
  const [loading, setLoading] = useState(!isNew);

  useEffect(() => {
    if (isNew) {
      setLoading(false);
      return;
    }
    import('../../../../../data/testimonials').then(({ getTestimonialById }) => {
      const t = getTestimonialById(id);
      if (t) {
        setName(t.name);
        setRole(t.role || '');
        setIndustry(t.industry || '');
        setQuote(t.quote || '');
        setQuoteShort(t.quoteShort || '');
        setCourseRecommend(t.courseRecommend || '');
      }
      setLoading(false);
    }).catch(() => setLoading(false));
  }, [id, isNew]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('已儲存（示範，實際需串接 API）');
    router.push('/admin/testimonials');
  };

  if (loading) return <p>載入中…</p>;

  return (
    <>
      <h1 className="admin-page-title">{isNew ? '新增學員見證' : '編輯學員見證'}</h1>
      <div className="admin-card">
        <form onSubmit={handleSubmit} className="admin-form">
          <div className="form-row">
            <label>姓名</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="form-row">
            <label>身份（職稱）</label>
            <input type="text" value={role} onChange={(e) => setRole(e.target.value)} placeholder="上班族、學生..." />
          </div>
          <div className="form-row">
            <label>行業</label>
            <input type="text" value={industry} onChange={(e) => setIndustry(e.target.value)} placeholder="科技業、設計..." />
          </div>
          <div className="form-row">
            <label>見證全文</label>
            <textarea value={quote} onChange={(e) => setQuote(e.target.value)} rows={4} />
          </div>
          <div className="form-row">
            <label>摘要（列表／首頁用）</label>
            <textarea value={quoteShort} onChange={(e) => setQuoteShort(e.target.value)} rows={2} />
          </div>
          <div className="form-row">
            <label>推薦課程</label>
            <input type="text" value={courseRecommend} onChange={(e) => setCourseRecommend(e.target.value)} placeholder="入門發音、會話入門..." />
          </div>
          <div className="admin-actions">
            <button type="submit" className="admin-btn admin-btn--primary">儲存</button>
            <Link href="/admin/testimonials" className="admin-btn admin-btn--secondary">取消</Link>
          </div>
        </form>
        <p style={{ marginTop: '12px', fontSize: '0.9rem', color: '#666' }}>頭像上傳、顯示於首頁摘要需串接 API。</p>
      </div>
    </>
  );
}
