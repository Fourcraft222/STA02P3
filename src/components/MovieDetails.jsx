function MovieDetails({ movie, onBack, onAddToFavorites, isFavorite }) {
  if (!movie) {
    return (
      <div className="movie-details">
        <p>No se ha seleccionado ninguna película</p>
        <button onClick={onBack}>Volver al catálogo</button>
      </div>
    )
  }

  return (
    <div className="movie-details">
      <button className="back-button" onClick={onBack}>
        ← Volver al catálogo
      </button>
      
      <div className="movie-hero">
        <div className="movie-poster-detail">
          {movie.poster}
        </div>
        
        <div className="movie-info-detail">
          <h1>{movie.title}</h1>
          <div className="movie-meta-detail">
            <span className="year">{movie.year}</span>
            <span className="duration">{movie.duration}</span>
            <span className="rating">⭐ {movie.rating}/10</span>
          </div>
          
          <div className="movie-genre-detail">
            <span className="genre-tag">{movie.genre}</span>
          </div>
          
          <p className="director">
            <strong>Director:</strong> {movie.director}
          </p>
          
          <div className="movie-actions-detail">
            <button className="btn-play">
              ▶️ Reproducir
            </button>
            <button 
              className={`btn-favorite-detail ${isFavorite ? 'active' : ''}`}
              onClick={() => onAddToFavorites(movie)}
            >
              {isFavorite ? '❤️ En Favoritos' : '🤍 Agregar a Favoritos'}
            </button>
            <button className="btn-share">
              📤 Compartir
            </button>
          </div>
        </div>
      </div>
      
      <div className="movie-description-section">
        <h2>Sinopsis</h2>
        <p className="movie-description-full">
          {movie.description}
        </p>
      </div>
      
      <div className="movie-stats">
        <div className="stat-card">
          <h3>Año de Estreno</h3>
          <p>{movie.year}</p>
        </div>
        <div className="stat-card">
          <h3>Duración</h3>
          <p>{movie.duration}</p>
        </div>
        <div className="stat-card">
          <h3>Calificación</h3>
          <p>⭐ {movie.rating}/10</p>
        </div>
        <div className="stat-card">
          <h3>Género</h3>
          <p>{movie.genre}</p>
        </div>
      </div>
      
      <div className="related-section">
        <h2>Información Adicional</h2>
        <div className="additional-info">
          <div className="info-item">
            <strong>Director:</strong> {movie.director}
          </div>
          <div className="info-item">
            <strong>Género:</strong> {movie.genre}
          </div>
          <div className="info-item">
            <strong>Calificación IMDb:</strong> {movie.rating}/10
          </div>
          <div className="info-item">
            <strong>Año:</strong> {movie.year}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails