import { Movie } from './models';

const Movies = {};

Movies.getAll = async () => {
  try {
    return await Movie.find();
  } catch (err) {
    console.log(err);
    return err;
    }
  }
}

Movies.getById = async (id) => {
  try {
    return await Movie.findById(id);
  } catch (err) {
    console.log(err);
    return err;
  }
}

Movies.saveMovie = async (movie) => {
  try {
    return await new Movie(movie).save();
  } catch (err) {
    console.log(err);
    return err;
  }
}

Movies.updateMovie = async (id, movie) => {
  try {
    return await Movie.findOneAndUpdate({ _id: id }, movie);
  } catch (err) {
    console.log(err);
    return err;
  }
}

Movies.deleteMovie = async (id) => {
  try {
    return await Movie.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    return err;
  }
}