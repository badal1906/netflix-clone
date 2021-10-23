import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./Row.css"
const base_url = "http://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  //a snippet of code which runs of based on specific conditions
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {/* several row__posters */}
        {movies.map((movie) => (
          <img
          key={movie.id}// will only render whats necessary
            className="row__poster"
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
      {/* container-> posters */}
    </div>
  );
}

export default Row;
