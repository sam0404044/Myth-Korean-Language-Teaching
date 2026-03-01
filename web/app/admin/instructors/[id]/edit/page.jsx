'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function AdminInstructorEditPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id;
  const isNew = id === 'new';
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [bio, setBio] = useState('');
  const [published, setPublished] = useState(true);
  const [loading, setLoading] = useState(!isNew);

  useEffect(() => {
    if (isNew) {
      setLoading(false);
      return;
    }
    import('../../../../../data/instructors').then(({ getInstructorById }) => {
      const i = getInstructorById(id);
      if (i) {
        setName(i.name);
        setTitle(i.title || '');
        setBio(i.bio || '');
        setPublished(i.published !== false);
      }
      setLoading(false);
    }).catch(() => setLoading(false));
  }, [id, isNew]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('已儲存（示範，實際需串接 API）');
    router.push('/admin/instructors');
  };

  if (loading) return <p>載入中…</p>;

  return (
    <>
      <h1 className="admin-page-title">{isNew ? '新增師資' : '編輯師資'}</h1>
      <div className="admin-card">
        <form onSubmit={handleSubmit} className="admin-form">
          <div className="form-row">
            <label>姓名</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="form-row">
            <label>職稱</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="form-row">
            <label>簡介</label>
            <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
          </div>
          <div className="form-row">
            <label><input type="checkbox" checked={published} onChange={(e) => setPublished(e.target.checked)} /> 上架</label>
          </div>
          <div className="admin-actions">
            <button type="submit" className="admin-btn admin-btn--primary">儲存</button>
            <Link href="/admin/instructors" className="admin-btn admin-btn--secondary">取消</Link>
          </div>
        </form>
        <p style={{ marginTop: '12px', fontSize: '0.9rem', color: '#666' }}>頭像上傳、授課課程綁定需串接 API。</p>
      </div>
    </>
  );
}
