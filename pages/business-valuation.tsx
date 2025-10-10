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

import hero from '../public/images/business-hero.png';
import ctaImage from '../public/images/valuation-cta.png';

const servicesList: ServiceListItemProps[] = [
  { title: 'Shareholder and partnership disputes' },
  { title: 'Marital dissolution' },
  { title: 'Succession planning' },
  { title: 'Buy/sell agreements' },
  { title: 'Eminent domain' },
  { title: 'Estate and gift tax' },
  { title: 'Bankruptcy proceedings' },
  { title: 'Mergers and acquisitions' },
];

export default function BusinessValuation() {
  return (
    <Layout>
      <Navbar activeRoute="/business-valuation" />
      <div className="flex flex-col w-screen">
        <Hero src={hero.src} backgroundPositionX="65%">
          <h1 className="text-[35px] lg:text-[55px] leading-[.953] font-bold text-white">
            Business
            <br />
            Valuation
          </h1>
          <p className="mt-5 font-bold w-[150%] leading-[1.103] text-brand-green shrink lg:mt-8 lg:text-[25px]">
            Accurate, defensible
            <br /> business valuations
          </p>
        </Hero>
        <IntroSection iconName={IconName.Bank}>
          <p className="max-w-xl mt-18">
            Determining the accurate value of a business is vital to making
            informed decisions in mergers, acquisitions, shareholder
            disputes,and marital dissolutions. DCW Advisory Group&#39;s
            experienced professionals provide objective, defensible business
            valuations. We analyze operations, market trends, historical
            financial data, and relevant economic factors, offering detailed
            valuation reports tailored to your specific needs.
          </p>
        </IntroSection>
        <ServicesListSection
          headerText="We provide business valuation services for:"
          listItems={servicesList}
        />
        <CtaSection
          imageSrc={ctaImage.src}
          imageAlt="Person giving a presentation with charts to three colleagues"
          headerText="Ready to discover the value of your business?"
          secondaryText="Gain clarity and confidence with DCW Advisory Group."
          buttonText="Request your Business Valuation"
        />
        <Footer />
      </div>
    </Layout>
  );
}
