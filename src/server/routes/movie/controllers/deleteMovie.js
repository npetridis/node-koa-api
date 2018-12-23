import { Movies } from '../../../domain';

const deleteMovie = async (ctx) => {
  try {
    const movie = await Movies.deleteMovie(ctx.params.id);
    if (movie) {
      ctx.status = 200; // TODO check return status
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
    console.log(error);
    ctx.status = 500;
    ctx.body = {
      status: 'error',
      message: error.message || 'Sorry, an error has occurred.'
    };
  }
}

export default deleteMovie;