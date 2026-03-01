'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const courseCategories = [
  { value: 'beginner', label: '入門' },
  { value: 'grammar', label: '文法' },
  { value: 'speaking', label: '會話' },
  { value: 'exam', label: '檢定' },
];

export default function AdminCourseEditPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id;
  const isNew = id === 'new';
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [priceOriginal, setPriceOriginal] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('beginner');
  const [published, setPublished] = useState(true);
  const [hasTrial, setHasTrial] = useState(false);
  const [loading, setLoading] = useState(!isNew);

  useEffect(() => {
    if (isNew) return;
    fetch(`/api/admin/courses/${id}`).catch(() => {}).then((r) => r?.json?.()).then((d) => {
      if (d) {
        setTitle(d.title || '');
        setPrice(String(d.price ?? ''));
        setPriceOriginal(d.priceOriginal ? String(d.priceOriginal) : '');
        setDescription(d.description || '');
        setCategory(d.category || 'beginner');
        setPublished(d.published !== false);
        setHasTrial(d.hasTrial === true);
      } else {
        const mock = { 1: { title: '課程範例 1', price: 1500, priceOriginal: 2000, description: '入門發音與基礎會話', category: 'beginner', published: true, hasTrial: true }, 2: { title: '課程範例 2', price: 1800, description: '文法與閱讀', category: 'grammar', published: true, hasTrial: false } };
        const c = mock[id];
        if (c) {
          setTitle(c.title);
          setPrice(String(c.price));
          setPriceOriginal(c.priceOriginal ? String(c.priceOriginal) : '');
          setDescription(c.description || '');
          setCategory(c.category || 'beginner');
          setPublished(c.published !== false);
          setHasTrial(c.hasTrial === true);
        }
      }
      setLoading(false);
    }).catch(() => setLoading(false));
  }, [id, isNew]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('已儲存（示範，實際需串接 API）');
    if (isNew) router.push('/admin/courses');
  };

  if (loading && !isNew) return <p>載入中…</p>;

  return (
    <>
      <h1 className="admin-page-title">{isNew ? '新增課程' : '編輯課程'}</h1>
      <div className="admin-card">
        <form onSubmit={handleSubmit} className="admin-form">
          <div className="form-row">
            <label>課程標題</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div className="form-row">
            <label>售價（NT$）</label>
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} min="0" required />
          </div>
          <div className="form-row">
            <label>原價（NT$，選填）</label>
            <input type="number" value={priceOriginal} onChange={(e) => setPriceOriginal(e.target.value)} min="0" />
          </div>
          <div className="form-row">
            <label>簡介</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
          <div className="form-row">
            <label>分類</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              {courseCategories.map((cat) => (
                <option key={cat.value} value={cat.value}>{cat.label}</option>
              ))}
            </select>
          </div>
          <div className="form-row">
            <label><input type="checkbox" checked={published} onChange={(e) => setPublished(e.target.checked)} /> 上架</label>
          </div>
          <div className="form-row">
            <label><input type="checkbox" checked={hasTrial} onChange={(e) => setHasTrial(e.target.checked)} /> 提供試聽</label>
          </div>
          <div className="admin-actions">
            <button type="submit" className="admin-btn admin-btn--primary">儲存</button>
            <Link href="/admin/courses" className="admin-btn admin-btn--secondary">取消</Link>
          </div>
        </form>
        {!isNew && (
          <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid #eee' }}>
            <h3 style={{ marginBottom: '12px', fontSize: '1rem' }}>章節／單元管理</h3>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>新增／編輯／排序章節，綁定 Mux 影片（Playback ID）。實際需串接 API 與 Mux。</p>
            <button type="button" className="admin-btn admin-btn--secondary" onClick={() => alert('章節管理需串接 API')}>新增章節</button>
          </div>
        )}
      </div>
    </>
  );
}
