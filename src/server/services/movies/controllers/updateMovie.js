import { Movies } from '../../../domain';

const updateMovie = async ctx => { // TODO: validate body schema
  try {
    const movie = await Movies.updateMovie(ctx.params.id, ctx.request.body);
    if (movie) { // if update 200 or 204
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
    console.log(error);
    ctx.status = 500;
    ctx.body = {
      status: 'error',
      message: error.message || 'Sorry, an error has occurred.'
    };
  }
};

export default updateMovie;
