import React, { HTMLAttributes } from 'react';
import { IconProps } from '@template/parte-icons/src/common/Icon';

export type IconButtonProps = HTMLAttributes<HTMLButtonElement> & {
  variant: 'primary' | 'secondary' | 'minimal' | 'error';
  Icon: React.ReactElement<IconProps>;
  size?: number;
  disabled?: boolean;
};
