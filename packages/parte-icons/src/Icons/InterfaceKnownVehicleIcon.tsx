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
        d="M15 3a.997.997 0 0 0-.707.293L12 5.586l-1.293-1.293a1 1 0 1 0-1.414 1.414l2 2a.997.997 0 0 0 1.414 0l3-3A1 1 0 0 0 15 3Zm-.879 6.121-.007-.007A3.02 3.02 0 0 1 13 9.816V10h-2v-.184c-.424-.15-.8-.395-1.112-.704l-.01.01-2-2 .012-.012A2.978 2.978 0 0 1 7.184 6H3c-.176 0-.06-.824 0-1l.73-1.63C3.79 3.192 3.823 3 4 3h3.78c.548-.61 1.335-1 2.22-1 .768 0 1.461.293 1.987.77l.844-.844c-.238-.244-.524-.442-.794-.524C12.037 1.402 10.72 1 8 1c-2.72 0-4.037.402-4.037.402-.508.155-1.078.711-1.268 1.237l-.763 2.117H.88c-.484 0-.88.423-.88.939s.396.939.88.939h.375L1 7c-.034.685 0 1.436 0 2v5c0 .657.384 1 1 1s1-.343 1-1v-1h10v1c0 .657.384 1 1 1s1-.343 1-1V9l-.003-.754-.876.875ZM5.001 10H3V8h2v2Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const InterfaceKnownVehicleIcon = convertIcon(Icon, 'interface-known-vehicle');
export default InterfaceKnownVehicleIcon;
