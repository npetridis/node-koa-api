import { Movies } from '../../../domain';

/*
Dependency injection, inject movie to help with testing

const addMovie = Movie => async (ctx) => { ...
*/

const addMovie = async ctx => {
  try {
    const movie = await Movies.saveMovie(ctx.request.body);
    if (movie) { // TODO maybe due to try catch the if else is not needed
      ctx.status = 201;
      ctx.body = {
        status: 'success',
        payload: movie
      };
    } else {
      ctx.status = 500;
      ctx.body = {
        status: 'error',
        message: 'Something went wrong.'
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

export default addMovie;
