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
        d="M15 2H6c-.28 0-.53.11-.71.29l-5 5C.11 7.47 0 7.72 0 8c0 .28.11.53.29.71l5 5c.18.18.43.29.71.29h9c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1Zm-2.29 7.29a1.003 1.003 0 0 1-1.42 1.42L10 9.41 8.71 10.7c-.18.19-.43.3-.71.3a1.003 1.003 0 0 1-.71-1.71L8.59 8l-1.3-1.29a1.003 1.003 0 0 1 1.42-1.42L10 6.59l1.29-1.29c.18-.19.43-.3.71-.3a1.003 1.003 0 0 1 .71 1.71L11.41 8l1.3 1.29Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const MediaKeyBackspaceIcon = convertIcon(Icon, 'media-key-backspace');
export default MediaKeyBackspaceIcon;
