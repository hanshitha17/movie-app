function Modal({ selectedMovie, closeModal }) {
  if (!selectedMovie) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button onClick={closeModal} style={styles.close}>
          ✖
        </button>

        <h2>{selectedMovie.title}</h2>

        {/* 🎥 Trailer */}
        {selectedMovie.trailerKey && (
          <iframe
            width="100%"
            height="250"
            src={`https://www.youtube.com/embed/${selectedMovie.trailerKey}`}
            title="Trailer"
            allowFullScreen
            style={{ borderRadius: "10px", marginBottom: "10px" }}
          />
        )}

        {/* 📄 Description */}
        <p>{selectedMovie.overview}</p>

        {/* ⭐ Rating */}
        <p>⭐ {selectedMovie.vote_average}</p>

        {/* 🎬 Streaming Platforms */}
        {selectedMovie.providers && selectedMovie.providers.length > 0 && (
          <div>
            <h3>Available on:</h3>

            <div style={styles.providers}>
              {selectedMovie.providers.map((p) => (
                <img
                  key={p.provider_id}
                  src={`https://image.tmdb.org/t/p/w45${p.logo_path}`}
                  alt={p.provider_name}
                  title={p.provider_name}
                  style={styles.providerLogo}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },

  modal: {
    background: "rgba(255,255,255,0.1)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    borderRadius: "15px",
    padding: "20px",
    color: "white",
    width: "500px",
    maxHeight: "90vh",
    overflowY: "auto",
    border: "1px solid rgba(255,255,255,0.2)",
  },

  close: {
    float: "right",
    background: "red",
    color: "white",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
    borderRadius: "5px",
  },

  providers: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
    flexWrap: "wrap",
  },

  providerLogo: {
    width: "40px",
    height: "40px",
    borderRadius: "5px",
    backgroundColor: "white",
    padding: "5px",
  },
};

export default Modal;