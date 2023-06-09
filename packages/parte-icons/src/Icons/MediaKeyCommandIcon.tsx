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
        d="M12 9h-1V7h1c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3v1H7V4c0-1.66-1.34-3-3-3S1 2.34 1 4s1.34 3 3 3h1v2H4c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3v-1h2v1c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3Zm0-6c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1ZM4 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1Zm0-8c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1Zm5 4H7V7h2v2Zm3 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const MediaKeyCommandIcon = convertIcon(Icon, 'media-key-command');
export default MediaKeyCommandIcon;
