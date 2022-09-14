import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const layout = () => {
  return (
    <>
      <Header />
      <div>
        <main>
          <Outlet/>
          <Footer/>
        </main>
      </div>
    </>
  );
};

export default layout;
