import { Movie } from '../../../models';

const getAllMovies = async (ctx) => {
  try {
    const movies = await Movie.find();
    ctx.body = movies;
    ctx.status = 200;
  } catch(error) {
    console.log(error); 
  }
}

const getMovieById = async (ctx) => {
  try {
    const movie = await Movie.findById(ctx.params.id);
    if (movie) {
      ctx.body = movie
      ctx.status = 200;  
    } else {
      ctx.status = 404;
    }  
  } catch(error) {
    console.log(error);
  }
}

const addMovie = async (ctx) => {
  try {
    const movie = await new Movie(ctx.request.body).save();
    if (movie.length) {
      ctx.status = 201;
      ctx.body = {
        status: 'success',
        data: movie
      };
    } else {
      ctx.status = 400;
      ctx.body = {
        status: 'error',
        message: 'Something went wrong.'
      };
    }
  } catch(error) {
    console.log(error);
    ctx.status = 400;
    ctx.body = {
      status: 'error',
      message: error.message || 'Sorry, an error has occurred.'
    };
  }
}

const updateMovie = async (ctx) => { // TODO: validate body schema
  try {
    const movie = await Movie.findOneAndUpdate(
      { _id: ctx.params.id },
      ctx.request.body
    );
    if (movie.length) {  // if update 200 or 204
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        data: movie
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        status: 'error',
        message: 'That movie does not exist.'
      };
    }
  } catch (error) {
    console.log(error);
    ctx.status = 400;
    ctx.body = {
      status: 'error',
      message: error.message || 'Sorry, an error has occurred.'
    };
  }
}

const deleteMovie = async (ctx) => {
  try {
    const movie = await Movie.deleteOne(ctx.request.body);
    if (movie.length) {
      ctx.status = 200; // TODO check return status
      ctx.body = {
        status: 'success',
        data: movie
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        status: 'error',
        message: 'That movie does not exist.'
      };
    }
  } catch(error) {
    console.log(error);
    ctx.status = 400;
    ctx.body = {
      status: 'error',
      message: error.message || 'Sorry, an error has occurred.'
    };
  }
}

export {
  getAllMovies,
  getMovieById,
  addMovie,
  updateMovie,
  deleteMovie
}