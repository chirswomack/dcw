import Graphic from './corner-occlusion.svg';

export enum CornerCutVariant {
  TopRight = 'top-right',
  BottomRight = 'bottom-right',
  TopLeft = 'top-left',
  BottomLeft = 'bottom-left',
}

export interface CornerCutProps {
  variant?: CornerCutVariant;
  fill?: string;
  className?: string;
}

const variantToClassMap: Record<CornerCutVariant, string> = {
  [CornerCutVariant.TopRight]:
    '-top-px lg:top-0 right-0 -scale-x-100 -scale-y-100',
  [CornerCutVariant.BottomRight]: '-bottom-px lg:bottom-0 right-0 -scale-x-100',
  [CornerCutVariant.TopLeft]: '-top-px lg:top-0 left-0 -scale-y-100',
  [CornerCutVariant.BottomLeft]: '-bottom-px lg:bottom-0 left-0',
};

export default function CornerCut({
  variant = CornerCutVariant.BottomLeft,
  fill = 'fill-white',
  className = '',
}: CornerCutProps) {
  return (
    <Graphic
      className={`absolute w-[90px] lg:w-[252px] z-10 ${variantToClassMap[variant]} ${fill} ${className}`}
    />
  );
}
