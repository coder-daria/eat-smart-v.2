import React from "react";

import { Message } from "./styles";

interface ErrorMessageProps {
  children: string;
  error: boolean;
}

const ErrorMessage: React.FC<ErrorMessageProps>= ({ children, error }) => (
  <Message error={error}>{children}</Message>
);

export default ErrorMessage;
