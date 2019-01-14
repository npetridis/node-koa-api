import { authenticator, validator } from '../../middleware';
import { product as productSchema } from './schemas';
import {
  getAllProducts,
  getProductById,
  addProduct,
  deleteProduct
} from './controllers';

const prefix = '/api'; // TODO to /api na fugei apo edw

const routes = [
  {
    method: 'GET',
    route: '/products',
    handlers: [getAllProducts]
  },
  {
    method: 'GET',
    route: '/products/:id',
    handlers: [getProductById]
  },
  {
    method: 'POST',
    route: '/products',
    handlers: [authenticator, validator(productSchema), addProduct]
  },
  // {
  //   method: 'DELETE',
  //   route: '/products/:id',
  //   handlers: [authenticator, deleteProduct]
  // }
];

export default {
  prefix,
  routes
};
