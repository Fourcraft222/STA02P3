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

  // Datos simulados para compatibilidad (ya que la API solo tiene id, name, year, actors)
  const totalDuration = favorites.length * 120 // Promedio de 120 minutos por película

  const averageYear = Math.round(favorites.reduce((total, movie) => total + (movie.year || 2000), 0) / favorites.length)

  const genreCount = favorites.reduce((count, movie) => {
    const genre = movie.genre || 'Película'
    count[genre] = (count[genre] || 0) + 1
    return count
  }, {})

  const favoriteGenre = Object.keys(genreCount).length > 0 
    ? Object.keys(genreCount).reduce((a, b) => genreCount[a] > genreCount[b] ? a : b)
    : 'Películas'

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
            <span className="stat-label">Duración Estimada</span>
          </div>
          <div className="stat">
            <span className="stat-number">📅 {averageYear}</span>
            <span className="stat-label">Año Promedio</span>
          </div>
          <div className="stat">
            <span className="stat-number">{favoriteGenre}</span>
            <span className="stat-label">Categoría Principal</span>
          </div>
        </div>
      </div>

      <div className="favorites-grid">
        {favorites.map(movie => (
          <div key={movie.id} className="favorite-card">
            <div className="favorite-poster" onClick={() => onMovieSelect(movie)}>
              {movie.poster || '🎬'}
            </div>
            <div className="favorite-info">
              <h3 onClick={() => onMovieSelect(movie)}>{movie.name || movie.title || 'Película sin título'}</h3>
              <div className="favorite-meta">
                <span>{movie.year}</span>
                <span>🎭 {movie.actors?.length || 0} actores</span>
                <span>{movie.genre || 'Película'}</span>
              </div>
              <p className="favorite-description">
                {movie.description ? movie.description.substring(0, 100) + '...' : 'Película disponible en tu lista de favoritos'}
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