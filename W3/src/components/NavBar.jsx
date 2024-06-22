import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { SideBar } from "./SideBar";

export const NavBar = () => {
  const [page, setPage] = useState("logo");
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 페이지 상태 핸들러
  const handlerPageRouter = (value) => {
    setIsOpen(false);
    setPage(value);
  };

  const handleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavWrapper>
      <NavLink
        to="/"
        className={`${page === "logo" && "link"}`}
        onClick={() => handlerPageRouter("logo")}
      >
        UMC Movie
      </NavLink>
      {width > 900 ? (
        <div className="linkContainer">
          <NavLink
            to="/login"
            className={`${page === "login" ? "active" : "link"}`}
            onClick={() => handlerPageRouter("login")}
          >
            로그인
          </NavLink>

          <NavLink
            to="/signup"
            className={`${page === "signup" ? "active" : "link"}`}
            onClick={() => handlerPageRouter("signup")}
          >
            회원가입
          </NavLink>

          <NavLink
            to="/popular"
            className={`${page === "popular" ? "active" : "link"}`}
            onClick={() => handlerPageRouter("popular")}
          >
            Popular
          </NavLink>
          <NavLink
            to="/nowplaying"
            className={`${page === "nowplaying" ? "active" : "link"}`}
            onClick={() => handlerPageRouter("nowplaying")}
          >
            Now Playing
          </NavLink>
          <NavLink
            to="/toprated"
            className={`${page === "toprated" ? "active" : "link"}`}
            onClick={() => handlerPageRouter("toprated")}
          >
            Top Rated
          </NavLink>
          <NavLink
            to="/upcoming"
            className={`${page === "upcoming" ? "active" : "link"}`}
            onClick={() => handlerPageRouter("upcoming")}
          >
            Upcoming
          </NavLink>
        </div>
      ) : (
        <div onClick={handleSidebar}>
          <MenuIcon className="icon" />
        </div>
      )}
      {isOpen ? <SideBar onClick={handleSidebar} /> : <></>}
    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  height: 30px;
  background-color: #000020;
  position: fixed;
  top: 0;
  width: -webkit-fill-available;
  z-index: 1000; /* 다른 요소보다 상위에 배치 */
  .logo {
    font-weight: 600;
    font-size: 18px;
  }

  .link {
    &:hover {
      cursor: pointer;
      color: #e4b940;
      font-weight: 700;
    }
  }

  .active {
    text-decoration: none;
    color: #e4b940;
    font-weight: 700;
  }

  .linkContainer {
    display: flex;
    gap: 30px;
  }

  .icon {
    color: white;
    font-size: 24px;
    cursor: pointer;
    margin-right: 10px;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
