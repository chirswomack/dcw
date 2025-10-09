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

import hero from '../public/images/litigation-hero.png';
import ctaImage from '../public/images/litigation-cta.png';

const servicesList: ServiceListItemProps[] = [
  { title: 'Expert witness testimony' },
  { title: 'Damage analysis and valuation' },
  { title: 'Financial and fraud investigations' },
  { title: 'Settlement negotiations and mediation support' },
];

export default function LitigationConsulting() {
  return (
    <Layout>
      <Navbar activeRoute="/litigation-consulting" />
      <div className="flex flex-col w-screen">
        <Hero src={hero.src} backgroundPositionX="90%">
          <h1 className="text-[35px] md:text-[55px] leading-[.953] font-bold text-white">
            Litigation
            <br />
            Consulting
          </h1>
          <p className="mt-5 md:mt-8 md:text-[25px] w-[150%] font-bold leading-[1.103] text-brand-green shrink">
            Strategic support for
            <br /> complex litigation
          </p>
        </Hero>
        <IntroSection iconName={IconName.Gavel}>
          <div className="flex flex-col max-w-xl mt-18">
            <p className="">
              DCW Advisory Group supports attorneys, businesses, and individuals
              navigating the financial complexities of litigation. Our
              professionals provide expert guidance throughout each phase, from
              initial case evaluation to trial. We are known for our strategic
              insight, rigorous analysis, and credibility in court.
            </p>
            <span className="font-bold my-6">We assist with:</span>
            <ul className="list-disc pl-6 text-brand-green">
              <li className="mb-6">
                <span className="font-bold">Shareholder disputes:</span>{' '}
                <span className="text-brand-blue">
                  Valuations and forensic analyses to resolve ownership
                  conflicts and disputes.
                </span>
              </li>
              <li className="mb-6">
                <span className="font-bold">Marital dissolution:</span>{' '}
                <span className="text-brand-blue">
                  Comprehensive financial evaluations to ensure equitable asset
                  distribution.
                </span>
              </li>
              <li>
                <span className="font-bold">Commercial litigation:</span>{' '}
                <span className="text-brand-blue">
                  Analysis of economic damages, lost profits, fraud
                  investigations, and breach of contract claims.
                </span>
              </li>
            </ul>
          </div>
        </IntroSection>
        <ServicesListSection
          headerText="Our litigation consulting services include:"
          listItems={servicesList}
        />
        <CtaSection
          imageSrc={ctaImage.src}
          imageAlt="Three lawyers reviewing a document in a courtroom"
          headerText="Ready to strengthen your litigation strategy?"
          secondaryText="Gain clarity and confidence with DCW Advisory Group."
          buttonText="Discuss your Litigation Needs"
        />
        <Footer />
      </div>
    </Layout>
  );
}
