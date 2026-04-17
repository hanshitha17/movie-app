import MovieCard from "./MovieCard";

function MovieList({ results, openModal }) {
  return (
    <div style={styles.container}>
      {results.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          openModal={openModal}
        />
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
};

export default MovieList;