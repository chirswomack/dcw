import Layout from 'components/Layout';
import Navbar from 'components/Navbar';

import background from '../public/images/404.png';
import Footer from 'components/Footer';

export default function PageNotFound() {
    //   const { width } = useWindowSize();
    //   const onMobile = width < 520;

    return (
        <Layout>
            <div className="flex flex-col items-center w-screen h-screen">
                <Navbar />
                <div className="h-full w-full bg-[100% 100%] bg-center flex-grow" style={{ backgroundImage: `url(${background.src})` }} />
                <Footer />
            </div>
        </Layout>
    );
}