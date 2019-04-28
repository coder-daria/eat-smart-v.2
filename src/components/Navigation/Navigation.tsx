import React from "react";

import { LINKS } from "../../static/hardcoded";

import Logo from "../Logo";

import { Container, Link, Links } from "./styles";

const Navigation: React.FC = () => (
  <Container>
    <Logo />
    <Links>
      {LINKS.map((link, index) => {
        const { isActive, text } = link;

        return <Link key={index + text} active={isActive}>{text}</Link>
      })}
    </Links>
  </Container>
);

export default Navigation;
