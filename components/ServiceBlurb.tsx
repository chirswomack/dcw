import { Icon, IconName } from 'components/icons';
import Link from 'next/link';
import Button, { ButtonVariant } from './Button';

export interface ServiceBlurbProps {
    iconName: IconName;
    href: string;
    title: string;
    description: string;
}

export default function ServiceBlurb({ iconName, href, title, description }: ServiceBlurbProps) {
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