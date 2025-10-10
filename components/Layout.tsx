export interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function Layout({ children, className = '' }: LayoutProps) {
  return (
    <div
      className={`flex flex-col items-center w-full pt-[99px] md:pt-0 relative pb-[473px] md:pb-39 ${className}`}
    >
      {children}
    </div>
  );
}
