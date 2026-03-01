import Link from 'next/link';

export const metadata = { title: '關於我們 - 神話韓語' };

export default function AboutPage() {
  return (
    <main className="page-main">
      <section className="section">
        <div className="container">
          <h1 className="page-title section-title--green">關於我們</h1>
          <div className="about-content">
            <h2>平台理念</h2>
            <p>讓韓語學習成為生活的一部分——戀愛、追星、職涯，神話韓語陪伴你從這裡開始。</p>
            <h2>教學特色</h2>
            <p>（由後台或靜態內容更新。）</p>
            <h2>聯絡資訊</h2>
            <p>@colajp.com · 電話：075507717</p>
          </div>
          <p><Link href="/instructors">師資介紹 →</Link></p>
        </div>
      </section>
    </main>
  );
}
