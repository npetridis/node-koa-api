import Router from 'koa-router';
import passport from 'koa-passport';

import { 
  getAllMovies, 
  getMovieById, 
  addMovie, 
  updateMovie,
  deleteMovie
} from '../controllers/movieControllers';

const movieRouter = new Router();

movieRouter
  // .prefix('/api')
  .get('/', async (ctx) => {
    ctx.body = {
      status: 200,
      message: 'hello, world!'
    };
  })
  .get('/movies', passport.authenticate('local'), getAllMovies)
  .get('/movies/:id', getMovieById)
  .post('/movies', addMovie)
  .put('/movies/:id', updateMovie)
  .delete('/movies/:id', deleteMovie);
  
export default movieRouter;