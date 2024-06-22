import { useLocation } from "react-router-dom";
import styled from "styled-components";

export const MovieDetailPage = () => {
  const state = useLocation().state;

  const {
    original_title,
    backdrop_path,
    poster_path,
    rate,
    release_date,
    overview,
    id,
  } = state;
  const movie_rating = rate && "⭐️".repeat(Math.floor(rate));
  const summary = overview
    ? overview
    : "TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다.";

  const MovieDetailContainer = styled.div`
    background-image: url(${"http://image.tmdb.org/t/p/w500/" + backdrop_path});
    background-repeat: no-repeat;
    background-size: cover;
    background-color: rgba(32, 35, 75, 0.9);
    background-blend-mode: multiply;
    padding: 200px 250px;
    display: flex;

    @media (max-width: 900px) {
      /* align-items: center; */
      padding: 80px 180px;
      flex-direction: column;
      background-image: none;
      background-color: hsl(233, 43%, 16%);
    }

    @media (max-width: 750px) {
      flex-direction: column;
      padding: 80px 100px;
      background-image: none;
      background-color: hsl(233, 43%, 16%);
    }

    @media (max-width: 600px) {
      flex-direction: column;
      padding: 80px 20px;
      background-image: none;
      background-color: hsl(233, 43%, 16%);
    }

    .backgroundImg {
      background-color: rgb(255, 255, 255, 0.5);
    }

    .movie_thumnail {
      img {
        width: 370px;
        height: 490px;

        @media (max-width: 600px) {
          width: 250px;
          height: 350px;
        }
      }
    }

    .movie_detail {
      width: 600px;
      display: flex;
      flex-direction: column;
      gap: 35px;
      padding: 100px 0 0 100px;

      @media (max-width: 900px) {
        padding: 20px 0 0 0;
        width: 500px;
      }

      @media (max-width: 600px) {
        padding: 20px 0 0 0;
        width: 400px;
        gap: 20px;
      }

      .title {
        font-weight: bold;
        font-size: 30px;

        @media (max-width: 900px) {
          font-size: 24px;
        }

        @media (max-width: 600px) {
          font-size: 20px;
        }
      }

      .detail {
        font-size: 15px;

        @media (max-width: 900px) {
          font-size: 14px;
        }

        @media (max-width: 600px) {
          font-size: 12px;
        }
      }
    }
  `;

  return (
    <MovieDetailContainer>
      <div className="movie_thumnail">
        <img
          src={"http://image.tmdb.org/t/p/w500/" + poster_path}
          alt="영화 썸네일"
        />
      </div>
      <div className="movie_detail">
        <div className="title">{original_title}</div>
        <div>평점 {movie_rating}</div>
        <div>개봉일 {release_date}</div>
        <div>줄거리</div>
        <div className="detail">{summary}</div>
      </div>
    </MovieDetailContainer>
  );
};
