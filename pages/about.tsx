import Layout from '../components/Layout';
import hero from '../public/images/about-hero.png';
import Navbar from 'components/Navbar';
import Hero from 'components/Hero';
import CornerCut, { CornerCutVariant } from 'components/graphics/CornerCut';
import CompassQuarter from 'components/graphics/compass-quarter.svg';
import ctaImage from '../public/images/about-cta.png';
import BlurbArrow from 'components/graphics/blurb-arrow.svg';
import Footer from 'components/Footer';
import CtaSection from 'components/CtaSection';
import building from '../public/images/building.png';
import CompassHalf from 'components/graphics/compass-half.svg';
import Compass from 'components/graphics/compass.svg';
import Button, { ButtonVariant } from 'components/Button';
import { IconList } from 'components/IconList';
import { Icon, IconName } from 'components/icons';
import Diane from 'public/images/diane.png';
import staircase from 'public/images/staircase.png';
import CredentialsList from 'components/CredentialsList';

export default function About() {
  return (
    <Layout>
      <Navbar activeRoute="/about" />
      <div className="flex flex-col w-screen">
        <Hero src={hero.src} blurbBg="brand-green" backgroundPositionX="65%">
          <p className="text-[35px] leading-[1.033] w-[150%] md:text-3xl font-bold">
            <span className="text-white">
              Clarity in
              <br />
              the midst
              <br />
            </span>
            of financial
            <br />
            conflict
          </p>
        </Hero>
        <section className="first-section px-13 flex flex-col items-center justify-center w-full relative z-15 bg-brand-blue pt-50 pb-55 md:pt-40 md:pb-32 md:rounded-b-[40px]">
          <p className="text-white mb-8 max-w-2xl text-left relative z-15 md:text-center md:text-md">
            When financial disputes arise, uncertainty and challenges often
            follow. Whether you&apos;re dealing with a business disagreement, a
            divorce, or a complex valuation, you need more than opinions—you
            need clarity grounded in evidence.
          </p>
          <CompassHalf
            className="absolute z-1 bottom-0 right-0 w-[95%] md:w-auto md:h-[98%]"
            fill="white"
          />
          <CornerCut
            variant={CornerCutVariant.BottomRight}
            className="visible md:invisible"
          />
        </section>
        <section className="w-full flex flex-col px-12 pt-18 pb-20 gap-y-17 justify-center gap-x-45 md:py-43 relative md:flex-row">
          <div className="max-w-[471px] z-15">
            <img
              src={building.src}
              alt="Person reviewing charts on tablet and laptop"
            />
          </div>
          <div className="max-w-lg z-15">
            <h3 className="text-xl font-bold mb-9">
              At DCW Advisory Group, we bring clarity to complexity.
            </h3>
            <p>
              Led by Diane L. Womack, a CPA and forensic accountant with over
              two decades of experience, we specialize in unraveling the numbers
              and delivering objective, expert analysis. Our work empowers
              attorneys, business owners, and individuals with the facts they
              need to make informed decisions and build strong, defensible
              cases.
            </p>
          </div>
          <CompassQuarter className="absolute w-[351px] inset-y-[-180px] left-[6%] md:inset-y-auto md:bottom-[80px] md:left-[7%] z-10 md:w-[712px] fill-brand-green" />
        </section>
        <section className="flex flex-col items-center px-15 pt-20 pb-30 text-white bg-brand-blue rounded-t-2xl md:rounded-t-[40px] justify-center w-full md:py-32 z-25 relative">
          <h6 className="uppercase font-bold text-center mb-15 max-w-lg z-10">
            Here&apos;s how we help you move forward
          </h6>
          <IconList
            className="z-10"
            listItems={[
              {
                index: 1,
                description: 'Book a consultation to discuss your case.',
              },
              {
                index: 2,
                description:
                  'Gain clear, expert insight through forensic analysis.',
              },
              {
                index: 3,
                description: 'Navigate your dispute with confidence.',
              },
            ]}
          />
          <p className="font-bold max-w-xl text-center mt-20 z-10">
            When the financial picture is unclear, DCW Advisory Group brings
            precision, clarity, and integrity to every case.
          </p>
          <Compass className="absolute inset-1/2 -translate-x-1/2 -translate-y-3/4 w-[90%] md:-translate-y-1/2 md:w-auto md:h-[80%] z-1 fill-[#00293A]" />
          <CornerCut fill="fill-[#0155AE]" />
        </section>
        <section
          className="bg-[#0155AE] py-22 bg-no-repeat bg-size-[85%]"
          style={{
            backgroundImage: `url(${staircase.src})`,
            backgroundPosition: '75% 100%',
          }}
        >
          <div className="flex flex-col h-[330px] md:h-auto max-w-[calc(100vw-(--spacing(43)))] md:max-w-md z-50 relative inset-x-12 inset-y-60 pl-10 pt-12 pb-15 md:inset-1/6 md:py-15 md:pl-18 rounded-l-[40px] bg-brand-green">
            <h4 className="font-bold text-[20px] w-[125%] leading-[1.09] md:w-auto md:text-lg text-white">
              Let us guide you toward resolution, with clarity that holds up in
              court and confidence that carries you forward.
            </h4>
            <Button
              variant={ButtonVariant.Blue}
              className="mt-8 md:mt-12 self-start"
            >
              Book a consultation
            </Button>
            <BlurbArrow
              className={`-z-1 absolute top-0 inset-full h-full fill-brand-green`}
            />
          </div>
        </section>
        <section className="pt-52 pb-28 md:py-28">
          <div className="flex flex-col justify-center mx-auto px-13 gap-y-16 gap-x-32 text-light-blue md:flex-row">
            <div className="flex flex-col items-center text-center bg-[#f9f9f9] w-full md:w-1/4 pt-16 px-11 pb-12 rounded-[26px]">
              <Icon name={IconName.Vision} className="w-25 md:w-35" />
              <h5 className="font-bold mt-10 text-lg md:text-xl">Vision</h5>
              <p className="font-medium mt-5">
                To empower individuals and businesses to navigate complex
                financial challenges with clarity and confidence.
              </p>
            </div>
            <div className="flex flex-col items-center text-center bg-[#f9f9f9] w-full md:w-1/4 pt-16 px-11 pb-12 rounded-[26px]">
              <Icon
                name={IconName.Mission}
                className="w-18! h-18! md:size-26!"
              />
              <h5 className="font-bold mt-10 text-lg md:text-xl">Mission</h5>
              <p className="font-medium mt-5">
                To provide expert forensic accounting, valuation, and litigation
                support with integrity, professionalism and compassionate
                objectivity
              </p>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center text-white bg-brand-blue justify-center w-full pt-20 pb-32 md:py-32 z-25 relative">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-20 max-w-lg z-10">
            Values
          </h2>
          <IconList
            className="z-10"
            listItems={[
              {
                iconName: IconName.Shield,
                iconSize: 'sm',
                title: 'Integrity',
                description:
                  'Honesty and transparency guide everything we do, ensuring reliable, objective analysis.',
              },
              {
                iconName: IconName.Clarity,
                iconSize: 'sm',
                title: 'Clarity',
                description:
                  'We transform complexity into straightforward, actionable insights for confident decision-making.',
              },
              {
                iconName: IconName.Handshake,
                iconSize: 'sm',
                title: 'Collaboration',
                description:
                  'Working closely with clients and legal teams, we build trusted partnerships focused on achieving successful outcomes.',
              },
            ]}
          />
          <Compass className="absolute inset-1/2 -translate-x-1/2 -translate-y-3/4 w-[90%] md:-translate-y-1/2 md:w-auto md:h-[80%] z-1 fill-[#00293A]" />
          <CornerCut variant={CornerCutVariant.BottomRight} />
        </section>
        <section className="meet-our-founder pt-16 pb-38 px-10">
          <div className="flex flex-col md:flex-row gap-x-25 items-center justify-center mx-auto relative">
            <h2 className="text-[35px] leading-[1.033] text-center font-bold mb-9 z-10 md:hidden">
              Meet Our Founder
            </h2>
            <div className="flex flex-col items-end max-w-lg z-10">
              <div className="relative self-start mb-13 md:mb-32">
                <img
                  src={Diane.src}
                  alt="Diane L. Womack, CPA"
                  className="z-10"
                />
                <CompassQuarter className="absolute bottom-[-40px] right-[-10px] z-20 fill-brand-green h-[164px] -scale-x-100" />
              </div>
              <CredentialsList className="hidden md:block" />
            </div>
            <div className="max-w-md md:mt-16">
              <h2 className="text-xl font-bold mb-7 z-10 hidden md:block">
                Meet Our Founder
              </h2>
              <div className="mb-10 text-center md:text-left">
                <h4 className="text-lg font-bold">Diane Womack</h4>
                <h5 className="text-md">CPA, ABV, CFF, CFE</h5>
                <h6 className="uppercase text-brand-green font-bold mt-4">
                  Managing Director
                </h6>
              </div>
              <p>
                As the Managing Director of DCW Advisory Group, Diane Womack
                combines her extensive experience with a passion for uncovering
                financial truths. Her dedication to providing reliable, unbiased
                analysis helps clients achieve favorable resolutions in even the
                most complex cases.
                <br />
                <br />
                Diane evaluates economic damages and losses in matters involving
                breach of contract, shareholder disputes, eminent domain, and
                business interruption claims.
                <br />
                <br />
                Diane is qualified as an expert witness in Federal and State
                courts. She has provided expert services and testimony in
                matters involving white collar crime, breach of contract,
                shareholder disputes, business interruption claims, lost
                profits, damage claims, business valuation issues, and
                matrimonial disputes.
                <br />
                <br />
                Diane&apos;s analytical skills, strategic insight, and
                dedication to client success have made her a sought-after expert
                in forensic accounting. She works closely with clients to
                transform complexity into clarity, ensuring every case is
                handled professionally and transparently.
              </p>
              <CredentialsList className="mt-14 md:hidden" />
            </div>
          </div>
        </section>
        <CtaSection
          imageSrc={ctaImage.src}
          imageAlt="Two people in suits looking at a tablet"
          headerText="Need support navigating a financial conflict?"
          secondaryText="Let DCW Advisory Group assist you in gaining clarity to make informed decisions."
          buttonText="Contact us to schedule a consultation"
          classNames="bg-brand-blue text-white"
        >
          <CornerCut variant={CornerCutVariant.TopLeft} />
        </CtaSection>
        <Footer />
      </div>
    </Layout>
  );
}
