import { Icon, IconName } from 'components/icons';
import Link from 'next/link';
import Button, { ButtonVariant } from './Button';

export interface ServiceSectionProps {
    iconName: IconName;
    href: string;
    title: string;
    description: string;
}

export default function ServiceSection({ iconName, href, title, description }: ServiceSectionProps) {
    return <div className="flex flex-col items-center justify-start text-center">
        <Icon name={iconName} />
        <h5 className="font-bold mt-10 uppercase">{title}</h5>
        <p className="font-medium mt-5">{description}</p>
        <div className="mt-10 flex-grow flex items-end">
            <Button variant={ButtonVariant.Secondary}>
                <Link href={href}>Learn More</Link>
            </Button>
        </div>
    </div>
}