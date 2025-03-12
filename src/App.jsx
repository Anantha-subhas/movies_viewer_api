import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const API_KEY = "8572ec693ce4e52fa5befedac3e9324f";
const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results || []);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  return (
    <div className="container mt-4">
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="row">
          {movies.map((movie) => (
            <div key={movie.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
              <div className="card shadow-lg">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text text-muted">{movie.release_date}</p>
                  <button className="btn btn-primary w-100">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
