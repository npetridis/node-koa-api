// import 'dotenv/config';
// 
// import Koa from 'koa';
// import { User } from './models';
// import mongoose from 'mongoose';
// 
// import router from './routes';
// 
// const app = new Koa();
// const port = process.env.PORT || 1337;

// mongoose.connect('mongodb://localhost/imdb');

import setupServer from './setupServer';

export default setupServer;

// (async () => {
//   try {
//     const info = await connectDatabase(databaseConfig);
//     console.log(`Connected to ${info.host}:${info.port}/${info.name}`);
//   } catch (error) {
//     console.error('Unable to connect to database');
//   }
// 
//   await app.listen(port);
//   console.log(`Server started on port ${port}`);
// })();

// app.use(router.routes());

// app.use(async (ctx) => {
//   ctx.body = {
//     status: 'success',
//     message: 'hello, world!'
//   };
//   const user = new User({
//     firstName: 'Nikos', 
//     lastName:'Petridis', 
//     dob: new Date()
//   })
//   user.save();
// });

// const server = app.listen(port, () => {
//   console.log(`Server listening on port: ${port}`);
// });

// module.exports = server;