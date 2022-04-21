import { useReducer } from "react";

import classes from "./Movie.module.css";

import Movie from "./Movie";

import * as React from "react";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

const initialState = {
  begin: true,
  movies: [],
  isLoading: false,
  error: null,
  final: null,
};
const reducer = (_state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        begin: false,

        isLoading: false,
        movies: action.payload,
        error: null,
        final: null,
      };
    case "FETCH_ERROR":
      return {
        begin: false,

        isLoading: false,
        error: "Something went wrong",
        movies: [],
        final: null,
      };
    case "FETCH_LOADING":
      return {
        begin: false,

        isLoading: true,
        error: null,
        movies: [],
        final: null,
      };
    case "FETCH_DONE":
      return {
        begin: false,

        isLoading: true,
        error: null,
        movies: [],
        final: true,
      };
  }
};

function DataFetching() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 10 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);

  async function fetchMoviesHandler() {
    let response;

    try {
      dispatch({ type: "FETCH_LOADING" });

      response = await fetch("https://swapi.dev/api/films/");
    } catch (error) {
      response = error;
    } finally {
      dispatch({ type: "FETCH_DONE" });
      if (!response.ok) {
        dispatch({ type: "FETCH_ERROR" });
      }
      if (response.ok) {
        const data = await response.json();
        dispatch({ type: "FETCH_SUCCESS", payload: data.results });
      }
    }
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section className={classes.parent}>
        {state.begin && <h2>Welcome</h2>}

        {state.isLoading && (
          <Box sx={{ width: "100%" }}>
            <LinearProgressWithLabel value={progress} />
          </Box>
        )}
        {state.error && <h2>{state.error}</h2>}
        <div>
          {state.movies.map((movie) => (
            <Movie
              key={movie.episode_id}
              title={movie.title}
              releaseDate={movie.release_date}
              openingText={movie.opening_crawl}
            />
          ))}
        </div>
      </section>
      {state.final && <h1 className={classes.parent}>Thank You</h1>}
    </React.Fragment>
  );
}

export default DataFetching;
