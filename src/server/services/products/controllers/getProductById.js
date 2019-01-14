import { Products } from '../../../domain';

const getProductById = async ctx => {
  try {
    const product = await Products.getProductById(ctx.params.id);
    if (product) {
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        payload: product
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        status: 'error',
        message: 'The product does not exist.'
      };
    }
  } catch (error) {
    console.log(error.message);
    if (error.name === 'CastError') {
      ctx.status = 404;
      ctx.body = {
        status: 'error',
        message: 'The product does not exist.'
      };
    } else {
      ctx.status = 500;
      ctx.body = {
        status: 'error',
        // message: error.message || 'Sorry, an error has occurred.'
        message: 'Sorry, an error has occurred.'
      };
    }
  }
};

export default getProductById;
