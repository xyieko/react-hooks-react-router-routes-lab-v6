import { movies } from "../data";
import MovieCard from "../components/MovieCard";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Home;
