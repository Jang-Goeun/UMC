import styled from "styled-components";

export const Footer = () => {
  return (
    <FooterWrapper>
      <a href="https://www.themoviedb.org/">https://www.themoviedb.org/</a>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 10px;
  height: 25px;
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  background-color: #000020;
  a {
    text-decoration: none;
    color: white;
    font-size: 14px;
    font-weight: 700;
  }
`;
