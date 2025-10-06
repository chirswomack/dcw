import Bank from './bank.svg';
import Calculator from './calculator.svg';
import Clarity from './clarity.svg';
import Collaborative from './collaborative.svg';
import Gavel from './gavel.svg';
import Handshake from './handshake.svg';
import Linkedin from './linkedin.svg';
import Mission from './mission.svg';
import Phone from './phone.svg';
import Pin from './pin.svg';
import Shield from './shield.svg';
import Vision from './vision.svg';

export enum IconName {
  Bank = 'bank',
  Calculator = 'calculator',
  Collaborative = 'collaborative',
  Clarity = 'clarity',
  Gavel = 'gavel',
  Handshake = 'handshake',
  Linkedin = 'linkedin',
  Mission = 'mission',
  Phone = 'phone',
  Pin = 'pin',
  Shield = 'shield',
  Vision = 'vision',
}
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | '3xl' | '5xl';

export interface IconProps extends React.SVGAttributes<SVGElement> {
  name: IconName;
  size?: IconSize;
}

const IconSwitch = (props: IconProps) => {
  switch (props.name) {
    case IconName.Bank:
      return <Bank {...props} />;
    case IconName.Calculator:
      return <Calculator {...props} />;
    case IconName.Clarity:
      return <Clarity {...props} />;
    case IconName.Collaborative:
      return <Collaborative {...props} />;
    case IconName.Gavel:
      return <Gavel {...props} />;
    case IconName.Handshake:
      return <Handshake {...props} />;
    case IconName.Linkedin:
      return <Linkedin {...props} />;
    case IconName.Mission:
      return <Mission {...props} />;
    case IconName.Phone:
      return <Phone {...props} />;
    case IconName.Pin:
      return <Pin {...props} />;
    case IconName.Shield:
      return <Shield {...props} />;
    case IconName.Vision:
      return <Vision {...props} />;
    default:
      return null;
  }
};

const iconClassNamePerSize = {
  xs: 'w-[38px] h-[38px]',
  sm: 'w-22 h-22',
  md: 'w-26 h-26',
  xl: 'w-[286px] h-[286px]',
};

export const Icon: React.FC<IconProps> = ({
  className,
  size = 'md',
  ...props
}) => {
  return (
    <IconSwitch
      {...props}
      className={`${iconClassNamePerSize[size]} ${className || ''}`}
    />
  );
};
