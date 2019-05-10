import * as React from "react";

import { Container, Description, Image } from "./styles";

interface CardProps {
  className?:string;
  isReversed?: boolean;
  src: string;
  text: string;
}

const Card: React.FC<CardProps> = ({ className, src, text, isReversed }) => (
  <Container className={className} isReversed={isReversed}>
    <Image src={src} />
    <Description>{text}</Description>
  </Container>
);

Card.defaultProps = {
  isReversed: false,
};

export default Card;
