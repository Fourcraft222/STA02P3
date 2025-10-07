// Utilidad para mapear datos de la API al formato esperado
function mapApiMovie(apiMovie) {
  const mapping = {
    "El Padrino": {
      genre: "Drama",
      rating: 9.2,
      duration: "175 min",
      director: "Francis Ford Coppola",
      description: "La historia de la familia Corleone bajo el patriarcado de Don Vito Corleone, centrándose en la transformación de su hijo menor, Michael, de reacio forastero a despiadado jefe de la mafia.",
      poster: "🎭",
      featured: true
    },
    "Pulp Fiction": {
      genre: "Crimen",
      rating: 8.9,
      duration: "154 min",
      director: "Quentin Tarantino",
      description: "Las vidas de dos sicarios de la mafia, un boxeador, un gángster y su esposa, y un par de bandidos de cafetería se entrelazan en cuatro historias de violencia y redención.",
      poster: "🔫",
      featured: true
    },
    "El Señor de los Anillos": {
      genre: "Fantasía",
      rating: 8.8,
      duration: "178 min",
      director: "Peter Jackson",
      description: "Un hobbit humilde se embarca en una épica aventura para destruir el Anillo Único y salvar la Tierra Media del Señor Oscuro Sauron.",
      poster: "💍",
      featured: false
    },
    "Forrest Gump": {
      genre: "Drama",
      rating: 8.8,
      duration: "142 min",
      director: "Robert Zemeckis",
      description: "Las presidencias de Kennedy y Johnson, Vietnam, Watergate y otros eventos históricos se desarrollan desde la perspectiva de un hombre de Alabama con un coeficiente intelectual de 75.",
      poster: "🏃",
      featured: false
    },
    "Inception": {
      genre: "Ciencia Ficción",
      rating: 8.7,
      duration: "148 min",
      director: "Christopher Nolan",
      description: "Un ladrón que roba secretos corporativos a través del uso de la tecnología de compartir sueños recibe la tarea inversa de plantar una idea en la mente de un CEO.",
      poster: "🌀",
      featured: true
    },
    "Matrix": {
      genre: "Ciencia Ficción",
      rating: 8.7,
      duration: "136 min",
      director: "Lana Wachowski",
      description: "Un hacker informático aprende de misteriosos rebeldes sobre la verdadera naturaleza de su realidad y su papel en la guerra contra sus controladores.",
      poster: "💊",
      featured: false
    },
    "Interstellar": {
      genre: "Ciencia Ficción",
      rating: 8.6,
      duration: "169 min",
      director: "Christopher Nolan",
      description: "Un equipo de exploradores viaja a través de un agujero de gusano en el espacio en un intento de asegurar la supervivencia de la humanidad.",
      poster: "🚀",
      featured: true
    },
    "Gladiator": {
      genre: "Acción",
      rating: 8.5,
      duration: "155 min",
      director: "Ridley Scott",
      description: "Un ex-general romano busca venganza contra el emperador corrupto que asesinó a su familia y lo envió a la esclavitud.",
      poster: "⚔️",
      featured: false
    }
  }
  const extra = mapping[apiMovie.name] || {}
  return {
    id: apiMovie.id,
    title: apiMovie.name,
    year: apiMovie.year,
    ...extra
  }
}
import { useState, useEffect } from 'react'

// Datos simulados de películas
const moviesData = [
  {
    id: 1,
    title: "El Padrino",
    year: 1972,
    genre: "Drama",
    rating: 9.2,
    duration: "175 min",
    director: "Francis Ford Coppola",
    description: "La historia de la familia Corleone bajo el patriarcado de Don Vito Corleone, centrándose en la transformación de su hijo menor, Michael, de reacio forastero a despiadado jefe de la mafia.",
    poster: "🎭",
    featured: true
  },
  {
    id: 2,
    title: "Pulp Fiction",
    year: 1994,
    genre: "Crimen",
    rating: 8.9,
    duration: "154 min",
    director: "Quentin Tarantino",
    description: "Las vidas de dos sicarios de la mafia, un boxeador, un gángster y su esposa, y un par de bandidos de cafetería se entrelazan en cuatro historias de violencia y redención.",
    poster: "🔫",
    featured: true
  },
  {
    id: 3,
    title: "El Señor de los Anillos",
    year: 2001,
    genre: "Fantasía",
    rating: 8.8,
    duration: "178 min",
    director: "Peter Jackson",
    description: "Un hobbit humilde se embarca en una épica aventura para destruir el Anillo Único y salvar la Tierra Media del Señor Oscuro Sauron.",
    poster: "💍",
    featured: false
  },
  {
    id: 4,
    title: "Forrest Gump",
    year: 1994,
    genre: "Drama",
    rating: 8.8,
    duration: "142 min",
    director: "Robert Zemeckis",
    description: "Las presidencias de Kennedy y Johnson, Vietnam, Watergate y otros eventos históricos se desarrollan desde la perspectiva de un hombre de Alabama con un coeficiente intelectual de 75.",
    poster: "🏃",
    featured: false
  },
  {
    id: 5,
    title: "Inception",
    year: 2010,
    genre: "Ciencia Ficción",
    rating: 8.7,
    duration: "148 min",
    director: "Christopher Nolan",
    description: "Un ladrón que roba secretos corporativos a través del uso de la tecnología de compartir sueños recibe la tarea inversa de plantar una idea en la mente de un CEO.",
    poster: "🌀",
    featured: true
  },
  {
    id: 6,
    title: "Matrix",
    year: 1999,
    genre: "Ciencia Ficción",
    rating: 8.7,
    duration: "136 min",
    director: "Lana Wachowski",
    description: "Un hacker informático aprende de misteriosos rebeldes sobre la verdadera naturaleza de su realidad y su papel en la guerra contra sus controladores.",
    poster: "💊",
    featured: false
  },
  {
    id: 7,
    title: "Interstellar",
    year: 2014,
    genre: "Ciencia Ficción",
    rating: 8.6,
    duration: "169 min",
    director: "Christopher Nolan",
    description: "Un equipo de exploradores viaja a través de un agujero de gusano en el espacio en un intento de asegurar la supervivencia de la humanidad.",
    poster: "🚀",
    featured: true
  },
  {
    id: 8,
    title: "Gladiator",
    year: 2000,
    genre: "Acción",
    rating: 8.5,
    duration: "155 min",
    director: "Ridley Scott",
    description: "Un ex-general romano busca venganza contra el emperador corrupto que asesinó a su familia y lo envió a la esclavitud.",
    poster: "⚔️",
    featured: false
  }
]

function MovieCatalog({ onMovieSelect, favorites, onAddToFavorites }) {
  const [movies, setMovies] = useState([])
  const [filteredMovies, setFilteredMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('all')
  const [sortBy, setSortBy] = useState('title')
  const [error, setError] = useState("")

    useEffect(() => {
      // Obtener películas desde la API
      fetch('http://localhost:3000/movies')
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
            // Mapear datos de la API al formato esperado
            const mapped = data.map(mapApiMovie)
            setMovies(mapped)
            setFilteredMovies(mapped)
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
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      movie.director.toLowerCase().includes(searchTerm.toLowerCase())
    )

    if (selectedGenre !== 'all') {
      filtered = filtered.filter(movie => movie.genre === selectedGenre)
    }

    // Ordenar películas
    filtered.sort((a, b) => {
      switch(sortBy) {
        case 'year':
          return b.year - a.year
        case 'rating':
          return b.rating - a.rating
        case 'title':
        default:
          return a.title.localeCompare(b.title)
      }
    })

    setFilteredMovies(filtered)
  }, [searchTerm, selectedGenre, sortBy, movies])

  const genres = ['all', ...new Set(movies.map(movie => movie.genre))]
  const featuredMovies = movies.filter(movie => movie.featured)

  return (
    <div className="movie-catalog">
      {error && (
        <div style={{color: 'red', margin: '20px 0', fontWeight: 'bold'}}>
          {error}
        </div>
      )}
      {/* Sección destacada */}
      <section className="featured-section">
        <h2>🔥 Películas Destacadas</h2>
        <div className="featured-movies">
          {featuredMovies.map(movie => (
            <div key={movie.id} className="featured-movie" onClick={() => onMovieSelect(movie)}>
              <div className="movie-poster-large">{movie.poster}</div>
              <div className="featured-info">
                <h3>{movie.title}</h3>
                <p>{movie.year} • {movie.genre} • ⭐ {movie.rating}</p>
                <p className="description">{movie.description.substring(0, 150)}...</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Controles de filtrado */}
      <section className="catalog-controls">
        <div className="search-controls">
          <input
            type="text"
            placeholder="Buscar películas o directores..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          
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

          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-select"
          >
            <option value="title">Ordenar por Título</option>
            <option value="year">Ordenar por Año</option>
            <option value="rating">Ordenar por Calificación</option>
          </select>
        </div>
      </section>

      {/* Grid de películas */}
      <section className="movies-grid">
        <h2>📚 Catálogo Completo ({filteredMovies.length} películas)</h2>
        <div className="movies-container">
          {filteredMovies.map(movie => (
            <div key={movie.id} className="movie-card">
              <div className="movie-poster" onClick={() => onMovieSelect(movie)}>
                {movie.poster}
              </div>
              <div className="movie-info">
                <h3 onClick={() => onMovieSelect(movie)}>{movie.title}</h3>
                <div className="movie-meta">
                  <span>{movie.year}</span>
                  <span>⭐ {movie.rating}</span>
                  <span>{movie.duration}</span>
                </div>
                <p className="movie-genre">{movie.genre}</p>
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

        {filteredMovies.length === 0 && (
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