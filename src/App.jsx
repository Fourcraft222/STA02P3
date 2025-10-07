import { useState } from 'react'
import Header from './components/Header'
import MovieCatalog from './components/MovieCatalog'
import MovieDetails from './components/MovieDetails'
import Favorites from './components/Favorites'
import './App.css'

function App() {
  const [activeView, setActiveView] = useState('catalog')
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [favorites, setFavorites] = useState([])

  const addToFavorites = (movie) => {
    if (!favorites.find(fav => fav.id === movie.id)) {
      setFavorites([...favorites, movie])
    }
  }

  const removeFromFavorites = (movieId) => {
    setFavorites(favorites.filter(fav => fav.id !== movieId))
  }

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie)
    setActiveView('details')
  }

  const renderContent = () => {
    switch(activeView) {
      case 'catalog':
        return <MovieCatalog 
          onMovieSelect={handleMovieSelect}
          favorites={favorites}
          onAddToFavorites={addToFavorites}
        />
      case 'details':
        return <MovieDetails 
          movie={selectedMovie}
          onBack={() => setActiveView('catalog')}
          onAddToFavorites={addToFavorites}
          isFavorite={favorites.find(fav => fav.id === selectedMovie?.id)}
        />
      case 'favorites':
        return <Favorites 
          favorites={favorites}
          onMovieSelect={handleMovieSelect}
          onRemoveFromFavorites={removeFromFavorites}
        />
      default:
        return <MovieCatalog onMovieSelect={handleMovieSelect} />
    }
  }

  return (
    <div className="App">
      <Header />
      <nav className="main-nav">
        <button 
          className={activeView === 'catalog' ? 'active' : ''}
          onClick={() => setActiveView('catalog')}
        >
          🎬 Catálogo
        </button>
        <button 
          className={activeView === 'favorites' ? 'active' : ''}
          onClick={() => setActiveView('favorites')}
        >
          ❤️ Favoritos ({favorites.length})
        </button>
      </nav>
      
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  )
}

export default App