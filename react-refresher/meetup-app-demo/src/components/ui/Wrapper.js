import styled from "styled-components";

export const CardWrapper = styled.article`
  overflow: hidden;
  border-radius: 10px;
  background-color: #202020;
`;

export const CardFooter = styled.footer`
  display: flex;
  justify-content: flex-end;

  & > button {
    padding: 8px 16px;
    border: none;
    border-radius: 10px 0 10px 0;
    background-color: #b1b1f9;
    color: white;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background-color: #707cc8;
    }

    &.favorite {
      background-color: #f9b1b1;

      &:hover {
        background-color: #c87070;
      }
    }
  }
`;
