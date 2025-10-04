import BlurbBg from './graphics/hero-blurb.svg';
import colors from '../utils/colors';

export interface HeroProps {
    src: string;
    children?: React.ReactNode;
    blurbFill?: string;
}

export default function Hero({ src, children, blurbFill = 'brand-green' }: HeroProps) {
    return (
        <div className="w-full h-[477px] relative bg-[100% 100%] bg-center" style={{ backgroundImage: `url(${src})` }}>
            <div className="hero-blurb absolute w-[476px] bottom-[-78px] left-[20%]">
                <BlurbBg className="z-10 relative" fill={`${colors[blurbFill]}`} />
                <div className="hero-text text-brand-blue z-50 absolute top-0 left-0 pl-18 pt-20">
                    {children}
                </div>
            </div>
        </div>
    );
}