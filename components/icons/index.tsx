import Bank from './bank.svg';
import Calculator from './calculator.svg';
import Collaborative from './collaborative.svg';
import Gavel from './gavel.svg';
import Linkedin from './linkedin.svg';
import Phone from './phone.svg';
import Pin from './pin.svg';

export enum IconName {
    Bank = 'bank',
    Calculator = 'calculator',
    Collaborative = 'collaborative',
    Gavel = 'gavel',
    Linkedin = 'linkedin',
    Phone = 'phone',
    Pin = 'pin',
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
        case IconName.Collaborative:
            return <Collaborative {...props} />;
        case IconName.Gavel:
            return <Gavel {...props} />;
        case IconName.Linkedin:
            return <Linkedin {...props} />;
        case IconName.Phone:
            return <Phone {...props} />;
        case IconName.Pin:
            return <Pin {...props} />;
        default:
            return null;
    }
};

const iconClassNamePerSize = {
    sm: 'w-[38px] h-[38px]',
    md: 'w-26 h-26',
    xl: 'w-[286px] h-[286px]',
};

export const Icon: React.FC<IconProps> = ({ className, size = 'md', ...props }) => {
    return <IconSwitch {...props} className={`${iconClassNamePerSize[size]} ${className || ''}`} />;
};
