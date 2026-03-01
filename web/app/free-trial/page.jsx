import Link from 'next/link';

export const metadata = { title: '免費體驗 - 神話韓語' };

export default function FreeTrialPage() {
  return (
    <main className="page-main">
      <section className="section section--pastel">
        <div className="container">
          <h1 className="page-title section-title--green">免費體驗（試看課程）</h1>
          <div className="course-grid">
            <article className="course-card">
              <Link href="/course-play?trial=1" className="course-card__link">
                <div className="course-card__img" />
                <div className="course-card__body">
                  <h3 className="course-card__title">試看課程 1</h3>
                  <span className="course-card__badge">試看</span>
                  <button type="button" className="btn btn-outline btn--small">試看</button>
                </div>
              </Link>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
