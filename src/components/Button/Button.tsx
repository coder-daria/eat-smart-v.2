import React from "react";

import Icon from "../Icon";

import { ButtonContainer, Text }from "./styles";

interface ButtonProps {
  children: string;
  className?: string;
  color?: string;
  iconFill?: string;
  iconName?: string;
  iconPosition?: string;
  iconSize?: number;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  children,
  className,
  color,
  iconFill,
  iconName,
  iconPosition,
  iconSize,
  onClick,
}) => (
  <ButtonContainer 
    className={className}
    color={color} 
    iconPosition={iconPosition} 
    onClick={onClick}
  >
    <Text>{children}</Text>
    {iconName && <Icon fill={iconFill} iconName={iconName} iconSize={iconSize} />}
  </ButtonContainer>
);

Button.defaultProps = {
  color: "pink",
  iconPosition: "right",
}

export default Button;
