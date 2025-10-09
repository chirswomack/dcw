export enum ButtonVariant {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
  Blue = 'blue',
}

export interface ButtonProps {
  variant?: ButtonVariant;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  submit?: boolean;
}

const baseStyles =
  'block px-4 py-2 rounded-lg font-bold text-sm uppercase focus:outline-none cursor-pointer transition-colors duration-300';
const primaryStyles =
  'bg-brand-green text-white border border-transparent  hover:bg-transparent hover:text-brand-green hover:border-brand-green';
const secondaryStyles =
  'bg-transparent text-brand-blue border border-brand-blue hover:bg-brand-green hover:border-transparent';
const tertiaryStyles = 'bg-white text-brand-green';
const blueStyles =
  'bg-brand-blue text-white border border-transparent hover:bg-transparent hover:text-brand-blue hover:border-brand-blue';

const variantToStylesMap: Record<ButtonVariant, string> = {
  [ButtonVariant.Primary]: primaryStyles,
  [ButtonVariant.Secondary]: secondaryStyles,
  [ButtonVariant.Tertiary]: tertiaryStyles,
  [ButtonVariant.Blue]: blueStyles,
};

export default function Button({
  variant = ButtonVariant.Primary,
  onClick,
  className,
  children,
  submit = false,
}: ButtonProps) {
  return (
    <button
      className={`${baseStyles} ${variantToStylesMap[variant]} ${
        className || ''
      }`}
      onClick={onClick}
      type={submit ? 'submit' : 'button'}
    >
      {children}
    </button>
  );
}
