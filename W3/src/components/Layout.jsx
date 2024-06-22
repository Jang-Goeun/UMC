import { Fragment } from "react";
import styled from "styled-components";

export const Layout = ({ children }) => {
  const BodyLayout = styled.div`
    color: black;
    margin: 60px 0;
    padding: 16px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .element {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      grid-gap: 30px;

      @media (max-width: 1700px) {
        grid-template-columns: repeat(5, 1fr);
      }

      @media (max-width: 1400px) {
        grid-template-columns: repeat(4, 1fr);
      }

      @media (max-width: 1120px) {
        grid-template-columns: repeat(3, 1fr);
      }

      @media (max-width: 830px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (max-width: 580px) {
        grid-template-columns: 1fr;
      }
    }
  `;
  return (
    <Fragment>
      <BodyLayout>
        <div className="element">{children}</div>
      </BodyLayout>
    </Fragment>
  );
};
