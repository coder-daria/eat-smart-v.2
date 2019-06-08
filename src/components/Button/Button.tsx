import React from "react";

import Icon from "../Icon";

import { ButtonContainer, Text } from "./styles";

interface ButtonProps {
  children: string;
  className?: string;
  color?: string;
  disabled?: boolean;
  iconFill?: string;
  iconName?: string;
  iconPosition?: string;
  iconSize?: number;
  onClick?: () => void;
  type?: "submit" | "button";
}

const Button: React.FC<ButtonProps> = ({ 
  children,
  className,
  color,
  disabled,
  iconFill,
  iconName,
  iconPosition,
  iconSize,
  onClick,
  type,
}) => (
  <ButtonContainer 
    className={className}
    color={color}
    disabled={disabled}
    iconPosition={iconPosition} 
    onClick={onClick}
    type={type}
  >
    <Text>{children}</Text>
    {iconName && <Icon fill={iconFill} iconName={iconName} iconSize={iconSize} />}
  </ButtonContainer>
);

Button.defaultProps = {
  color: "pink",
  iconPosition: "right",
  type: "submit",
}

export default Button;
