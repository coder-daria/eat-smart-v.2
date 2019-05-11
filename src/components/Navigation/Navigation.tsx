import * as React from "react";

import { links } from "../../static/hardcoded";

import Logo from "../Logo";

import { Container, Link, Links } from "./styles";

const Navigation: React.FC = () => (
  <Container>
    <Logo />
    <Links>
      {links.map((link, index) => {
        const { isActive, text } = link;

        return <Link key={index + text} active={isActive}>{text}</Link>
      })}
    </Links>
  </Container>
);

export default Navigation;
