import { validator } from '../../middleware';
import {
  register as registerSchema,
  login as loginSchema
} from './schemas';
import {
  register,
  login,
  logout,
  status
} from './controllers';

const prefix = '/auth';

const routes = [
  {
    method: 'POST',
    route: '/register',
    handlers: [validator(registerSchema), register]
  },
  {
    method: 'POST',
    route: '/login',
    handlers: [validator(loginSchema), login]
  },
  {
    method: 'GET',
    route: '/logout',
    handlers: [logout]
  },
  {
    method: 'GET',
    route: '/status',
    handlers: [status]
  }
];

export default {
  prefix,
  routes
};
