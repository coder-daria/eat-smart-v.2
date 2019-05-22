import React from "react";

import { isArray } from "../../utils/helpers";

import { Path, SVG } from "./styles";
import ICONS from "./icons";

interface IconProps {
  className?: string;
  fill?: string;
  iconHeight?: number;
  iconName: string;
  iconSize?: number;
  iconWidth?: number;
  onClick?: (e:any) => any;
}

const Icon:React.FC<IconProps> = ({
  className,
  fill,
  iconHeight,
  iconName,
  iconSize,
  iconWidth,
  onClick,
 }) => {
  return (
    <SVG
      name={iconName}
      aria-hidden
      className={className}
      fill={fill}
      height={iconHeight || iconSize}
      onClick={onClick}
      viewBox="0 0 32 32"
      width={iconWidth || iconSize}
    >
      {isArray(ICONS[iconName]) ? (
        ICONS[iconName].map((path, i) => (
          <Path d={path} key={`${iconName + i}`} />
        ))
      ) : (
        <Path d={ICONS[iconName]} />
      )}
    </SVG>
  );
};

Icon.defaultProps = {
  fill: "white",
  iconHeight: 0,
  iconSize: 12,
  iconWidth: 0,
};

export default Icon;
