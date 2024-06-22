import { Children, Fragment, useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import { MovieCard } from "../components/MovieCard";
import styled from "styled-components";

export const PopularPage = () => {
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  console.log(loading);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNjhlZTc5NDRlYTBhNWM3Zjk0NmZmY2Q1ZGJmZGZkNCIsInN1YiI6IjY2MzhkYWNjNjY1NjVhMDEyODE2OTgxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qqf1m6FqRpLf-xacc6WhD8OAA6J6QGDvtLRW8AdWEVg",
    },
  };

  const fetchMovies = async (page) => {
    setLoading(true);

    const data = await fetch(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
      options
    )
      .then((response) => response.json())
      .catch((err) => console.error(err));
    setDataList(data.results);
    setTotalPages(data.total_pages);
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies(currentPage);
  }, [currentPage]);

  return (
    <Fragment>
      <Layout>
        {loading ? (
          <p>Loading...</p>
        ) : (
          Children.toArray(
            dataList.map((movie, index) => {
              return <MovieCard key={index} list={movie} />;
            })
          )
        )}
      </Layout>
      <PaginationContainer>
        <button
          className="page-btn"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          &lt;
        </button>
        <span className="current-page">{currentPage}</span>
        <button
          className="page-btn"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          &gt;
        </button>
      </PaginationContainer>
    </Fragment>
  );
};

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
  gap: 30px;
  .page-btn {
    padding: 10px 20px;
    margin: 0 10px;
    border: none;
    cursor: pointer;
    font-size: 24px;
    background-color: transparent;
    color: white;
    &:disabled {
      color: rgba(32, 35, 75, 0.9);
    }
  }

  .current-page {
    font-size: 20px;
    font-weight: bold;
  }
`;
