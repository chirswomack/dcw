import Link from 'next/link';

import Button, { ButtonVariant } from '../components/Button';
import CompassQuarter from '../components/graphics/compass-quarter.svg';

export interface CtaSectionProps {
  imageSrc: string;
  imageAlt: string;
  headerText: string;
  secondaryText: string;
  buttonText: string;
  classNames?: string;
  children?: React.ReactNode;
}

export default function CtaSection({
  imageSrc,
  imageAlt,
  headerText,
  secondaryText,
  buttonText,
  classNames = '',
  children,
}: CtaSectionProps) {
  return (
    <section
      className={`w-full flex flex-col px-13 md:flex-row items-end justify-center gap-x-40 py-22 relative ${classNames}`}
    >
      <div className="max-w-[492px] z-15 relative mb-10">
        <img src={imageSrc} alt={imageAlt} />
        <CompassQuarter className="absolute h-25 bottom-[-24px] right-[-5px] md:bottom-[-40px] md:right-[-10px] z-20 fill-brand-green md:h-41 -scale-x-100" />
      </div>
      <div className="max-w-lg mt-6 mb-14">
        <h3 className="text-[35px] leading-[1.10] md:text-xl font-bold mb-8">
          {headerText}
        </h3>
        <p className="mb-10">{secondaryText}</p>
        <Link href="/contact">
          <Button variant={ButtonVariant.Primary}>{buttonText}</Button>
        </Link>
      </div>
      {children}
    </section>
  );
}
