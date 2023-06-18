import React, { useEffect, useState } from "react";
import Cards from "../card/Cards";
import "./MovieList.css";
import { useParams } from "react-router-dom";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    fetch("http://api.tvmaze.com/shows?page=1")
      .then((response) => response.json())
      .then((result) => setMovieList(result))
      .catch((error) => console.log(error));
  };

  const newArr = movieList.splice(0, 44);

  return (
    <div className="movie_list">
      <h2 className="list_title">{(type ? type : "POPULAR").toUpperCase()}</h2>
      <div className="list_cards">
        {newArr.map((movie) => (
          <Cards movie={movie} />
        ))}
      </div>
      {/* <div onClick={() => console.log(MovieList)}>Test</div> */}
    </div>
  );
};

export default MovieList;
