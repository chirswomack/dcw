import BlurbArrow from './graphics/blurb-arrow.svg';

export interface HeroProps {
  src: string;
  children?: React.ReactNode;
  blurbBg?: string;
  backgroundPositionX?: string;
}

type BlurbArrowColors = 'brand-blue' | 'brand-green';
const blurbArrowColorToClassMap: Record<BlurbArrowColors, string> = {
  'brand-blue': 'fill-brand-blue',
  'brand-green': 'fill-brand-green',
};

export default function Hero({
  src,
  children,
  blurbBg = 'brand-blue',
  backgroundPositionX = '',
}: HeroProps) {
  const paddingLeft = blurbBg === 'brand-blue' ? 'pl-10' : 'pl-13';

  return (
    <div
      className="w-full h-[400px] relative bg-size-[auto_100%] md:bg-cover md:h-[477px]"
      style={{ backgroundImage: `url(${src})`, backgroundPositionX }}
    >
      <div className="hero-blurb absolute z-50 bottom-0 translate-y-1/2 left-12 md:left-[20%] md:translate-y-0 md:bottom-[-78px]">
        <div
          className={`flex flex-col justify-center hero-text relative ${paddingLeft} max-w-[calc(100vw-(--spacing(43)))] py-16 h-[310px] leading-[1.033] rounded-l-[40px] bg-${blurbBg} md:pl-18 md:py-25 md:h-[450px]`}
        >
          {children}
        </div>
        <BlurbArrow
          className={`-z-1 absolute top-0 inset-full h-full ${blurbArrowColorToClassMap[blurbBg]}`}
        />
      </div>
    </div>
  );
}
