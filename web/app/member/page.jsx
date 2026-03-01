'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const PANELS = [
  { id: 'my-courses', label: '我的課程' },
  { id: 'watch-history', label: '觀看紀錄' },
  { id: 'account', label: '帳號設定' },
  { id: 'orders', label: '購買紀錄' },
  { id: 'coins', label: '神話幣' },
  { id: 'scores', label: '測驗成績' },
];

export default function MemberPage() {
  const [panel, setPanel] = useState(() => (typeof window !== 'undefined' ? (window.location.hash?.slice(1) || 'my-courses') : 'my-courses'));

  useEffect(() => {
    setPanel(window.location.hash?.slice(1) || 'my-courses');
  }, []);

  const show = (id) => {
    setPanel(id);
    if (typeof window !== 'undefined') window.history.replaceState(null, '', '#' + id);
  };

  return (
    <main className="page-main page-main--member">
      <section className="section section--member">
        <div className="member-layout">
          <nav className="member-sidebar" aria-label="會員中心導覽">
            <h2 className="member-sidebar__title">會員中心</h2>
            <ul className="member-sidebar__list">
              {PANELS.map(({ id, label }) => (
                <li key={id}>
                  <a href={`#${id}`} className={`member-sidebar__link ${panel === id ? 'is-active' : ''}`} data-panel={id} onClick={(e) => { e.preventDefault(); show(id); }}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="member-content">
            <div id="my-courses" className={`member-block ${panel === 'my-courses' ? 'is-visible' : ''}`}>
              <h2>我的課程</h2>
              <p>已解鎖 / 可觀看課程。（由 API 提供）</p>
              <p><Link href="/course-play" className="btn btn-primary btn--small">進入播放</Link></p>
            </div>
            <div id="watch-history" className={`member-block ${panel === 'watch-history' ? 'is-visible' : ''}`}>
              <h2>觀看紀錄</h2>
              <p>最近觀看、續播。（由 API 提供）</p>
            </div>
            <div id="account" className={`member-block ${panel === 'account' ? 'is-visible' : ''}`}>
              <h2>帳號設定</h2>
              <form className="auth-form">
                <div className="form-group"><label>姓名</label><input type="text" name="name" /></div>
                <div className="form-group"><label>電子郵件</label><input type="email" name="email" /></div>
                <button type="submit" className="btn btn-primary">儲存</button>
              </form>
            </div>
            <div id="orders" className={`member-block ${panel === 'orders' ? 'is-visible' : ''}`}>
              <h2>購買紀錄</h2>
              <p>訂單列表由 API 提供。</p>
            </div>
            <div id="coins" className={`member-block ${panel === 'coins' ? 'is-visible' : ''}`}>
              <h2>神話幣</h2>
              <p className="member-coins">目前神話幣：0（由 API 提供）</p>
            </div>
            <div id="scores" className={`member-block ${panel === 'scores' ? 'is-visible' : ''}`}>
              <h2>測驗成績</h2>
              <p>由 API 提供。</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
