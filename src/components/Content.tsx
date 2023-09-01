import { ContentHeader } from './ContentHeader';
import { MoviesCardList } from './MoviesCardList';

import '../styles/content.scss';

export type Movie = {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface ContentProps {
  selectedGenre: {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  };

  movies: Array<Movie>;
}

export function Content({ selectedGenre, movies }: ContentProps) {
  // Complete aqui

  return (
    <>
      <ContentHeader title={selectedGenre.title} />

      <MoviesCardList movies={movies} />
    </>
  );
}