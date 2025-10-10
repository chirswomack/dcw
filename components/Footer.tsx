import Link from 'next/link';
import Logo from '../public/images/wordmark.svg';
import Address from './graphics/address.svg';
import Phone from './graphics/phone-number.svg';
import { Icon, IconName } from './icons';

export interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <footer className="w-full py-11 md:h-39 bg-light-blue text-white absolute bottom-0">
      <div className="max-w-7xl mx-auto gap-y-10 flex flex-col md:flex-row items-center justify-around">
        <Logo width={206} height={67} />
        <div className="flex flex-col gap-4 md:flex-row items-center">
          <Icon name={IconName.Phone} size="xs" />
          <Phone />
        </div>
        <div className="flex flex-col gap-4 md:flex-row items-center gap-x-4">
          <Icon name={IconName.Pin} size="xs" />
          <Address />
        </div>
        <Link href="https://www.linkedin.com/in/diane-womack-43a66229/">
          <Icon name={IconName.Linkedin} size="xs" />
        </Link>
      </div>
      <div className="absolute bottom-[-20px] w-screen bg-light-blue h-5 md:hidden"></div>
    </footer>
  );
}
