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
        d="M9.01 14h-2c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1-.45 1-1s-.44-1-1-1Zm1-3h-4c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1s-.44-1-1-1Zm-2-11C5.26 0 3.03 1.95 3.03 4.35c0 2.37 1.63 2.64 1.94 5.22 0 .24.22.44.5.44h5.09c.28 0 .5-.19.5-.44C11.37 6.99 13 6.72 13 4.35 13 1.95 10.77 0 8.01 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const MiscellaneousLightbulbIcon = convertIcon(Icon, 'miscellaneous-lightbulb');
export default MiscellaneousLightbulbIcon;
