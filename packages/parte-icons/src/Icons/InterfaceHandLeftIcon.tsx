import { convertIcon, IconProps } from '../common/Icon';
function Icon({ size, ...rest }: Pick<IconProps, 'style' | 'color' | 'size'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M12.08 4.97c-1.26-.71-3.27-2.15-3.95-3.7C7.88.7 6.67.96 6.81 2.52c.09.93.89 1.9 1.3 2.48H1.5C.67 5 0 5.67 0 6.5S.67 8 1.5 8h4.05l.63.01c-.44.2-.75.69-.75 1.25 0 .52.26.96.63 1.19-.26.25-.42.61-.42 1.03 0 .61.35 1.12.84 1.29-.18.24-.29.54-.29.88 0 .75.54 1.35 1.19 1.35h.79c2.62 0 4.47-.28 5.71-.92 1.51-.79 2.12-2.14 2.12-4.22 0-3.79-1.95-3.97-3.92-4.89Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const InterfaceHandLeftIcon = convertIcon(Icon, 'interface-hand-left');
export default InterfaceHandLeftIcon;
