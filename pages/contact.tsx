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
        <Hero src={hero.src} blurbBg="brand-green" backgroundPositionX="78%">
          <h1 className="text-[31px] md:text-3xl font-bold text-white w-[125%]">
            <span className="text-brand-blue">Thank you </span>for
            <br className="hidden md:block" /> your interest in
            <br />
            DCW Advisory
            <br />
            Group
          </h1>
        </Hero>
        <section className="flex flex-col items-center justify-center pt-55 pb-22 md:pt-38 md:pb-44 px-6">
          <div className="flex flex-col w-full md:max-w-6xl bg-brand-blue rounded-[40px] relative pt-19 pb-28 px-10 md:px-38">
            <Compass className="absolute top-0 right-0 z-50 size-21 -translate-x-9 md:-translate-x-full -translate-y-1/2 md:size-30 fill-brand-green" />
            <p className="text-white font-bold md:max-w-lg mb-16">
              Please fill out the form below, and we&#39;ll be in touch as soon
              as possible. We look forward to assisting you.
            </p>
            <form
              className="flex flex-col gap-y-8 md:max-w-4xl"
              name="contact"
              method="POST"
              data-netlify="true"
            >
              <input
                type="text"
                name="full-name"
                className="bg-white placeholder:uppercase placeholder:text-[#a9a9a9] pl-8 py-4 rounded-[10px]"
                placeholder="Full name"
              />
              <input
                type="phone"
                name="phone-number"
                className="bg-white placeholder:uppercase placeholder:text-[#a9a9a9] pl-8 py-4 rounded-[10px]"
                placeholder="Phone number"
              />
              <input
                type="email"
                name="email"
                className="bg-white placeholder:uppercase placeholder:text-[#a9a9a9] pl-8 py-4 rounded-[10px]"
                placeholder="Email"
              />
              <textarea
                name="message"
                className="bg-white uppercase placeholder:text-[#a9a9a9] pl-8 py-4 rounded-[10px] h-[250px] resize-none"
                placeholder="Message"
              />
              <Button variant={ButtonVariant.Primary} className="self-end">
                Submit
              </Button>
            </form>
            <CompassNeedle className="absolute top-0 left-0 -z-1 h-30 -translate-x-4 translate-y-7 md:-translate-x-16 md:translate-y-20 md:h-[250px] fill-brand-green" />
            <CompassQuarter className="absolute bottom-0 right-0 -z-1 h-53 -rotate-90 -translate-x-3 translate-y-2/9 md:translate-x-22 md:translate-y-1/5 md:h-[688px] fill-brand-green" />
            <CornerCut />
          </div>
        </section>
        <Footer />
      </div>
    </Layout>
  );
}
