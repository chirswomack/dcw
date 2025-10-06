import BlurbArrow from './graphics/blurb-arrow.svg';

export interface HeroProps {
  src: string;
  children?: React.ReactNode;
  blurbBg?: string;
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
}: HeroProps) {
  return (
    <div
      className="w-full h-[477px] relative bg-[100% 100%] bg-center"
      style={{ backgroundImage: `url(${src})` }}
    >
      <div className="hero-blurb absolute bottom-[-78px] left-[20%]">
        <div
          className={`flex flex-col justify-center hero-text z-50 relative pl-18 py-25 h-[450px] rounded-l-[40px] bg-${blurbBg}`}
        >
          {children}
        </div>
        <BlurbArrow
          className={`z-50 absolute top-0 inset-full h-full ${blurbArrowColorToClassMap[blurbBg]}`}
        />
      </div>
    </div>
  );
}
