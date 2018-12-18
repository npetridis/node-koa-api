import Router from 'koa-router';
import movieRouter from './movie';
import authRouter from './auth';

const router = new Router();

// movieRouter
//   .prefix('/api')
//   .get('/', async (ctx) => {
//     ctx.body = {
//       status: 200,
//       message: 'hello, world!'
//     };
//   })
//   .get('/movies', getAllMovies)
//   .get('/movies/:id', getMovieById)
//   .post('/movies', addMovie)
//   .put('/movies/:id', updateMovie)
//   .delete('movies/:id', deleteMovie);

router
  .use('/auth', authRouter.routes())
  .use('/api', movieRouter.routes())

export default router;