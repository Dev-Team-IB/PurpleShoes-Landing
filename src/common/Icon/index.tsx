import { IconProps, SvgIconProps } from "../types";

export const SvgIcon = ({ src, width, height }: IconProps) => (
  <img src={`/img/svg/${src}`} alt={src} width={width} height={height} />
);

export const ImageIcon = ({ src, width, height }: IconProps) => (
  <img src={`/img/image/${src}`} alt={src} width={width} height={height} />
);
