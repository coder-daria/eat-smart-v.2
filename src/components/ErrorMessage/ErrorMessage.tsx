import React from "react";

import { Message } from "./styles";

interface ErrorMessageProps {
  children: string;
}

const ErrorMessage: React.FC<ErrorMessageProps>= ({children}) => <Message>{children}</Message>;

export default ErrorMessage;
