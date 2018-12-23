import { Movies } from '../../../domain';

const getAllMovies = async (ctx) => {
  try {
    const movies = await Movies.getAllMovies();
    ctx.status = 200;
    ctx.body = {
      status: 'success',
      payload: movies
    };
  } catch (error) {
    console.log(error);
    ctx.status = 500;
    ctx.body = {
      status: 'error',
      message: error.message || 'Sorry, an error has occurred.'
    };
  }
}

export default getAllMovies;