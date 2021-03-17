import { MovieProps } from "../App";
import { MovieCard } from "./MovieCard";

type ContenProps = {
  movies: MovieProps[];
  genreTitle: string;
};

export function Content({ movies, genreTitle }: ContenProps) {
  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {genreTitle}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
