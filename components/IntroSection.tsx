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
    <section className="pt-40 pb-22 px-13 lg:pt-28 lg:pb-40">
      <div className="flex flex-col gap-y-16 gap-x-10 md:flex-row-reverse lg:flex-row max-w-7xl mx-auto justify-around">
        {children}
        <Icon name={iconName} size="xl" className="mt-4" />
      </div>
    </section>
  );
}
