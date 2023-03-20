import { HTMLAttributes } from 'react';
import { BadgeColors } from '@parte/foundation';

type BadgeType = 'badge' | 'pills';

export type BadgeProps = HTMLAttributes<HTMLButtonElement> & {
  type?: BadgeType;
  badgeColor?: BadgeColors;
  text?: string;
};
