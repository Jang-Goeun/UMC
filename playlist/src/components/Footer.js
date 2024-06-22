import { Fragment } from "react";
import styled from "styled-components";

export const Footer = () => {
  return (
    <FooterWrapper>
      <h1>University MakeUs Challenge</h1>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5852fe;
  color: white;
  font-weight: bolder;
  height: 70px;
`;
