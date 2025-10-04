import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Button, { ButtonVariant } from '../components/Button';
import Link from 'next/link';
import Footer from '../components/Footer';

import hero from '../public/images/forensic-hero.png';
import readyToResolve from '../public/images/ready-to-resolve.png';
import Navbar from 'components/Navbar';
import { Icon, IconName } from 'components/icons';
import CornerCut from 'components/graphics/corner-occlusion.svg';
import ServiceDescription from 'components/ServiceDescription';

export default function ForensicAccounting() {
    return (
        <Layout>
            <Navbar activeRoute="/forensic-accounting" />
            <div className="flex flex-col w-screen">
                <Hero src={hero.src} blurbFill="brand-blue">
                    <h1 className="text-[55px] leading-[.953] font-bold text-white">Forensic Accounting</h1>
                    <p className="mt-8 text-[25px] font-bold leading-[1.103] text-brand-green">Precision and clarity in financial investigations or financial conflict</p>
                </Hero>
                <section className="pt-28 pb-40">
                    <div className="flex max-w-7xl mx-auto justify-around">
                        <p className="max-w-xl mt-18">
                            DCW Advisory Group provides forensic accounting services designed to expertly analyze financial information.
                            Our experienced Certified Fraud Examiners and Certified Public Accountants investigate financial discrepancies,
                            conduct fraud examinations, calculate economic damages, and provide credible expert testimony.
                            We approach each investigation with discretion, professionalism, and meticulous attention to detail, ensuring reliable and unbiased outcomes.
                        </p>
                        <Icon name={IconName.Calculator} size="xl" className="mt-4" />
                    </div>
                </section>
                <section className="bg-light-blue text-white pt-26 pb-32 relative rounded-t-[40px]">
                    <div className="text-white max-w-xl mx-auto text-center">
                        <h3 className="text-[40px] font-bold leading-[1.13] mb-13">Our forensic accounting services include:</h3>
                        <div className="flex flex-col gap-y-9">
                            <ServiceDescription
                                title="Financial investigations" />
                            <ServiceDescription
                                title="Economic damage assessments" />
                            <ServiceDescription
                                title="Expert witness testimony" />
                            <ServiceDescription
                                title="Financial analysis and economic research" />
                            <ServiceDescription
                                title="Financial mediation and resolution support" />
                        </div>
                    </div>
                    <CornerCut className="absolute bottom-0 left-0 z-10 w-[252px]" />
                </section>
                <section className="why-choose-section w-full flex justify-center gap-x-40 py-43 relative">
                    <div className="max-w-[492px] -mt-15 z-15"><img src={readyToResolve.src} alt="Person reviewing charts on tablet and laptop" /></div>
                    <div className="max-w-lg mt-6">
                        <h3 className="text-xl font-bold mb-12">Ready to resolve your financial disputes?</h3>
                        <p className="mb-10">Gain clarity and confidence with<br />DCW Advisory Group.</p>
                        <Link href="/contact"><Button variant={ButtonVariant.Primary}>Schedule a forensic accounting consultation</Button></Link>
                    </div>
                </section>
                <Footer />
            </div>
        </Layout>
    );
}