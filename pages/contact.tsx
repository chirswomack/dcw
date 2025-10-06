import Footer from 'components/Footer';
import Hero from 'components/Hero';
import Layout from 'components/Layout';
import Navbar from 'components/Navbar';

import hero from '../public/images/contact-hero.png';
import CornerCut from 'components/graphics/CornerCut';
import Button, { ButtonVariant } from 'components/Button';
import Compass from 'components/graphics/compass.svg';
import CompassQuarter from 'components/graphics/compass-quarter.svg';
import CompassNeedle from 'components/graphics/compass-needle.svg';

export default function Contact() {
  return (
    <Layout>
      <Navbar activeRoute="/contact" />
      <div className="flex flex-col w-screen">
        <Hero src={hero.src} blurbBg="brand-green">
          <h1 className="text-3xl font-bold text-white">
            <span className="text-brand-blue">Thank you </span>for
            <br />
            your interest in
            <br />
            DCW Advisory
            <br />
            Group
          </h1>
        </Hero>
        <section className="flex flex-col items-center justify-center pt-38 pb-44">
          <div className="flex flex-col max-w-6xl bg-brand-blue rounded-[40px] relative pt-19 pb-28 px-38">
            <Compass className="absolute top-0 right-0 z-50 -translate-x-full -translate-y-1/2 size-30 fill-brand-green" />
            <p className="text-white font-bold max-w-lg mb-16">
              Please fill out the form below, and we&#39;ll be in touch as soon
              as possible. We look forward to assisting you.
            </p>
            <form className="flex flex-col gap-y-8 w-4xl">
              <input
                type="text"
                className="bg-white placeholder:uppercase placeholder:text-[#a9a9a9] pl-8 py-4 rounded-[10px]"
                placeholder="Full name"
              />
              <input
                type="phone"
                className="bg-white placeholder:uppercase placeholder:text-[#a9a9a9] pl-8 py-4 rounded-[10px]"
                placeholder="Phone number"
              />
              <input
                type="email"
                className="bg-white placeholder:uppercase placeholder:text-[#a9a9a9] pl-8 py-4 rounded-[10px]"
                placeholder="Email"
              />
              <textarea
                className="bg-white uppercase placeholder:text-[#a9a9a9] pl-8 py-4 rounded-[10px] h-[250px] resize-none"
                placeholder="Message"
              />
              <Button variant={ButtonVariant.Primary} className="self-end">
                Submit
              </Button>
            </form>
            <CompassNeedle className="absolute top-0 left-0 -z-1 -translate-x-16 translate-y-20 h-[250px] fill-brand-green" />
            <CompassQuarter className="absolute bottom-0 right-0 -z-1 -rotate-90 translate-x-22 translate-y-1/5 h-[688px] fill-brand-green" />
            <CornerCut />
          </div>
        </section>
        <Footer />
      </div>
    </Layout>
  );
}
