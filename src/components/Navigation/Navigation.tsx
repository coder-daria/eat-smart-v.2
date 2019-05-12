import * as React from "react";

import { links } from "../../static/hardcoded";

import palette from "../GlobalThemeProvider/palette";

import Logo from "../Logo";

import { Container, Links, ScLink } from "./styles";

const activeStyle = {
  color: palette.peach.dark50
};

const Navigation: React.FC = () => (
  <Container>
    <Logo />
    <Links>
      {links.map((link, index) => {
        const { text } = link;
        const key = index + link.to;

        return (
        <ScLink 
          activeStyle={activeStyle}
          key={key} 
          to={link.to}
        >
          {text}
        </ScLink>
        )
      })}
    </Links>
  </Container>
);

export default Navigation;
