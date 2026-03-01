(function () {
  'use strict';

  // ===== 狀態：是否已登入（可改為從 API / localStorage 讀取）
  let isLoggedIn = false;

  // ===== DOM 節點
  const navBeforeLogin = document.querySelector('.nav-before-login');
  const navAfterLogin = document.querySelector('.nav-after-login');
  const memberNameBtn = document.querySelector('.member-name-btn');
  const memberDropdown = document.querySelector('.member-dropdown');
  const featuredTrack = document.querySelector('.featured-track');
  const carouselPrev = document.querySelector('.carousel-prev');
  const carouselNext = document.querySelector('.carousel-next');
  const legalModal = document.getElementById('modal-legal');
  const legalOpenBtn = document.querySelector('[data-modal="legal"]');
  const legalCloseBtn = legalModal?.querySelector('.modal-close');
  const legalBackdrop = legalModal?.querySelector('.modal-backdrop');

  // ===== 登入狀態切換
  function renderNavByLogin() {
    if (isLoggedIn) {
      navBeforeLogin?.classList.add('is-hidden');
      navAfterLogin?.classList.remove('is-hidden');
    } else {
      navBeforeLogin?.classList.remove('is-hidden');
      navAfterLogin?.classList.add('is-hidden');
    }
  }

  function openMemberDropdown() {
    if (!memberDropdown) return;
    memberDropdown.classList.add('is-open');
    memberNameBtn?.setAttribute('aria-expanded', 'true');
  }

  function closeMemberDropdown() {
    if (!memberDropdown) return;
    memberDropdown.classList.remove('is-open');
    memberNameBtn?.setAttribute('aria-expanded', 'false');
  }

  if (memberNameBtn && memberDropdown) {
    memberNameBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      const open = memberDropdown.classList.toggle('is-open');
      memberNameBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('click', function () {
      closeMemberDropdown();
    });
    memberDropdown.addEventListener('click', function (e) {
      e.stopPropagation();
    });
  }

  renderNavByLogin();

  // ===== 精選課程輪播（前後按鈕）
  if (featuredTrack && (carouselPrev || carouselNext)) {
    const slides = featuredTrack.querySelectorAll('.featured-slide');
    const total = slides.length;
    let featuredIndex = 0;
    const maxIndex = Math.max(0, total - 5); // 一次顯示約 5 個，可依 RWD 調整

    function updateFeaturedCarousel() {
      const slideWidth = slides[0]?.offsetWidth || 200;
      const gap = 20;
      const offset = -(featuredIndex * (slideWidth + gap));
      featuredTrack.style.transform = 'translateX(' + offset + 'px)';
    }

    if (carouselPrev) {
      carouselPrev.addEventListener('click', function () {
        featuredIndex = Math.max(0, featuredIndex - 1);
        updateFeaturedCarousel();
      });
    }
    if (carouselNext) {
      carouselNext.addEventListener('click', function () {
        featuredIndex = Math.min(maxIndex, featuredIndex + 1);
        updateFeaturedCarousel();
      });
    }

    window.addEventListener('resize', updateFeaturedCarousel);
    updateFeaturedCarousel();
  }

  // ===== 條款／隱私權彈窗
  function openModal(modalEl) {
    if (!modalEl) return;
    modalEl.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modalEl) {
    if (!modalEl) return;
    modalEl.setAttribute('hidden', '');
    document.body.style.overflow = '';
  }

  if (legalOpenBtn && legalModal) {
    legalOpenBtn.addEventListener('click', function (e) {
      e.preventDefault();
      openModal(legalModal);
    });
  }
  if (legalCloseBtn && legalModal) {
    legalCloseBtn.addEventListener('click', function () {
      closeModal(legalModal);
    });
  }
  if (legalBackdrop && legalModal) {
    legalBackdrop.addEventListener('click', function () {
      closeModal(legalModal);
    });
  }

  // ESC 關閉彈窗
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && legalModal && !legalModal.hasAttribute('hidden')) {
      closeModal(legalModal);
    }
  });

  // ===== 行動版選單（可選：需在 HTML 加上對應結構可展開的選單）
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('.nav-menu');
  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', function () {
      navMenu.classList.toggle('is-open-mobile');
    });
  }
})();
