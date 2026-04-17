import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import Modal from "./components/Modal";

const API_KEY = "db14db6ed12400fbc32e078915694a41";

function App() {
  const [movie, setMovie] = useState("");
  const [results, setResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [trending, setTrending] = useState([]);

  // 🔍 Search movies
  const searchMovie = async () => {
    console.log("SEARCH TRIGGERED");

    if (!movie.trim()) return;

    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(movie)}`
    );

    const data = await res.json();

    console.log("DATA:", data);

    setResults(data.results || []);
  };

  // 🔥 Fetch trending movies
  const fetchTrending = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
    );
    const data = await res.json();
    setTrending(data.results);
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  // 🎬 Open modal with trailer
  const openModal = async (id) => {
  // 🎬 Movie details + trailer
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`
  );
  const data = await res.json();

  // 📺 Watch providers
  const providerRes = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${API_KEY}`
  );
  const providerData = await providerRes.json();

  // 🇮🇳 India providers
  const providers = providerData.results?.IN?.flatrate || [];

  // 🎥 Trailer
  const trailer = data.videos.results.find(
    (vid) => vid.type === "Trailer"
  );

  setSelectedMovie({
    ...data,
    trailerKey: trailer ? trailer.key : null,
    providers: providers,
    watchLink: providerData.results?.IN?.link || null,
  });
};

  const closeModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div>
      <Navbar
        movie={movie}
        setMovie={setMovie}
        searchMovie={searchMovie}
        setResults={setResults}
      />

      {/* 🎬 HERO SECTION (ONLY ON HOMEPAGE) */}
      {results.length === 0 && trending.length > 0 && (
        <div
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.8), transparent),
              url(https://image.tmdb.org/t/p/original${trending[0].backdrop_path})
            `,
            backgroundSize: "cover",
            height: "400px",
            display: "flex",
            alignItems: "center",
            padding: "40px",
            color: "white",
          }}
        >
          <div>
            <h1>{trending[0].title}</h1>
            <p style={{ maxWidth: "500px" }}>
              {trending[0].overview}
            </p>
          </div>
        </div>
      )}

      {/* 🔁 CONDITIONAL RENDERING */}
      {results.length > 0 ? (
        <>
          <h2 style={{ marginLeft: "20px" }}>🔍 Search Results</h2>
          <MovieList results={results} openModal={openModal} />
        </>
      ) : (
        <>
          <h2 style={{ marginLeft: "20px" }}>🔥 Trending</h2>
          <MovieList results={trending} openModal={openModal} />
        </>
      )}

      <Modal selectedMovie={selectedMovie} closeModal={closeModal} />
    </div>
  );
}

export default App;
