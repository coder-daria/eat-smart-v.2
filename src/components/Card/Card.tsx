import * as React from "react";

import { Container, Description, Image } from "./styles";

interface CardProps {
  className?:string;
  description: string;
  isReversed?: boolean;
  src: string;
}

const Card: React.FC<CardProps> = ({
  className,
  description,
  src,
  isReversed,
}) => (
  <Container className={className} isReversed={isReversed}>
    <Image src={src} />
    <Description>{description}</Description>
  </Container>
);

Card.defaultProps = {
  isReversed: false,
};

export default Card;
