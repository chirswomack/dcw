import { useCallback, useState } from 'react';
import Link from 'next/link';
import classNames from 'clsx';

import Logo from '../public/images/wordmark.svg';
import Button, { ButtonVariant } from './Button';
import { Icon, IconName } from './icons';

const linkStyles = 'hover:text-brand-green text-xs uppercase font-medium';

export enum NavbarRoute {
  Home = '/',
  ForensicAccounting = '/forensic-accounting',
  BusinessValuation = '/business-valuation',
  CollaborativeDivorce = '/collaborative-divorce',
  LitigationConsulting = '/litigation-consulting',
  About = '/about',
  Contact = '/contact',
}

export interface NavbarProps {
  activeRoute?: string;
}

export default function Navbar({ activeRoute }: NavbarProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsExpanded(!isExpanded);
  }, [isExpanded, setIsExpanded]);

  const computeStyles = (route: NavbarRoute) => {
    return `${linkStyles} ${
      activeRoute === route ? 'text-brand-green' : 'text-white'
    }`;
  };

  const contactButtonVariant =
    activeRoute === NavbarRoute.Contact
      ? ButtonVariant.Tertiary
      : ButtonVariant.Primary;

  return (
    <nav className="top-0 left-0 fixed lg:sticky w-screen flex items-center justify-between p-4 bg-brand-blue text-white z-100">
      <div className="flex flex-col items-start w-full lg:flex-row lg:items-center lg:max-w-screen lg:mx-auto 2xl:max-w-7xl">
        <div className="flex flex-row items-center justify-between w-full lg:w-auto">
          <Link href="/" className="lg:mr-20 2xl:mr-72">
            <Logo width={206} height={67} />
          </Link>
          <div onClick={toggleMenu} className="lg:hidden cursor-pointer mr-4">
            {isExpanded ? (
              <Icon name={IconName.Close} className="h-7! w-11!" />
            ) : (
              <Icon name={IconName.Accordion} className="h-7! w-11!" />
            )}
          </div>
        </div>
        <div
          className={classNames(
            'mx-auto max-h-0 overflow-hidden transition-all duration-500',
            'lg:max-h-screen lg:overflow-visible',
            isExpanded ? 'max-h-94' : 'max-h-0'
          )}
        >
          <ul
            className={classNames(
              'flex flex-col space-y-4 self-center items-center my-4',
              'lg:my-0 lg:flex lg:flex-row lg:space-x-8 lg:space-y-0'
            )}
          >
            <li>
              <Link
                href="/forensic-accounting"
                className={computeStyles(NavbarRoute.ForensicAccounting)}
              >
                Forensic Accounting
              </Link>
            </li>
            <li>
              <Link
                href="/business-valuation"
                className={computeStyles(NavbarRoute.BusinessValuation)}
              >
                Business Valuation
              </Link>
            </li>
            <li>
              <Link
                href="/collaborative-divorce"
                className={computeStyles(NavbarRoute.CollaborativeDivorce)}
              >
                Collaborative Divorce
              </Link>
            </li>
            <li>
              <Link
                href="/litigation-consulting"
                className={computeStyles(NavbarRoute.LitigationConsulting)}
              >
                Litigation Consulting
              </Link>
            </li>
            <li>
              <Link href="/about" className={computeStyles(NavbarRoute.About)}>
                About
              </Link>
            </li>
            <li>
              <Button variant={contactButtonVariant}>
                <Link href="/contact">Contact</Link>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
