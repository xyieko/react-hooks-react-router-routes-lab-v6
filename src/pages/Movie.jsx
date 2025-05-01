import { useParams } from "react-router-dom";
import { movies } from "../data";

function Movie() {
  const { id } = useParams();
  const movie = movies.find(movie => movie.id === Number(id));

  if (!movie) return <div>Movie not found</div>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>Time: {movie.time}</p>
      <div>
        {movie.genres.map((genre, index) => (
          <span key={index}>{genre}</span>
        ))}
      </div>
    </div>
  );
}

export default Movie;