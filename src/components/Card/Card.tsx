import React from "react";

import { Container, Image } from "./styles";

interface CardProps {
  className?:string;
  text: string;
  src: string;
}

const Card: React.FC<CardProps> = ({ className, src, text }) => (
  <Container className={className}>
    <Image src={src} />
    <p>{text}</p>
  </Container>
);

export default Card;
