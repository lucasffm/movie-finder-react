import styled from "styled-components";
import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";

export const Container = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  background: var(--white);
  height: 64px;
  box-shadow: 10px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;

  padding: 0 20px;
`;

export const Logo = styled.img`
  height: 64px;
`;
