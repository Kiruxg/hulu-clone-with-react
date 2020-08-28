import React, { useEffect, useState } from "react";
import "./Results.css";
import VideoCard from "./VideoCard";
import Axios from "./axios.js";
import FlipMove from "react-flip-move";
import LoadingDotsIcon from "./LoadingDotsIcon";
function Results({ selectedOption }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const request = await Axios.get(selectedOption);
      console.log(request);
      setMovies(request.data.results);
      setIsLoading(false);
      return request;
    }
    fetchData();
  }, [selectedOption]);
  if (isLoading) return <LoadingDotsIcon />;

  return (
    <div className="results">
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard key={movie.id} movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
}

export default Results;
