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
        d="M9.405 11.746C8.968 11.91 8.495 12 8 12c-.494 0-.968-.09-1.405-.254l-.702 1.873A5.936 5.936 0 0 0 8 14a5.98 5.98 0 0 0 2.107-.38l-.702-1.874Zm2.341-2.341 1.873.702A5.936 5.936 0 0 0 14 8a5.98 5.98 0 0 0-.38-2.107l-1.874.702c.164.437.254.91.254 1.405 0 .494-.09.968-.254 1.405ZM9.405 4.254l.702-1.873A5.987 5.987 0 0 0 8 2c-.742 0-1.452.135-2.107.38l.702 1.874C7.032 4.09 7.505 4 8 4c.494 0 .968.09 1.405.254ZM4.254 6.595 2.38 5.893A5.987 5.987 0 0 0 2 8c0 .742.135 1.452.38 2.107l1.874-.702A3.991 3.991 0 0 1 4 8c0-.494.09-.968.254-1.405ZM8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16Zm0-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const MiscellaneousLifesaverIcon = convertIcon(Icon, 'miscellaneous-lifesaver');
export default MiscellaneousLifesaverIcon;
