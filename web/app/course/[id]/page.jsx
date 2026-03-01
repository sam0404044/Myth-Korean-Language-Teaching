import Link from 'next/link';

export async function generateMetadata({ params }) {
  return { title: '課程詳情 - 神話韓語' };
}

export default function CourseDetailPage({ params }) {
  return (
    <main className="page-main">
      <section className="section course-detail">
        <div className="container">
          <div className="course-detail__wrap">
            <div className="course-detail__main">
              <div className="course-detail__cover" />
              <h1 className="page-title">課程標題（由 API 帶入）</h1>
              <p className="course-detail__price"><span className="course-detail__price--old">NT$ 2,000</span> NT$ 1,500</p>
              <p className="course-detail__desc">課程介紹（由後台提供）。</p>
            </div>
            <aside className="course-detail__aside">
              <div className="course-detail__card">
                <p className="course-detail__price">NT$ 1,500</p>
                <Link href="/plans" className="btn btn-primary btn--block">馬上購買</Link>
                <button type="button" className="btn btn-outline btn--block">加入購物車</button>
                <Link href="/free-trial" className="btn btn-hero--outline btn--block">試看課程</Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
