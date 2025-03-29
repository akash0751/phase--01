import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = "be432db4"; 

  const fetchMovies = async () => {
    if (!search.trim()) return;
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`);
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setError(data.Error);
        setMovies([]);
      }
    } catch (error) {
      setError("Failed to fetch movies.");
      console.log(error)
    }

    setLoading(false);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🎬 Movie Database Search 🎥</h2>
      
      <div style={styles.searchBox}>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && fetchMovies()}
          style={styles.input}
        />
        <button onClick={fetchMovies} style={styles.button}>🔍 Search</button>
      </div>

      {loading && <p style={styles.loading}>Loading...</p>}
      {error && <p style={styles.error}>{error}</p>}

      <div style={styles.movieGrid}>
        {movies.map((movie) => (
          <div key={movie.imdbID} style={styles.movieCard}>
            <img src={movie.Poster} alt={movie.Title} style={styles.poster} />
            <h3 style={styles.movieTitle}>{movie.Title}</h3>
            <Link to={`/movie/${movie.imdbID}`} style={styles.link}>
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    backgroundColor: "#1b1b1b",
    color: "#fff",
    minHeight: "100vh",
    padding: "30px 0",
    fontFamily: "'Arial', sans-serif",
  },
  title: {
    fontSize: "28px",
    textShadow: "2px 2px 5px rgba(255, 255, 255, 0.3)",
  },
  searchBox: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    width: "50%",
    padding: "12px",
    fontSize: "16px",
    border: "2px solid #ff9800",
    borderRadius: "5px",
    backgroundColor: "#2b2b2b",
    color: "#fff",
    outline: "none",
  },
  button: {
    padding: "12px 20px",
    fontSize: "16px",
    cursor: "pointer",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#ff9800",
    color: "#fff",
    fontWeight: "bold",
    transition: "background 0.3s",
  },
  loading: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#ff9800",
  },
  error: {
    color: "red",
    fontSize: "16px",
  },
  movieGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    padding: "20px",
  },
  movieCard: {
    backgroundColor: "#2b2b2b",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(255, 255, 255, 0.2)",
    textAlign: "center",
    transition: "transform 0.3s",
  },
  poster: {
    width: "100%",
    height: "300px",
    borderRadius: "5px",
  },
  movieTitle: {
    fontSize: "16px",
    marginTop: "10px",
  },
  link: {
    display: "inline-block",
    marginTop: "10px",
    padding: "8px 12px",
    backgroundColor: "#ff9800",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    transition: "background 0.3s",
  },
};

export default Home;

