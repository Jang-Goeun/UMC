import { Children, Fragment, useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import { MovieCard } from "../components/MovieCard";

export const TopRatedPage = () => {
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(loading);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNjhlZTc5NDRlYTBhNWM3Zjk0NmZmY2Q1ZGJmZGZkNCIsInN1YiI6IjY2MzhkYWNjNjY1NjVhMDEyODE2OTgxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qqf1m6FqRpLf-xacc6WhD8OAA6J6QGDvtLRW8AdWEVg",
    },
  };

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        options
      )
        .then((response) => response.json())
        .catch((err) => console.error(err));

      setDataList(data.results);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <Fragment>
      <Layout>
        {Children.toArray(
          dataList.map((index) => {
            return <MovieCard list={index} />;
          })
        )}
      </Layout>
    </Fragment>
  );
};
