import { convertIcon, IconProps } from '../common/Icon';
function Icon({ size, ...rest }: Pick<IconProps, 'style' | 'color' | 'size'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="currentColor"
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="m14.54 11.18.01-.02L9.8 8l4.75-3.17-.01-.02c.27-.17.46-.46.46-.81 0-.55-.45-1-1-1-.21 0-.39.08-.54.18l-.01-.02L9 6.13V1c0-.55-.45-1-1-1S7 .45 7 1v5.13L2.55 3.17l-.01.01A.969.969 0 0 0 2 3c-.55 0-1 .45-1 1 0 .35.19.64.46.82l-.01.01L6.2 8l-4.75 3.17.01.02c-.27.17-.46.46-.46.81 0 .55.45 1 1 1 .21 0 .39-.08.54-.18l.01.02L7 9.87V15c0 .55.45 1 1 1s1-.45 1-1V9.87l4.45 2.96.01-.02c.15.11.33.19.54.19.55 0 1-.45 1-1 0-.35-.19-.64-.46-.82Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const MiscellaneousAsteriskIcon = convertIcon(Icon, 'miscellaneous-asterisk');
export default MiscellaneousAsteriskIcon;
