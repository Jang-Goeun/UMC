import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { Children, useEffect, useState } from "react";
import { MovieCard } from "../components/MovieCard";

export const Main = () => {
  const [search, setSearch] = useState(null);
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(false);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNjhlZTc5NDRlYTBhNWM3Zjk0NmZmY2Q1ZGJmZGZkNCIsInN1YiI6IjY2MzhkYWNjNjY1NjVhMDEyODE2OTgxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qqf1m6FqRpLf-xacc6WhD8OAA6J6QGDvtLRW8AdWEVg",
    },
  };

  const fetchMovies = async (searchQuery) => {
    if (!searchQuery) return;

    const url = `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=ko-KR&page=1`;

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setDataList(data.results);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (search) {
      setLoading(true);
      const debounceTimer = setTimeout(() => {
        fetchMovies(search);
      }, 500);

      return () => clearTimeout(debounceTimer);
    } else {
      setDataList([]);
    }
  }, [search]);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <MainWrapper>
      <div className="welcome">환영합니다</div>
      <div className="search">
        <span> 📽️ Find your movies !</span>
        <div className="searchInputContainer">
          <input
            type="text"
            className="searchInput"
            onChange={handleInputChange}
          />
          <button type="button" className="btn">
            <SearchIcon className="search_icon" />
          </button>
        </div>
        {search == null ? (
          " "
        ) : loading ? (
          <div className="loding">로딩중</div>
        ) : (
          <div className="movies">
            {Children.toArray(
              dataList.map((index) => {
                return <MovieCard list={index} />;
              })
            )}
          </div>
        )}
      </div>
    </MainWrapper>
  );
};

export const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .welcome {
    background-color: black;
    width: 100%;
    height: 365px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    font-weight: 400;
  }

  .search {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    margin-top: 50px;
    span {
      font-size: 44px;
      padding-right: 70px;

      @media (max-width: 768px) {
        font-size: 32px;
        padding-right: 50px;
      }

      @media (max-width: 480px) {
        font-size: 24px;
        padding-right: 30px;
      }
    }
  }

  .searchInputContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    width: 100%;
    height: 50px;
    input {
      border-radius: 30px;
      border: none;
      width: 400px;
      height: 40px;
      padding-left: 20px;
      @media (max-width: 768px) {
        width: 300px;
        height: 35px;
      }

      @media (max-width: 480px) {
        width: 200px;
        height: 30px;
      }
    }
    button {
      border-radius: 50%;
      width: 35px;
      height: 35px;
      background-color: orange;
      border: none;
      @media (max-width: 768px) {
        width: 30px;
        height: 30px;
      }

      @media (max-width: 480px) {
        width: 25px;
        height: 25px;
      }
    }
  }

  .loding {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0b132a;
    width: 1200px;
    height: 510px;
    @media (max-width: 1250px) {
      width: 1000px;
    }

    @media (max-width: 1024px) {
      width: 800px;
    }

    @media (max-width: 768px) {
      width: 600px;
    }

    @media (max-width: 500px) {
      width: 400px;
      height: 300px;
    }
  }

  .movies {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    background-color: #0b132a;
    border-radius: 10px;
    padding: 30px 70px;
    overflow-y: auto;
    width: 1060px;
    height: 450px;
    justify-content: center;
    align-items: center;

    @media (max-width: 1250px) {
      grid-template-columns: repeat(3, 1fr);
      width: 800px;
    }

    @media (max-width: 980px) {
      grid-template-columns: repeat(2, 1fr);
      width: 500px;
    }

    @media (max-width: 680px) {
      grid-template-columns: 1fr;
      width: 260px;
    }

    span {
      font-size: 12px;
      padding: 0px 10px;
    }
    img {
      height: 375px;
    }
    .loding {
      display: flex;
      justify-content: center;
    }
  }
`;
