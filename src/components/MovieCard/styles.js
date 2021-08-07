import { Box } from "@chakra-ui/react";
import styled from "styled-components";

export const MovieCardContainer = styled(Box)`
  border: none;
  border-radius: 10px;
  color: #000;

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
