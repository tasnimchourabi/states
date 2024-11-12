import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ movies,del,like ,recherche}) => {
  return (
    <div className="card-container">
      {movies.filter(el=>el.name.toUpperCase().includes(recherche.toUpperCase().trim())).map((el) => (
        <MovieCard  el={el} key={el.id} del={del} like={like} />
      ))}
    </div>
  )
}

export default MovieList
