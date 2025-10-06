import { getPosts } from '../utils/mdx-utils';
import { useEffect, useState } from 'react';

import Layout from '../components/Layout';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import hero from '../public/images/home-hero.png';
import Navbar from 'components/Navbar';
import Hero from 'components/Hero';
import Button, { ButtonVariant } from 'components/Button';
import chart from '../public/images/chart.png';
import Link from 'next/link';
import CornerCut, { CornerCutVariant } from 'components/graphics/CornerCut';
import CompassQuarter from 'components/graphics/compass-quarter.svg';
import { IconName } from 'components/icons';
import ServiceBlurb from 'components/ServiceBlurb';
import ctaImage from '../public/images/home-cta.png';
import Credentials from 'components/Credentials';
import Footer from 'components/Footer';
import CtaSection from 'components/CtaSection';
import whyChoose from '../public/images/why-choose.png';

export default function Index({ globalData }) {
  const { width } = useWindowSize();
  const onMobile = width < 520;

  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Navbar />
      <div className="flex flex-col w-screen">
        <Hero src={hero.src} blurbBg="brand-green">
          <p className="text-3xl font-bold">
            <span className="text-white">
              Bringing
              <br />
              clarity to <br />
            </span>
            complex
            <br />
            financial
            <br />
            disputes
          </p>
        </Hero>
        <section className="first-section flex flex-col items-center justify-center w-full relative bg-brand-blue pt-20 pb-40">
          <div className="flex mx-auto gap-x-40 justify-center">
            <div className="w-1/4 mt-32">
              <p className="text-white mb-8">
                At DCW Advisory Group, we simplify financial challenges through
                precise analysis, expert insights, and tailored solutions. From
                divorce and business disputes to complex valuation matters, our
                expertise provides the clarity you need to move forward with
                confidence.
              </p>
              <Link href="/contact">
                <Button variant={ButtonVariant.Primary} className="mt-4">
                  Schedule a Consultation
                </Button>
              </Link>
            </div>
            <div className="w-1/4">
              <img src={chart.src} alt="Bar chart with increasing arrow" />
            </div>
          </div>
          <CornerCut variant={CornerCutVariant.BottomRight} />
        </section>
        <section className="services-section flex flex-col items-center justify-center w-full pt-18 pb-32 z-25 relative">
          <h2 className="text-[50px] font-bold text-center mb-5">
            Our Services
          </h2>
          <p className="text-center max-w-xl">
            We provide expert forensic accounting services to help you resolve
            complex financial disputes.
          </p>
          <div className="grid grid-flow-col md:grid-cols-4 md:grid-flow-row md:items-stretch gap-x-25 max-w-7xl mt-18">
            <ServiceBlurb
              iconName={IconName.Calculator}
              href="/forensic-accounting"
              title="Forensic Accounting"
              description="Investigating financial inconsistencies and providing reliable, unbiased dispute resolution analysis."
            />
            <ServiceBlurb
              iconName={IconName.Bank}
              href="/business-valuation"
              title="Business Valuation"
              description="Providing objective, reliable valuations to support critical business decisions."
            />
            <ServiceBlurb
              iconName={IconName.Collaborative}
              href="/collaborative-divorce"
              title="Collaborative Divorce"
              description="Analyzing financial information to facilitate a transparent client-focused process in marital dissolutions."
            />
            <ServiceBlurb
              iconName={IconName.Gavel}
              href="/litigation-consulting"
              title="Litigation Consulting"
              description="Evidence-based financial analysis and expert guidance. We provide specialized support for shareholder disputes, marital dissolution, and commercial litigation."
            />
          </div>
        </section>
        <section className="why-choose-section w-full flex justify-center bg-light-blue gap-x-40 py-43 relative rounded-t-[40px]">
          <div className="max-w-[492px] mt-32 z-15">
            <img
              src={whyChoose.src}
              alt="Person reviewing charts on tablet and laptop"
            />
          </div>
          <div className="text-white max-w-lg">
            <h3 className="text-xl font-bold mb-9">
              Why choose DCW Advisory Group?
            </h3>
            <h6 className="font-bold">Trusted forensic accounting expertise</h6>
            <p className="mb-8">
              Our team&#39;s meticulous analysis ensures your case is built on
              reliable, expert guidance.
            </p>
            <h6 className="font-bold">Tailored, integrity-driven solutions</h6>
            <p className="mb-8">
              Your situation is unique—our customized approach ensures you
              receive the precise support you need, grounded in professionalism
              and expertise.
            </p>
            <h6 className="font-bold">Professionalism with proven results</h6>
            <p>
              Our dedication to thoroughness and strategic insight has helped
              clients achieve favorable outcomes in even the most complex
              matters.
            </p>
            <Link href="/about">
              <Button variant={ButtonVariant.Primary} className="mt-18">
                About Us
              </Button>
            </Link>
          </div>
          <CompassQuarter
            className="absolute top-[-235px] left-[10%] z-10 w-[712px]"
            fill="white"
          />
          <CornerCut />
        </section>
        <section className="credentials-section flex flex-col items-center justify-center w-full pt-18 pb-32 z-25 relative">
          <h2 className="text-2xl font-bold text-center mb-20 max-w-lg">
            Credentials and Memberships
          </h2>
          <Credentials />
        </section>
        <CtaSection
          imageSrc={ctaImage.src}
          imageAlt="Two people in suits looking at a tablet"
          headerText="Need support navigating a financial conflict?"
          secondaryText="Let DCW Advisory Group assist you in gaining clarity to make informed decisions."
          buttonText="Contact us to schedule a consultation"
          classNames="bg-brand-blue text-white"
        >
          <CornerCut variant={CornerCutVariant.TopRight} />
        </CtaSection>
        <Footer />
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
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
