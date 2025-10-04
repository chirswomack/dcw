export enum ButtonVariant {
    Primary = 'primary',
    Secondary = 'secondary',
    Tertiary = 'tertiary'
}

export interface ButtonProps {
    variant?: ButtonVariant;
    onClick?: () => void;
    className?: string;
    children: React.ReactNode;
}

const baseStyles = 'block px-4 py-2 rounded-lg font-bold text-sm uppercase focus:outline-none cursor-pointer transition-colors duration-300';
const primaryStyles = 'bg-brand-green text-white border border-transparent  hover:bg-transparent hover:text-brand-green hover:border-brand-green';
const secondaryStyles = 'bg-transparent text-brand-blue border border-brand-blue hover:bg-brand-green hover:border-transparent';
const tertiaryStyles = 'bg-white text-brand-green';

const variantToStylesMap: Record<ButtonVariant, string> = {
    [ButtonVariant.Primary]: primaryStyles,
    [ButtonVariant.Secondary]: secondaryStyles,
    [ButtonVariant.Tertiary]: tertiaryStyles,
};

export default function Button({ variant = ButtonVariant.Primary, onClick, className, children }: ButtonProps) {


    return (
        <button
            className={`${baseStyles} ${variantToStylesMap[variant]} ${className || ''}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}