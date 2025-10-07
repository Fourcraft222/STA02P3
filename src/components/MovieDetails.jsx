import { useEffect, useState } from 'react'

function MovieDetails({ movie, onBack, onAddToFavorites, isFavorite }) {
  const [apiMovie, setApiMovie] = useState(null)
  const [actors, setActors] = useState([])

  useEffect(() => {
    if (!movie?.id) return
    // Obtener datos completos de la película
    fetch(`http://localhost:3001/movies/${movie.id}`)
      .then(res => res.json())
      .then(data => {
        setApiMovie(data)
        // Obtener actores
        fetch('http://localhost:3001/actors')
          .then(res => res.json())
          .then(allActors => {
            const movieActors = (data.actors || []).map(aid => allActors.find(a => a.id === aid)).filter(Boolean)
            setActors(movieActors)
          })
      })
      .catch(() => setApiMovie(null))
  }, [movie])

  if (!movie) {
    return (
      <div className="movie-details">
        <p>No se ha seleccionado ninguna película</p>
        <button onClick={onBack}>Volver al catálogo</button>
      </div>
    )
  }

  // Usar los datos de la API directamente
  const details = apiMovie ? {
    ...movie,
    title: apiMovie.name || movie.name || 'Título no disponible',
    name: apiMovie.name || movie.name || 'Título no disponible',
    year: apiMovie.year || movie.year || 'Año no disponible',
    actors: apiMovie.actors || []
  } : {
    ...movie,
    title: movie.name || movie.title || 'Título no disponible',
    name: movie.name || movie.title || 'Título no disponible'
  }

  return (
    <div className="movie-details">
      <button className="back-button" onClick={onBack}>
        ← Volver al catálogo
      </button>
      <div className="movie-hero">
        <div className="movie-poster-detail">
          {details.poster}
        </div>
        <div className="movie-info-detail">
          <h1>{details.title}</h1>
          <div className="movie-meta-detail">
            <span className="year">{details.year}</span>
            <span className="duration">{details.duration || 'Duración no disponible'}</span>
            <span className="rating">⭐ {details.rating || 'N/A'}/10</span>
          </div>
          <div className="movie-genre-detail">
            <span className="genre-tag">{details.genre || 'Sin género'}</span>
          </div>
          <p className="director">
            <strong>Director:</strong> {details.director || 'Director no disponible'}
          </p>
          <div className="movie-actions-detail">
            <button className="btn-play">
              ▶️ Reproducir
            </button>
            <button 
              className={`btn-favorite-detail ${isFavorite ? 'active' : ''}`}
              onClick={() => onAddToFavorites(details)}
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
          {details.description}
        </p>
      </div>
      <div className="movie-stats">
        <div className="stat-card">
          <h3>Año de Estreno</h3>
          <p>{details.year}</p>
        </div>
        <div className="stat-card">
          <h3>Duración</h3>
          <p>{details.duration}</p>
        </div>
        <div className="stat-card">
          <h3>Calificación</h3>
          <p>⭐ {details.rating}/10</p>
        </div>
        <div className="stat-card">
          <h3>Género</h3>
          <p>{details.genre}</p>
        </div>
      </div>
      <div className="related-section">
        <h2>Actores Principales</h2>
        <ul>
          {actors.length > 0 ? actors.map(actor => (
            <li key={actor.id}><strong>{actor.name}</strong> ({actor.born})</li>
          )) : <li>No hay actores registrados</li>}
        </ul>
        <h2>Información Adicional</h2>
        <div className="additional-info">
          <div className="info-item">
            <strong>Director:</strong> {details.director}
          </div>
          <div className="info-item">
            <strong>Género:</strong> {details.genre}
          </div>
          <div className="info-item">
            <strong>Calificación IMDb:</strong> {details.rating}/10
          </div>
          <div className="info-item">
            <strong>Año:</strong> {details.year}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails