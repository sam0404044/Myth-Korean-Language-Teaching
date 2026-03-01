import Link from 'next/link';

export const metadata = { title: '課程播放 - 神話韓語' };

export default function CoursePlayPage() {
  return (
    <main className="page-main">
      <section className="section course-play">
        <div className="container">
          <p><Link href="/member#my-courses">← 返回我的課程</Link></p>
          <div className="course-play__player">
            <div className="course-play__video-wrap">
              <p className="course-play__placeholder">影片播放器（Mux）需串接</p>
            </div>
            <aside className="course-play__chapters">
              <h3>章節清單</h3>
              <p>（章節由 API 提供）</p>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
