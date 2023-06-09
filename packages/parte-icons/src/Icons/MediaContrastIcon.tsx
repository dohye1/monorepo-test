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
        d="M14.306 6.494H12.95a5.502 5.502 0 0 0-.527-1.261l.997-.998a.756.756 0 0 0 0-1.063l-1.063-1.064a.755.755 0 0 0-1.064 0l-.998.998a5.754 5.754 0 0 0-1.26-.527V1.224A.755.755 0 0 0 8.281.47H6.776a.755.755 0 0 0-.752.753v1.355a5.83 5.83 0 0 0-1.318.555l-.941-.941a.727.727 0 0 0-1.026 0L1.722 3.209a.727.727 0 0 0 0 1.026l.942.941a5.83 5.83 0 0 0-.556 1.318H.753A.755.755 0 0 0 0 7.247v1.506c0 .414.339.753.753.753h1.355a5.5 5.5 0 0 0 .527 1.261l-.997.998a.755.755 0 0 0 0 1.063L2.7 13.892a.756.756 0 0 0 1.064 0l.997-.998c.396.226.81.395 1.262.527v1.356c0 .414.338.752.752.752h1.506a.755.755 0 0 0 .753-.752V13.42a5.44 5.44 0 0 0 1.318-.555l.941.941a.727.727 0 0 0 1.026 0l1.026-1.026a.727.727 0 0 0 0-1.026l-.941-.94c.235-.406.423-.848.555-1.319h1.355a.755.755 0 0 0 .753-.752V7.247a.77.77 0 0 0-.762-.753Zm-6.777 5.27A3.764 3.764 0 0 1 3.765 8a3.764 3.764 0 0 1 3.764-3.765v7.53Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const MediaContrastIcon = convertIcon(Icon, 'media-contrast');
export default MediaContrastIcon;
