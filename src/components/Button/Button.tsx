import React from "react";

import Icon from "../Icon";

import { ButtonContainer, Text }from "./styles";

interface ButtonProps {
  children: string;
  color?: string;
  iconFill?: string;
  iconName?: string;
  iconPosition?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  children,
  color,
  iconFill,
  iconName,
  iconPosition,
  onClick,
  ...props
}) => (
  <ButtonContainer 
    color={color} 
    iconPosition={iconPosition} 
    onClick={onClick}
    {...props}
  >
    <Text>{children}</Text>
    {iconName && <Icon fill={iconFill} iconName={iconName} />}
  </ButtonContainer>
);

Button.defaultProps = {
  color: "pink",
  iconPosition: "right",
}

export default Button;
