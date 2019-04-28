import React from "react";

import { Container, Image } from "./styles";

interface CardProps {
  text: string;
  src: string;
}

const Card: React.FC<CardProps> = ({ src, text }) => (
  <Container>
    <Image src={src} />
    <p>{text}</p>
  </Container>
);

export default Card;
