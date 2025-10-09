import Footer from 'components/Footer';
import Hero from 'components/Hero';
import Layout from 'components/Layout';
import Navbar from 'components/Navbar';

import hero from '../public/images/contact-hero.png';
import CornerCut from 'components/graphics/CornerCut';
import Compass from 'components/graphics/compass.svg';
import CompassQuarter from 'components/graphics/compass-quarter.svg';
import CompassNeedle from 'components/graphics/compass-needle.svg';
import ContactForm from 'components/ContactForm';
import { useState } from 'react';
import classNames from 'clsx';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

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
          <div
            className={classNames(
              'flex flex-col w-full md:max-w-6xl bg-brand-blue',
              'rounded-[40px] relative pt-19 pb-28 px-10 md:px-38',
              formSubmitted && 'h-175 justify-center'
            )}
          >
            <Compass className="absolute top-0 right-0 z-50 size-21 -translate-x-9 md:-translate-x-full -translate-y-1/2 md:size-30 fill-brand-green" />
            {!formSubmitted && (
              <>
                <p className="text-white font-bold md:max-w-lg mb-16">
                  Please fill out the form below, and we&#39;ll be in touch as
                  soon as possible. We look forward to assisting you.
                </p>
                <ContactForm onSubmit={() => setFormSubmitted(true)} />
              </>
            )}
            {formSubmitted && (
              <p className="text-[30px] md:text-[35px] text-center text-white font-bold">
                Thank you for reaching out!
                <br /> We will get back to you shortly.
              </p>
            )}
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
