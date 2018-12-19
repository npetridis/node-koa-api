import Router from 'koa-router';
import { 
  register,
  login,
  logout,
  status
} from '../controllers';

const authRouter = new Router();

authRouter
  // .prefix('/auth')
  .post('/register', register)
  .post('/login', login)
  .get('/logout', logout)
  .get('/status', status);
  
export default authRouter;