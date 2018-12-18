import Router from 'koa-router';
import { 
  register,
  login,
  status
} from '../controllers';

const authRouter = new Router();

authRouter
  // .prefix('/auth')
  .post('/register', register)
  .post('login', login)
  .get('/status', status);
  
export default authRouter;