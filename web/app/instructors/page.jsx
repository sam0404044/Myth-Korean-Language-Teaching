import Link from 'next/link';

export const metadata = { title: '師資介紹 - 神話韓語' };

export default function InstructorsPage() {
  return (
    <main className="page-main">
      <section className="section">
        <div className="container">
          <h1 className="page-title section-title--green">師資介紹</h1>
          <div className="instructor-grid">
            <article className="instructor-card">
              <Link href="/instructor/1"><div className="instructor-card__avatar" /><h3>教師姓名 1</h3><p>簡介（由後台提供）</p></Link>
            </article>
            <article className="instructor-card">
              <Link href="/instructor/2"><div className="instructor-card__avatar" /><h3>教師姓名 2</h3><p>簡介（由後台提供）</p></Link>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
