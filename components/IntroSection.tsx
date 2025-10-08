import { Icon, IconName } from 'components/icons';

export interface IntroSectionProps {
  iconName: IconName;
  children: React.ReactNode;
}

export default function IntroSection({
  iconName,
  children,
}: IntroSectionProps) {
  return (
    <section className="pt-40 pb-22 px-13 md:pt-28 md:pb-40">
      <div className="flex flex-col gap-y-16 md:flex-row max-w-7xl mx-auto justify-around">
        {children}
        <Icon name={iconName} size="xl" className="mt-4" />
      </div>
    </section>
  );
}
