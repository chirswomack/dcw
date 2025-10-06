import classNames from 'clsx';

import { Icon, IconName, IconSize } from 'components/icons';
import Link from 'next/link';
import Button, { ButtonVariant } from './Button';

export interface IconListProps {
  listItems: IconListItemProps[];
  className?: string;
}

export function IconList({ listItems, className }: IconListProps) {
  const fourCols = listItems.length === 4;
  return (
    <div
      className={classNames(
        'grid grid-flow-col gap-x-25',
        'md:grid-flow-row md:items-stretch md:grid-cols-3 ',
        fourCols && 'md:grid-cols-4! ',
        fourCols ? 'max-w-7xl' : 'max-w-6xl',
        className
      )}
    >
      {listItems.map((item, index) => (
        <IconListItem key={index} {...item} />
      ))}
    </div>
  );
}

export interface IconListItemProps {
  index?: number;
  iconName?: IconName;
  iconSize?: IconSize;
  href?: string;
  title?: string;
  description: string;
}

export function IconListItem({
  index,
  iconName,
  iconSize = 'md',
  href,
  title,
  description,
}: IconListItemProps) {
  return (
    <div className="flex flex-col items-center justify-start text-center">
      {iconName && <Icon name={iconName} size={iconSize} />}
      {index !== undefined && (
        <div className="px-3 py-4 text-white text-2xl font-bold bg-brand-green rounded-full size-22">
          {index}
        </div>
      )}
      {title && <h5 className="font-bold mt-10 uppercase">{title}</h5>}
      <p className="font-medium mt-5">{description}</p>
      {href && (
        <div className="mt-10 flex-grow flex items-end">
          <Button variant={ButtonVariant.Secondary}>
            <Link href={href}>Learn More</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
