import Link from 'next/link';
import Logo from '../public/images/wordmark.svg';
import Address from './graphics/address.svg';
import Phone from './graphics/phone-number.svg';
import { Icon, IconName } from './icons';

export default function Footer() {
  return (
    <footer className="w-full py-11 h-39 bg-light-blue text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-around">
        <Logo width={206} height={67} />
        <div className="flex items-center gap-x-4">
          <Icon name={IconName.Phone} size="sm" />
          <Phone />
        </div>
        <div className="flex items-center gap-x-4">
          <Icon name={IconName.Pin} size="sm" />
          <Address />
        </div>
        <Link href="https://www.linkedin.com/in/diane-womack-43a66229/"><Icon name={IconName.Linkedin} size="sm" /></Link>
      </div>
    </footer>
  );
}
