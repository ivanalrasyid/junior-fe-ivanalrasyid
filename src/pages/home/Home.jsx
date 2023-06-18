import React, { useEffect, useState } from "react";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import MovieList from "../../components/movieList/MovieList";
import Footer from "../../components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import { useParams } from "react-router-dom";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    fetch("http://api.tvmaze.com/shows?page=1")
      .then((response) => response.json())
      .then((result) => setPopularMovies(result))
      .catch((error) => console.log(error));
  };

  const newArr = popularMovies.splice(0, 5);

  return (
    <>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
        >
          {newArr.map((movie) => (
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/movie/${movie.id}`}
            >
              <div className="posterImage">
                <img
                  className="posterCarousel"
                  src={`${movie ? movie.image.original : ""}`}
                />
              </div>
              <div className="posterImage_overlay">
                <div className="posterImage_title">
                  {movie ? movie.name : ""}
                </div>
                <div className="posterImage_runtime">
                  {movie ? movie.relase_date : ""}
                  <span className="posterImage_rating">
                    {movie ? movie.rating.average : ""}
                    <i className="fas fa-star" />{" "}
                  </span>
                </div>
                <span className="posterImage_description">
                  {movie ? movie.summary : ""}
                </span>
              </div>
            </Link>
          ))}
        </Carousel>
        <MovieList />
        <Footer />
        <ToastContainer />
      </div>
    </>
  );
};

export default Home;

// DONE
