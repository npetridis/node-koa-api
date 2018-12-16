import 'dotenv/config';

import Koa from 'koa';
import { User } from './models';
import mongoose from 'mongoose';

const app = new Koa();
const PORT = process.env.PORT || 1337;

// var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/imdb');

// const User = require('./models/User.js');

console.log('meraa');

app.use(async (ctx) => {
  ctx.body = {
    status: 'success',
    message: 'hello, world!'
  };
  const user = new User({
    firstName: 'Nikos', 
    lastName:'Petridis', 
    dob: new Date()
  })
  user.save();
});

const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;