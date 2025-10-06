import { Icon, IconName } from 'components/icons';

export interface IntroSectionProps {
    iconName: IconName;
    children: React.ReactNode;
}

export default function IntroSection({ iconName, children }: IntroSectionProps) {
    return (
        <section className="pt-28 pb-40">
            <div className="flex max-w-7xl mx-auto justify-around">
                {children}
                <Icon name={iconName} size="xl" className="mt-4" />
            </div>
        </section>
    )
}
