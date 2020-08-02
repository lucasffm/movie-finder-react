import React from "react";
import logo from "../../assets/logo.png";

import { Container, Logo, LogoContainer } from "./styles";

function Header() {
  return (
    <Container>
      <LogoContainer to="/">
        <Logo src={logo}></Logo>
      </LogoContainer>
    </Container>
  );
}

export default Header;
