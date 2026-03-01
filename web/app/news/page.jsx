import Link from 'next/link';
import { articles } from '../../data/articles';

export const metadata = { title: '最新消息 - 神話韓語' };

export default function NewsPage() {
  return (
    <main className="page-main">
      <section className="section">
        <div className="container">
          <h1 className="page-title section-title--green">最新消息</h1>
          <div className="article-grid">
            {articles.map((a) => (
              <article key={a.id} className="article-card">
                <Link href={`/article/${a.id}`}>
                  <div className="article-placeholder">{a.id}</div>
                  <h3>{a.title}</h3>
                  <p className="article-excerpt">{a.excerpt}</p>
                  <p className="article-meta">{a.date} · {a.category}</p>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
