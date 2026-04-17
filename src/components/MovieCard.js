function MovieCard({ movie, openModal }) {
  return (
    <div
      style={styles.card}
      onClick={() => openModal(movie.id)}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.08)";
        e.currentTarget.style.boxShadow =
          "0 10px 25px rgba(229, 9, 20, 0.6)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div style={styles.imageContainer}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          style={styles.image}
        />
        <div style={styles.overlay}></div>

        <p style={styles.rating}>⭐ {movie.vote_average}</p>

        <h3 style={styles.title}>{movie.title}</h3>
      </div>
    </div>
  );
}

const styles = {
  card: {
    width: "200px",
    margin: "15px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    borderRadius: "10px",
    overflow: "hidden",
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    width: "100%",
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "50%",
    background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
  },
  title: {
    position: "absolute",
    bottom: "10px",
    left: "10px",
    fontSize: "14px",
  },
  rating: {
    position: "absolute",
    top: "10px",
    right: "10px",
    backgroundColor: "rgba(0,0,0,0.7)",
    padding: "5px",
    borderRadius: "5px",
    fontSize: "12px",
    color: "gold",
  },
};

export default MovieCard;
