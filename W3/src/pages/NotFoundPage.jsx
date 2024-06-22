import { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const NotFoundPage = () => {
  return (
    <ErrorContainer>
      <div className="oops">Oops!</div>
      <div>예상치 못한 에러가 발생했습니다 ;</div>
      <div className="not_found">Not Found</div>
      <Link to="/" className="move_to_main">
        메인으로 이동하기
      </Link>
    </ErrorContainer>
  );
};

const ErrorContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  .oops {
    font-size: 35px;
    font-weight: bold;
  }

  .not_found {
    font-style: italic;
  }

  .move_to_main {
    text-decoration: none;
    color: white;
    font-size: 20px;
  }
`;
