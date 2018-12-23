import Router from 'koa-router';
import { 
  register,
  login,
  logout,
  status
} from '../controllers';

const authRouter = new Router();

const peek = async (ctx, next) => {
  console.warn('request body:\n', ctx.request.body);
  await next();
}

authRouter
  // .prefix('/auth')
  .post('/register', peek, register)
  .post('/login', login)
  .get('/logout', logout)
  .get('/status', status);
  
export default authRouter;