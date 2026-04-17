function Navbar({ movie, setMovie, searchMovie, setResults }) {
  return (
    <div style={styles.nav}>
      {/* ✅ Logo click works now */}
      <h2
        style={styles.logo}
        onClick={() => {
          setMovie("");
          setResults([]);
        }}
      >
        🎬 MovieApp
      </h2>

      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search movies..."
          value={movie}
          onChange={(e) => setMovie(e.target.value)}
          style={styles.input}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              searchMovie();
            }
          }}
          onFocus={(e) =>
            (e.target.parentElement.style.boxShadow =
              "0 0 10px rgba(229, 9, 20, 0.8)")
          }
          onBlur={(e) =>
            (e.target.parentElement.style.boxShadow =
              "0 0 10px rgba(0,0,0,0.5)")
          }
        />

        <button onClick={searchMovie} style={styles.button}>
          🔍
        </button>
      </div>
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#000",
  },

  logo: {
    color: "#e50914",
    fontWeight: "bold",
    cursor: "pointer", // 👈 makes it feel clickable
  },

  searchContainer: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#1c1c1c",
    borderRadius: "30px",
    padding: "5px",
    boxShadow: "0 0 10px rgba(0,0,0,0.5)",
  },

  input: {
    border: "none",
    outline: "none",
    background: "transparent",
    color: "white",
    padding: "10px 15px",
    width: "250px",
    fontSize: "14px",
  },

  button: {
    backgroundColor: "#e50914",
    border: "none",
    borderRadius: "50%",
    width: "35px",
    height: "35px",
    color: "white",
    cursor: "pointer",
  },
};

export default Navbar;
