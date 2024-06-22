import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const MovieCard = ({ list }) => {
  const navigate = useNavigate();
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handlerMovieDetail = () => {
    navigate(`/detail/${list.id}`, {
      state: {
        original_title: list.original_title,
        backdrop_path: list.backdrop_path,
        poster_path: list.poster_path,
        rate: list.vote_average,
        release_date: list.release_date,
        overview: list.overview,
        // id: list.id,
      },
    });
  };

  return (
    <MovieCardContainer
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className="movieCard">
        <div className="movie_thumnail">
          <img
            src={`http://image.tmdb.org/t/p/w500/` + list.poster_path}
            alt="영화 썸네일"
          />
        </div>
        <div className="movie_info">
          <div className="wrapper">
            <span className="movie_title">{list.title}</span>
            <div className="rating_container">
              <span className="movie_rating"> ⭐️ {list.vote_average}</span>
            </div>
          </div>
        </div>
      </div>
      <HoverContainer
        className={isHovering ? "movie_description" : "movie_noDescription"}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={handlerMovieDetail}
      >
        <div className="des_title">{list.title}</div>
        <div className="des_summary">{list.overview}</div>
      </HoverContainer>
    </MovieCardContainer>
  );
};

const HoverContainer = styled.div`
  position: absolute;
  &.movie_noDescription {
    opacity: 0;
    visibility: hidden;
  }
  &.movie_description {
    opacity: 1;
    visibility: visible;
    width: 250px;
    height: 465px;
    border-radius: 15px;
    background-color: rgba(1, 1, 1, 0.7);
    color: #fff;

    .des_title {
      padding: 20px;
    }
    .des_summary {
      height: 170px;
      width: 210px;
      padding-left: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

export const MovieCardContainer = styled.div`
  position: relative;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: #1e3269;

  span {
    color: #fff;
    font-size: 14px;
    font-weight: 700;
  }
  .movie_thumnail {
    img {
      border-radius: 15px 15px 0 0;
      width: 250px;
    }
  }
  .movie_info {
    width: 250px;
    border-radius: 0 0 15px 15px;
    background-color: #1e3269;
    height: 80px;
    .wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 5px;
    }
    span {
      padding: 5px;
      /* text-wrap: nowrap; */
    }
  }
`;
