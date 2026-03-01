import Link from 'next/link';

export async function generateMetadata() {
  return { title: '教師介紹 - 神話韓語' };
}

export default function InstructorPage({ params }) {
  return (
    <main className="page-main">
      <section className="section">
        <div className="container container--narrow">
          <p><Link href="/instructors">← 師資列表</Link></p>
          <div className="instructor-detail">
            <div className="instructor-detail__avatar" />
            <h1 className="page-title">教師姓名（由 API 帶入）</h1>
            <h2>教師背景</h2>
            <p>（由後台提供）</p>
            <h2>授課課程推薦</h2>
            <p><Link href="/courses">課程列表</Link></p>
          </div>
        </div>
      </section>
    </main>
  );
}
