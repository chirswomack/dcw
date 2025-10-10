import CtaSection from 'components/CtaSection';
import Footer from 'components/Footer';
import Hero from 'components/Hero';
import { IconName } from 'components/icons';
import IntroSection from 'components/IntroSection';
import Layout from 'components/Layout';
import Navbar from 'components/Navbar';
import {
  ServiceListItemProps,
  ServicesListSection,
} from 'components/ServicesListSection';

import hero from '../public/images/collaborative-hero.png';
import ctaImage from '../public/images/collaborative-cta.png';

const servicesList: ServiceListItemProps[] = [
  {
    title: 'Evaluation of marital net worth',
    description: 'Detail and quantify shared and separate financial holdings',
  },
  {
    title: 'Lifestyle and spending analysis',
    description:
      'Gain insight into historical spending patterns and future needs',
  },
  {
    title: 'Business and asset valuation',
    description:
      'Provide accurate assessments of complex financial assets and business interests.',
  },
  {
    title: 'Income Analysis',
    description:
      'Evaluate sources of income and compensation arrangements of varying complexity',
  },
];

export default function CollaborativeDivorce() {
  return (
    <Layout>
      <Navbar activeRoute="/collaborative-divorce" />
      <div className="flex flex-col w-screen">
        <Hero src={hero.src} backgroundPositionX="60%">
          <h1 className="text-[30px] lg:text-[55px] leading-[.953] font-bold text-white">
            Collaborative
            <br />
            Divorce
          </h1>
          <p className="mt-5 lg:mt-8 lg:text-[25px] w-[150%] font-bold leading-[1.103] text-brand-green shrink">
            Equitable, compassionate, <br />
            and objective <br />
            financial solutions
          </p>
        </Hero>
        <IntroSection iconName={IconName.Collaborative}>
          <p className="max-w-xl mt-18">
            When navigating the emotional and financial complexities of divorce,
            clarity and transparency are essential. At DCW Advisory Group, we
            deliver comprehensive financial analysis, helping individuals and
            families make informed decisions during the marital dissolution
            process.
            <br />
            <br />
            Our team provides unbiased, detailed evaluations designed to support
            the collaborative divorce process and facilitate equitable
            agreements. We approach every case with compassionate objectivity
            and precision, understanding the sensitive nature of these matters.
          </p>
        </IntroSection>
        <ServicesListSection
          headerText="Our Collaborative Divorce Services include:"
          listItems={servicesList}
        />
        <CtaSection
          imageSrc={ctaImage.src}
          imageAlt="Six hands each holding a piece of a puzzle"
          headerText="Ready to resolve your divorce in an equitable and compassionate manner?"
          secondaryText="Let DCW Advisory Group assist you."
          buttonText="Explore our Collaborative Solutions"
        />
      </div>
      <Footer />
    </Layout>
  );
}
