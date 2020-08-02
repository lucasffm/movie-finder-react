import styled from "styled-components";
import { Card, AutoComplete } from "antd";

export const Container = styled(Card)`
  width: 80%;
  height: 200px;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  & .ant-card-body {
    width: 100%;
  }
`;

export const MovieAutoComplete = styled(AutoComplete)`
  width: 100%;
`;
export const SearchTitle = styled.h2`
  text-align: center;
`;
