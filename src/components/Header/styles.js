import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  background: var(--white);
  height: 64px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 64px;
  padding: 0 20px;
`;
export const Logo = styled.img`
  height: 64px;
`;
