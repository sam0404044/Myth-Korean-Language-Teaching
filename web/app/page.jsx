import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <section className="hero hero-kolanee">
        <picture className="hero-bg">
          <source
            media="(max-width: 768px)"
            srcSet="/assets/images/hero/hero-kdog-landing-mobile.png"
          />
          <img
            src="/assets/images/hero/hero-kdog-landing-desktop.png"
            alt=""
            width={1920}
            height={1080}
          />
        </picture>
        <div className="hero-overlay hero-overlay--light">
          <h1>神話韓語 <span style={{ color: 'red' }}>!</span></h1>
          <p>與韓語一起，從這裡開始</p>
          <div className="hero-cta">
            <Link href="/news" className="btn btn-hero">最新消息</Link>
            <Link href="/courses" className="btn btn-hero btn-hero--outline">課程列表</Link>
          </div>
        </div>
      </section>

      <section className="section section-courses section--pastel" id="courses">
        <div className="container">
          <h2 className="section-title section-title--green">精選課程</h2>
          <div className="course-category-grid">
            <Link href="/courses?cat=beginner" className="course-category-card course-category-card--coral">
              <div className="course-category-card__img" style={{ backgroundImage: "url('/assets/images/courses/beginner.png')" }} />
              <span className="course-category-card__label">入門</span>
            </Link>
            <Link href="/courses?cat=grammar" className="course-category-card course-category-card--purple">
              <div className="course-category-card__img" style={{ backgroundImage: "url('/assets/images/courses/grammar.png')" }} />
              <span className="course-category-card__label">文法</span>
            </Link>
            <Link href="/courses?cat=speaking" className="course-category-card course-category-card--peach">
              <div className="course-category-card__img" style={{ backgroundImage: "url('/assets/images/courses/speaking.png')" }} />
              <span className="course-category-card__label">會話</span>
            </Link>
            <Link href="/courses?cat=exam" className="course-category-card course-category-card--mint">
              <div className="course-category-card__img" style={{ backgroundImage: "url('/assets/images/courses/exam.png')" }} />
              <span className="course-category-card__label">檢定</span>
            </Link>
          </div>
          <div className="course-grid">
            <article className="course-card"><div className="course-placeholder">熱門課程 1</div></article>
            <article className="course-card"><div className="course-placeholder">熱門課程 2</div></article>
            <article className="course-card"><div className="course-placeholder">熱門課程 3</div></article>
          </div>
        </div>
      </section>

      <section className="section section-news" id="news">
        <div className="container">
          <Link href="/news" className="news-card">
            <div className="news-card__text">
              <h2 className="section-title section-title--green section-title--left">最新消息</h2>
              <p className="news-card__sub">最近的心動 · FB / IG 文章</p>
              <span className="btn btn-outline btn--small">看更多</span>
            </div>
            <div className="news-card__illus" style={{ backgroundImage: "url('/assets/images/content/news.png')" }} />
          </Link>
        </div>
      </section>

      <section className="section section-testimonials section--pastel" id="testimonials">
        <div className="container">
          <h2 className="section-title section-title--green">學員見證</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <div className="testimonial-card__avatar" style={{ backgroundImage: "url('/assets/images/testimonials/avatar-01.png')" }} />
              <p>學員見證 1</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-card__avatar" style={{ backgroundImage: "url('/assets/images/testimonials/avatar-02.png')" }} />
              <p>學員見證 2</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-card__avatar" style={{ backgroundImage: "url('/assets/images/testimonials/avatar-03.png')" }} />
              <p>學員見證 3</p>
            </div>
          </div>
          <Link href="/testimonials" className="btn btn-outline btn--green">更多見證</Link>
        </div>
      </section>
    </main>
  );
}
