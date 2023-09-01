import { Movie } from "./Content"
import { MovieCard } from "./MovieCard";

import '../styles/content.scss';

interface MoviesCardListProps {
  movies: Array<Movie>;
}

export function MoviesCardList({ movies }: MoviesCardListProps) {
  return (
    <main>
      <div className="movies-list">
        {movies.map(movie => (
          <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
        ))}
      </div>
    </main>
  )
}