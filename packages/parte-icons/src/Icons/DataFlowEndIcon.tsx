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
        d="M9.702 7.31c.176.176.293.41.293.684a.976.976 0 0 1-.283.695c-1.888 1.91-2.892 2.918-3.011 3.027-.179.164-.42.284-.693.284a.995.995 0 0 1-.997-.985c0-.274.112-.541.292-.72.12-.12.624-.551 1.514-1.293H.98c-.536 0-.975-.47-.975-1.008 0-.537.439-.996.975-.996h5.837c-.895-.752-1.4-1.187-1.514-1.304a1.03 1.03 0 0 1-.292-.705A1 1 0 0 1 6 4c.272 0 .52.108.695.294.117.124 1.12 1.13 3.006 3.016ZM13 11.002c-1.657 0-3-1.347-3-3.008a3.004 3.004 0 0 1 3-3.007c1.657 0 3 1.346 3 3.007a3.004 3.004 0 0 1-3 3.008Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const DataFlowEndIcon = convertIcon(Icon, 'data-flow-end');

export default DataFlowEndIcon;
