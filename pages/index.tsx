import { getPosts } from '../utils/mdx-utils';
import { useEffect, useState } from 'react';

import Layout from '../components/Layout';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import background from '../public/images/home-bg.png';
import logo from '../public/images/wordmark.svg';
import logoWhite from '../public/images/wordmark-white.svg';
import Image from 'next/image';

export default function Index({ globalData }) {
  const { width } = useWindowSize();
  const onMobile = width < 520;

  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <div className="h-screen w-screen bg-[100% 100%] bg-center p-6 lg:py-32 lg:px-52 flex flex-col justify-between" style={{ backgroundImage: `url(${background.src})` }}>
        <Image src={onMobile ? logoWhite.src : logo.src} alt="logo" width={300} height={97} />
        <p className="text-7xl font-bold text-white max-w-[500px] leading-[1.04] lg:pl-8">We are currently working on our website</p>
        <footer className="flex flex-col shrink-0 lg:pl-8 min-[1500px]:flex-row min-[1700px]:pr-52 w-full self-end justify-between text-2xl text-white gap-y-6">
          <div className="flex flex-col">
            <h5 className="text-4xl font-bold select-none">Diane L. Womack</h5>
            <p className="font-bold text-brand-green select-none">Managing Director</p>
          </div>
          <div className="flex flex-col">
            <a className="font-bold" href="tel:+14072041367">407.204.1367</a>
            <a className="font-medium" href="mailto:diane@dcwadvisory.com">diane@dcwadvisory.com</a>
          </div>
          <div className="flex flex-col">
            <span className="font-medium">618 E South Street, Suite 110 <br />
              Orlando, Florida 32801</span>
          </div>
        </footer>
      </div>
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
