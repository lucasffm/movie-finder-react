import styled from "styled-components";
import { Card } from "antd";

export const MovieCardContainer = styled(Card)`
  border: none;
  border-radius: 10px;

  .movie-info {
    padding: 20px;
  }
  & .ant-card-body {
    padding: 0;
  }
  .movie-picture {
    max-width: 100%;
    border-radius: 10px 10px 0 0;
  }
`;
