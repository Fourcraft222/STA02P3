function Favorites({ favorites, onMovieSelect, onRemoveFromFavorites }) {
  if (favorites.length === 0) {
    return (
      <div className="favorites-empty">
        <div className="empty-state">
          <h2>❤️ Tus Favoritos</h2>
          <div className="empty-icon">📽️</div>
          <p>Aún no has agregado películas a tus favoritos</p>
          <p>Explora el catálogo y marca las películas que más te gusten</p>
        </div>
      </div>
    )
  }

  const totalDuration = favorites.reduce((total, movie) => {
    const duration = parseInt(movie.duration)
    return total + duration
  }, 0)

  const averageRating = (favorites.reduce((total, movie) => total + movie.rating, 0) / favorites.length).toFixed(1)

  const genreCount = favorites.reduce((count, movie) => {
    count[movie.genre] = (count[movie.genre] || 0) + 1
    return count
  }, {})

  const favoriteGenre = Object.keys(genreCount).reduce((a, b) => 
    genreCount[a] > genreCount[b] ? a : b
  )

  return (
    <div className="favorites">
      <div className="favorites-header">
        <h2>❤️ Tus Películas Favoritas</h2>
        <div className="favorites-stats">
          <div className="stat">
            <span className="stat-number">{favorites.length}</span>
            <span className="stat-label">Películas</span>
          </div>
          <div className="stat">
            <span className="stat-number">{Math.floor(totalDuration / 60)}h {totalDuration % 60}m</span>
            <span className="stat-label">Duración Total</span>
          </div>
          <div className="stat">
            <span className="stat-number">⭐ {averageRating}</span>
            <span className="stat-label">Calificación Promedio</span>
          </div>
          <div className="stat">
            <span className="stat-number">{favoriteGenre}</span>
            <span className="stat-label">Género Favorito</span>
          </div>
        </div>
      </div>

      <div className="favorites-grid">
        {favorites.map(movie => (
          <div key={movie.id} className="favorite-card">
            <div className="favorite-poster" onClick={() => onMovieSelect(movie)}>
              {movie.poster}
            </div>
            <div className="favorite-info">
              <h3 onClick={() => onMovieSelect(movie)}>{movie.title}</h3>
              <div className="favorite-meta">
                <span>{movie.year}</span>
                <span>⭐ {movie.rating}</span>
                <span>{movie.genre}</span>
              </div>
              <p className="favorite-description">
                {movie.description.substring(0, 100)}...
              </p>
              <div className="favorite-actions">
                <button 
                  className="btn-primary"
                  onClick={() => onMovieSelect(movie)}
                >
                  Ver Detalles
                </button>
                <button 
                  className="btn-remove"
                  onClick={() => onRemoveFromFavorites(movie.id)}
                  title="Quitar de favoritos"
                >
                  🗑️
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="favorites-summary">
        <h3>📊 Resumen de tus favoritos</h3>
        <div className="genre-distribution">
          <h4>Distribución por géneros:</h4>
          {Object.entries(genreCount).map(([genre, count]) => (
            <div key={genre} className="genre-stat">
              <span className="genre-name">{genre}</span>
              <div className="genre-bar">
                <div 
                  className="genre-fill" 
                  style={{ width: `${(count / favorites.length) * 100}%` }}
                ></div>
              </div>
              <span className="genre-count">{count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Favorites