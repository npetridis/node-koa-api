import { Movies } from '../../../domain';

const getMovieById = async ctx => {
  try {
    const movie = await Movies.getMovieById(ctx.params.id);
    if (movie) {
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        payload: movie
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        status: 'error',
        message: 'The movie does not exist.'
      };
    }
  } catch (error) {
    console.log(error.message);
    if (error.name === 'CastError') {
      ctx.status = 404;
      ctx.body = {
        status: 'error',
        message: 'The movie does not exist.'
      };
    } else {
      ctx.status = 500;
      ctx.body = {
        status: 'error',
        // message: error.message || 'Sorry, an error has occurred.'
        message: 'Sorry, an error has occurred.'
      };
    }
  }
};

export default getMovieById;
