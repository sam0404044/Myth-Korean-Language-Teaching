'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const plansData = {
  1: { name: '月訂閱', price: 399, period: 'month', description: '每月續訂，可隨時取消', published: true },
  2: { name: '季訂閱', price: 999, period: 'quarter', description: '三個月方案', published: true },
  3: { name: '年訂閱', price: 2999, period: 'year', description: '一年方案最划算', published: true },
};

export default function AdminPlanEditPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id;
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [period, setPeriod] = useState('month');
  const [description, setDescription] = useState('');
  const [published, setPublished] = useState(true);

  useEffect(() => {
    const p = plansData[id];
    if (p) {
      setName(p.name);
      setPrice(String(p.price));
      setPeriod(p.period);
      setDescription(p.description || '');
      setPublished(p.published !== false);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('已儲存（示範，實際需串接 API）');
    router.push('/admin/plans');
  };

  return (
    <>
      <h1 className="admin-page-title">編輯方案</h1>
      <div className="admin-card">
        <form onSubmit={handleSubmit} className="admin-form">
          <div className="form-row">
            <label>方案名稱</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="form-row">
            <label>價格（NT$）</label>
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} min="0" required />
          </div>
          <div className="form-row">
            <label>週期</label>
            <select value={period} onChange={(e) => setPeriod(e.target.value)}>
              <option value="month">月</option>
              <option value="quarter">季</option>
              <option value="year">年</option>
            </select>
          </div>
          <div className="form-row">
            <label>描述</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
          <div className="form-row">
            <label><input type="checkbox" checked={published} onChange={(e) => setPublished(e.target.checked)} /> 上架</label>
          </div>
          <div className="admin-actions">
            <button type="submit" className="admin-btn admin-btn--primary">儲存</button>
            <Link href="/admin/plans" className="admin-btn admin-btn--secondary">取消</Link>
          </div>
        </form>
      </div>
    </>
  );
}
