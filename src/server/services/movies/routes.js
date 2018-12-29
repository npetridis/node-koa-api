import { authenticator, validator } from '../../middleware';
import { movie as movieSchema } from './schemas';
import {
  getAllMovies,
  getMovieById,
  addMovie,
  updateMovie,
  deleteMovie
} from './controllers';

const prefix = '/api'; // TODO to /api na fugei apo edw

const routes = [
  {
    method: 'GET',
    route: '/movies',
    handlers: [getAllMovies]
  },
  {
    method: 'GET',
    route: '/movies/:id',
    handlers: [getMovieById]
  },
  {
    method: 'POST',
    route: '/movies',
    handlers: [authenticator, validator(movieSchema), addMovie]
  },
  {
    method: 'PUT',
    route: '/movies/:id',
    handlers: [authenticator, validator(movieSchema), updateMovie]
  },
  {
    method: 'DELETE',
    route: '/movies/:id',
    handlers: [authenticator, deleteMovie]
  }
];

export default {
  prefix,
  routes
};
