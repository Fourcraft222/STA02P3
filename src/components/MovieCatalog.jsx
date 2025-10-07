import { useState, useEffect } from 'react'

function MovieCatalog({ onMovieSelect, favorites, onAddToFavorites }) {
  const [movies, setMovies] = useState([])
  const [filteredMovies, setFilteredMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('all')
  const [sortBy, setSortBy] = useState('name')
  const [error, setError] = useState("")

  useEffect(() => {
    fetch('http://localhost:3001/movies')
      .then(res => {
        if (!res.ok) throw new Error('Error al conectar con la API')
        return res.json()
      })
      .then(data => {
        if (!Array.isArray(data) || data.length === 0) {
          setError('No se encontraron películas en la API')
          setMovies([])
          setFilteredMovies([])
        } else {
          setMovies(data)
          setFilteredMovies(data)
          setError("")
        }
      })
      .catch((err) => {
        setError('Error al obtener películas: ' + err.message)
        setMovies([])
        setFilteredMovies([])
      })
  }, [])

  useEffect(() => {
    let filtered = movies.filter(movie => 
      movie.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    if (selectedGenre !== 'all') {
      filtered = filtered.filter(movie => movie.genre === selectedGenre)
    }

    filtered.sort((a, b) => {
      switch(sortBy) {
        case 'year':
          return b.year - a.year
        case 'name':
        default:
          return a.name.localeCompare(b.name)
      }
    })

    setFilteredMovies(filtered)
  }, [searchTerm, selectedGenre, sortBy, movies])

  const genres = ['all', ...new Set(movies.map(movie => movie.genre).filter(Boolean))]

  return (
    <div className="movie-catalog">
      {error && (
        <div style={{color: 'red', margin: '20px 0', fontWeight: 'bold'}}>
          {error}
        </div>
      )}

      <section className="featured-section">
        <h2>🎬 Películas Disponibles</h2>
        <div className="featured-movies">
          {filteredMovies.slice(0, 3).map(movie => (
            <div key={movie.id} className="featured-movie" onClick={() => onMovieSelect(movie)}>
              <div className="movie-poster-large">🎭</div>
              <div className="featured-info">
                <h3>{movie.name}</h3>
                <p>{movie.year} • {movie.actors?.length || 0} actores</p>
                <p className="description">Película disponible en nuestro catálogo</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="catalog-controls">
        <div className="search-controls">
          <input
            type="text"
            placeholder="Buscar películas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          
          {genres.length > 1 && (
            <select 
              value={selectedGenre} 
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="genre-select"
            >
              {genres.map(genre => (
                <option key={genre} value={genre}>
                  {genre === 'all' ? 'Todos los géneros' : genre}
                </option>
              ))}
            </select>
          )}

          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-select"
          >
            <option value="name">Ordenar por Nombre</option>
            <option value="year">Ordenar por Año</option>
          </select>
        </div>
      </section>

      <section className="movies-grid">
        <h2>📚 Catálogo Completo ({filteredMovies.length} películas)</h2>
        <div className="movies-container">
          {filteredMovies.map(movie => (
            <div key={movie.id} className="movie-card">
              <div className="movie-poster" onClick={() => onMovieSelect(movie)}>
                🎬
              </div>
              <div className="movie-info">
                <h3 onClick={() => onMovieSelect(movie)}>{movie.name}</h3>
                <div className="movie-meta">
                  <span>{movie.year}</span>
                  <span>🎭 {movie.actors?.length || 0} actores</span>
                </div>
                <p className="movie-genre">Película</p>
                <div className="movie-actions">
                  <button 
                    className="btn-primary"
                    onClick={() => onMovieSelect(movie)}
                  >
                    Ver Detalles
                  </button>
                  <button 
                    className={`btn-favorite ${favorites?.find(fav => fav.id === movie.id) ? 'active' : ''}`}
                    onClick={() => onAddToFavorites(movie)}
                  >
                    {favorites?.find(fav => fav.id === movie.id) ? '❤️' : '🤍'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredMovies.length === 0 && !error && (
          <div className="no-results">
            <p>No se encontraron películas que coincidan con tu búsqueda</p>
            <button onClick={() => {
              setSearchTerm('')
              setSelectedGenre('all')
            }}>
              Limpiar filtros
            </button>
          </div>
        )}
      </section>
    </div>
  )
}

export default MovieCatalog
