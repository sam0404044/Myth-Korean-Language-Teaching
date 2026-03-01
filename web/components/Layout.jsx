import Header from './Header';
import Footer from './Footer';
import ModalLegal from './ModalLegal';

export default function Layout({ children }) {
  return (
    <>
      <div className="layout-wrap">
        <Header />
        <main className="layout-main">{children}</main>
        <a href="/courses" className="float-trial-btn">點我試聽</a>
        <Footer />
      </div>
      <ModalLegal />
    </>
  );
}
