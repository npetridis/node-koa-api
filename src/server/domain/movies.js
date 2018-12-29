import { Movie } from '../models';

const projection = '_id title genre rating';

const Movies = {};

Movies.getAllMovies = () => Movie.find({}, projection);

Movies.getMovieById = id => Movie.findById(id, projection);

Movies.saveMovie = movie => new Movie(movie).save();

Movies.updateMovie = (id, movie) => Movie.findOneAndUpdate({ _id: id }, movie);

Movies.deleteMovie = id => Movie.findByIdAndDelete(id);

export default Movies;
