import Router from 'koa-router';
import { register } from '../controllers';

const authRouter = new Router();

authRouter
  // .prefix('/auth')
  .post('/register', register);
  
export default authRouter;