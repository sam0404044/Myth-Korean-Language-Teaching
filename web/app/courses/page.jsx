import Link from 'next/link';

export const metadata = {
  title: '課程列表 - 神話韓語',
};

export default function CoursesPage() {
  return (
    <main className="page-main">
      <section className="section section--pastel">
        <div className="container">
          <h1 className="page-title section-title--green">課程列表</h1>
          <p className="section-desc">分類：發音 / 初級 / 中級 / 高級 / 主題課程（由後台或 API 提供）</p>
          <div className="course-category-grid">
            <Link href="/courses?cat=beginner" className="course-category-card course-category-card--coral">
              <div className="course-category-card__img" />
              <span className="course-category-card__label">入門</span>
            </Link>
            <Link href="/courses?cat=grammar" className="course-category-card course-category-card--purple">
              <div className="course-category-card__img" />
              <span className="course-category-card__label">文法</span>
            </Link>
            <Link href="/courses?cat=speaking" className="course-category-card course-category-card--peach">
              <div className="course-category-card__img" />
              <span className="course-category-card__label">會話</span>
            </Link>
            <Link href="/courses?cat=exam" className="course-category-card course-category-card--mint">
              <div className="course-category-card__img" />
              <span className="course-category-card__label">檢定</span>
            </Link>
          </div>
          <div className="course-grid">
            <article className="course-card">
              <Link href="/course/1" className="course-card__link">
                <div className="course-card__img" />
                <div className="course-card__body">
                  <h3 className="course-card__title">課程範例 1</h3>
                  <p className="course-card__price"><span className="course-card__price--old">NT$ 2,000</span> NT$ 1,500</p>
                  <button type="button" className="btn btn-primary btn--small">加入購物車</button>
                </div>
              </Link>
            </article>
            <article className="course-card">
              <Link href="/course/2" className="course-card__link">
                <div className="course-card__img" />
                <div className="course-card__body">
                  <h3 className="course-card__title">課程範例 2</h3>
                  <p className="course-card__price">NT$ 1,800</p>
                  <button type="button" className="btn btn-primary btn--small">加入購物車</button>
                </div>
              </Link>
            </article>
          </div>
          <p className="section-hint">課程卡片資料需由後台/API 取得並套版。</p>
        </div>
      </section>
    </main>
  );
}
