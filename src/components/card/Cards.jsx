import React, { useEffect, useState, useContext } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./Cards.css";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cards = ({ movie }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  const { addMovieToWatchlist, addMovieToWatched, watchlist, watched } =
    useContext(GlobalContext);

  let storedMovie = watchlist.find((o) => o.id === movie.id);
  let storedMovieWatched = watched.find((o) => o.id === movie.id);

  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  const watchedDisabled = storedMovieWatched ? true : false;

  const notifyWatched = () => toast("Successfully watched");
  const notifyWatchList = () => toast("Successfully Watch List");

  return (
    <>
      {isLoading ? (
        <div className="cards">
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        <Link
          to={`/movie/${movie.id}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <div className="cards">
            <img
              className="cards_img"
              src={`${movie ? movie.image.original : ""}`}
            />
            <div className="cards_overlay">
              <div className="cards_title">{movie ? movie.name : ""}</div>
              <div className="cards_runtime">
                <i className="fas fa-star me-2" />
                <span className="card_rating">
                  {movie ? movie.rating.average : ""}
                </span>
                <div className="controls">
                  <button
                    className="btn watchList"
                    disabled={watchlistDisabled}
                    onClick={(e) => {
                      addMovieToWatchlist(movie);
                      e.preventDefault();
                      notifyWatchList();
                    }}
                  >
                    Add to Watchlist
                  </button>

                  <button
                    className="btn watched"
                    disabled={watchedDisabled}
                    onClick={(e) => {
                      addMovieToWatched(movie);
                      e.preventDefault();
                      notifyWatched();
                    }}
                  >
                    Add to Watched
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default Cards;

// DONE
