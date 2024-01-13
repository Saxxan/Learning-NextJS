import React from "react";
import styled from "styled-components";

// UI components
import { CardWrapper } from "./Wrapper";

// Styled components
const CardContainer = styled(CardWrapper)`
  width: 300px;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 20px 4px rgba(32, 32, 32, 0.5);
  }

  & > img {
    object-fit: cover;
    width: 100%;
  }

  & > section {
    padding: 0 16px;
  }
`;

function Card({ children }) {
  return <CardContainer>{children}</CardContainer>;
}

export default Card;
