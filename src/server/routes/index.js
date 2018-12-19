import Router from 'koa-router';
import movieRouter from './movie';
import { authRouter } from './auth';

const router = new Router();

router
  .use('/auth', authRouter.routes())
  .use('/api', movieRouter.routes());

export default router;