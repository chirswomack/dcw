import Layout from 'components/Layout';
import Navbar from 'components/Navbar';

import background from '../public/images/404.png';
import Footer from 'components/Footer';

export default function PageNotFound() {
  return (
    <Layout className="pb-0!">
      <div className="flex flex-col items-center w-screen h-screen">
        <Navbar />
        <div
          className="flex h-full w-full bg-[100% 100%] bg-center flex-grow items-center"
          style={{ backgroundImage: `url(${background.src})` }}
        >
          <h1 className="text-3xl font-bold text-white max-w-lg relative left-[12%] px-3">
            Sorry, this page is no longer here.
          </h1>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
