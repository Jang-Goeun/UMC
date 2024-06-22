import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SideBar = (onClick) => {
  return (
    <SideWapper onClick={onClick.onClick}>
      <div className="linkWapper">
        <NavLink to="/login">로그인</NavLink>
        <NavLink to="/signup">회원가입</NavLink>
        <NavLink to="/popular">Popular</NavLink>
        <NavLink to="/nowplaying">Now Playing</NavLink>
        <NavLink to="/toprated">Top Rated</NavLink>
        <NavLink to="/upcoming">Upcoming</NavLink>
      </div>
    </SideWapper>
  );
};

const SideWapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 5%;
  left: 0;
  background-color: #0b132a;

  .linkWapper {
    display: grid;
    position: absolute;
    grid-template-columns: 1fr;
    padding: 10px;

    a {
      font-size: 20px;
      padding: 15px 10px;
      text-decoration: none;
      color: white;
      &:hover {
        cursor: pointer;
        color: #e4b940;
        font-weight: 700;
      }
    }
  }
`;
