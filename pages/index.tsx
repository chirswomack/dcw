import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import background from '../public/images/home-bg.png';
import logo from '../public/images/wordmark.svg';
import Image from 'next/image';

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <div className="h-screen w-screen bg-[100% 100%] bg-center p-6 lg:py-32 lg:px-52 flex flex-col justify-between" style={{ backgroundImage: `url(${background.src})` }}>
        <Image src={logo.src} alt="logo" width={300} height={97} />
        <footer className="flex flex-col shrink-0 lg:pl-8 min-[1500px]:flex-row min-[1700px]:pr-52 w-full self-end justify-between text-2xl text-white gap-y-6">
          <div className="flex flex-col">
            <h5 className="text-4xl font-bold">Diane L. Womack</h5>
            <p className="font-bold text-brand-green">Managing Director</p>
          </div>
          <div className="flex flex-col">
            <h6 className="font-bold">407.204.1367</h6>
            <p className="font-medium">diane@dcwadvisory.com</p>
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
