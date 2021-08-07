import React from "react";
import logo from "../../assets/logo.png";

import { Container, Logo, LogoContainer } from "./styles";

function Header() {
  return (
    <Container boxShadow="md" p="2" rounded="xs" bg="white">
      <LogoContainer to="/">
        <Logo src={logo}></Logo>
      </LogoContainer>
    </Container>
  );
}

export default Header;
