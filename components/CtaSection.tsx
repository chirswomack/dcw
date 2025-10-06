import Link from "next/link";

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
    children
}: CtaSectionProps) {
    return (
        <section className={`w-full flex items-end justify-center gap-x-40 py-22 relative ${classNames}`}>
            <div className="max-w-[492px] z-15 relative mb-10">
                <img src={imageSrc} alt={imageAlt} />
                <CompassQuarter className="absolute bottom-[-40px] right-[-10px] z-20 fill-brand-green h-[164px] -scale-x-100" />
            </div>
            <div className="max-w-lg mt-6 mb-14">
                <h3 className="text-xl font-bold mb-8">{headerText}</h3>
                <p className="mb-10">{secondaryText}</p>
                <Link href="/contact"><Button variant={ButtonVariant.Primary}>{buttonText}</Button></Link>
            </div>
            {children}
        </section>
    )
}