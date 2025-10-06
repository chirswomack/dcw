import Link from 'next/link';
import Image from 'next/image';
import Logo from '../public/images/wordmark.svg';
import Button, { ButtonVariant } from './Button';

const linkStyles = "hover:text-brand-green text-xs uppercase font-medium";

export enum NavbarRoute {
    Home = '/',
    ForensicAccounting = '/forensic-accounting',
    BusinessValuation = '/business-valuation',
    CollaborativeDivorce = '/collaborative-divorce',
    LitigationConsulting = '/litigation-consulting',
    About = '/about',
    Contact = '/contact'
}

export interface NavbarProps {
    activeRoute?: string;
}

export default function Navbar({ activeRoute }: NavbarProps) {
    const computeStyles = (route: NavbarRoute) => {
        return `${linkStyles} ${activeRoute === route ? 'text-brand-green' : 'text-white'}`;
    }

    const contactButtonVariant = activeRoute === NavbarRoute.Contact ? ButtonVariant.Tertiary : ButtonVariant.Primary;

    return (
        <nav className="top-0 left-0 sticky w-screen flex items-center justify-between p-4 bg-brand-blue text-white z-100">
            <div className="flex flex-row items-center max-w-7xl mx-auto">
                <Link href="/" className="mr-72"><Logo width={206} height={67} /></Link>
                <ul className="flex space-x-8 items-center">
                    <li><Link href="/forensic-accounting" className={computeStyles(NavbarRoute.ForensicAccounting)}>Forensic Accounting</Link></li>
                    <li><Link href="/business-valuation" className={computeStyles(NavbarRoute.BusinessValuation)}>Business Valuation</Link></li>
                    <li><Link href="/collaborative-divorce" className={computeStyles(NavbarRoute.CollaborativeDivorce)}>Collaborative Divorce</Link></li>
                    <li><Link href="/litigation-consulting" className={computeStyles(NavbarRoute.LitigationConsulting)}>Litigation Consulting</Link></li>
                    <li><Link href="/about" className={computeStyles(NavbarRoute.About)}>About</Link></li>
                    <li><Button variant={contactButtonVariant}><Link href="/contact">Contact</Link></Button></li>
                </ul>
            </div>
        </nav>
    );
}