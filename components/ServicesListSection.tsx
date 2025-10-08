import CornerCut from 'components/graphics/CornerCut';
import Compass from 'components/graphics/compass.svg';

export interface ServiceListSectionProps {
  headerText: string;
  listItems: ServiceListItemProps[];
}

export function ServicesListSection({
  headerText,
  listItems,
}: ServiceListSectionProps) {
  return (
    <section className="bg-light-blue text-white pt-26 pb-32 px-8 relative rounded-t-2xl md:rounded-t-[40px]">
      <div className="text-white max-w-xl mx-auto text-center z-10 relative">
        <h3 className="text-[35px] md:text-[40px] font-bold leading-[1.13] mb-13">
          {headerText}
        </h3>
        <div className="flex flex-col gap-y-4 text-[16px] md:text-base">
          {listItems &&
            listItems.map((item, index) => (
              <ServiceListItem
                key={index}
                title={item.title}
                description={item.description}
              />
            ))}
        </div>
      </div>
      <Compass className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/4 w-[90%] md:-translate-y-1/2 md:w-auto md:h-[80%] z-1 fill-[#0058B8]" />
      <CornerCut />
    </section>
  );
}

export interface ServiceListItemProps {
  title: string;
  description?: string;
}

export function ServiceListItem({ title, description }: ServiceListItemProps) {
  return (
    <div
      className={`flex flex-col items-center w-full border border-white rounded-full py-5 px-12 text-center leading-[1.2] ${
        description ? 'mb-5' : ''
      }`}
    >
      <p className="font-bold uppercase">{title}</p>
      {description && (
        <p className="mt-2 mb-3 font-medium md:px-20">{description}</p>
      )}
    </div>
  );
}
