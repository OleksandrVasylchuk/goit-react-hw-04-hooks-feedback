import styled from "@emotion/styled/macro";

export const List = styled.ul`
  margin: 0 auto;
  text-align: center;
  padding: 0;
`;

export const Item = styled.li`
  list-style: none;
  font-size: 20px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
