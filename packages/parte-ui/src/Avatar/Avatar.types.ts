import { HTMLAttributes } from 'react';
import { BadgeColors } from '@parte/foundation';

type AvatarShape = 'CIRCLE' | 'SQUARE';

export type AvatarProps = HTMLAttributes<HTMLDivElement> & {
  avatarColor?: BadgeColors;
  size?: number;
  shape?: AvatarShape;
  name?: string;
  showInitial?: boolean;
  src?: string;
};
