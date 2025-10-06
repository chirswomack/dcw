import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

import hero from '../public/images/forensic-hero.png';
import ctaImage from '../public/images/forensic-cta.png';
import Navbar from 'components/Navbar';
import { IconName } from 'components/icons';
import CtaSection from 'components/CtaSection';
import IntroSection from 'components/IntroSection';
import {
  ServiceListItemProps,
  ServicesListSection,
} from 'components/ServicesListSection';

const servicesList: ServiceListItemProps[] = [
  { title: 'Financial investigations' },
  { title: 'Economic damage assessments' },
  { title: 'Expert witness testimony' },
  { title: 'Financial analysis and economic research' },
  { title: 'Financial mediation and resolution support' },
];

export default function ForensicAccounting() {
  return (
    <Layout>
      <Navbar activeRoute="/forensic-accounting" />
      <div className="flex flex-col w-screen">
        <Hero src={hero.src}>
          <h1 className="text-[55px] leading-[.953] font-bold text-white">
            Forensic
            <br />
            Accounting
          </h1>
          <p className="mt-8 text-[25px] font-bold leading-[1.103] text-brand-green">
            Precision and clarity in
            <br />
            financial investigations
            <br /> or financial conflict
          </p>
        </Hero>
        <IntroSection iconName={IconName.Calculator}>
          <p className="max-w-xl mt-18">
            DCW Advisory Group provides forensic accounting services designed to
            expertly analyze financial information. Our experienced Certified
            Fraud Examiners and Certified Public Accountants investigate
            financial discrepancies, conduct fraud examinations, calculate
            economic damages, and provide credible expert testimony. We approach
            each investigation with discretion, professionalism, and meticulous
            attention to detail, ensuring reliable and unbiased outcomes.
          </p>
        </IntroSection>
        <ServicesListSection
          headerText="Our forensic accounting services include:"
          listItems={servicesList}
        />
        <CtaSection
          imageSrc={ctaImage.src}
          imageAlt="Three people in suits reviewing a legal document"
          headerText="Ready to resolve your financial disputes?"
          secondaryText="Gain clarity and confidence with DCW Advisory Group."
          buttonText="Schedule a forensic accounting consultation"
        />
        <Footer />
      </div>
    </Layout>
  );
}
