import * as React from "react";

import Icon from "../Icon";

import { Container, Text } from "./styles";

interface SnackbarProps {
  children: string;
  className?: string;
  color?: "info" | "warning" | "error" | "success";
  iconFill?: string;
  iconName?: string;
  iconSize?: number;
  onClick?: () => void;
  shade?: "dark25" | "default" | "light25";
}

const Snackbar: React.FC<SnackbarProps> = ({ 
  children,
  className,
  color,
  iconFill,
  iconName,
  iconSize,
  shade,
}) => (
  <Container className={className} color={color} shade={shade}>
    <Icon fill={iconFill} iconName={iconName} iconSize={iconSize} />
    <Text>{children}</Text>
  </Container>
);

Snackbar.defaultProps = {
  color: "success",
  iconName: "checkmark",
  shade: "default",
}

export default Snackbar;
