import styled from "@emotion/styled";

export const AppBarRoot = styled.header`
  position: relative;
  z-index: 4;
  background-color: blue;
  
  @media print {
    display: none;
  }
`;
