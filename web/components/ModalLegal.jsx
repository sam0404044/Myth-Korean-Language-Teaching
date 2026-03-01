'use client';

import { useEffect } from 'react';

export default function ModalLegal() {
  useEffect(() => {
    const modal = document.getElementById('modal-legal');
    const openBtn = document.querySelector('[data-modal="legal"]');
    const closeBtn = modal?.querySelector('.modal-close');
    const backdrop = modal?.querySelector('.modal-backdrop');

    function open() {
      if (!modal) return;
      modal.removeAttribute('hidden');
      document.body.style.overflow = 'hidden';
    }
    function close() {
      if (!modal) return;
      modal.setAttribute('hidden', '');
      document.body.style.overflow = '';
    }

    openBtn?.addEventListener('click', (e) => { e.preventDefault(); open(); });
    closeBtn?.addEventListener('click', close);
    backdrop?.addEventListener('click', close);

    const onKey = (e) => {
      if (e.key === 'Escape' && modal && !modal.hasAttribute('hidden')) close();
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <div
      id="modal-legal"
      className="modal"
      role="dialog"
      aria-labelledby="modal-legal-title"
      aria-modal="true"
      hidden
    >
      <div className="modal-backdrop" />
      <div className="modal-content">
        <div className="modal-header">
          <h2 id="modal-legal-title">服務使用條款及隱私權聲明</h2>
          <button type="button" className="modal-close" aria-label="關閉">×</button>
        </div>
        <div className="modal-body">
          <nav className="legal-nav">
            <a href="#terms">網站服務使用條款</a>
            <a href="#privacy">隱私權政策</a>
            <a href="#trade">用戶交易條款</a>
            <a href="#refund">退費及退換貨須知</a>
          </nav>
          <div className="legal-content">
            <p>此處可放置各條款內容，或連結至獨立頁面。</p>
          </div>
        </div>
      </div>
    </div>
  );
}
