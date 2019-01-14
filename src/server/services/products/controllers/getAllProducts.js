import { Products } from '../../../domain';

const getAllProducts = async ctx => {
  try {
    const products = await Products.getAllProducts();
    ctx.status = 200;
    ctx.body = {
      status: 'success',
      payload: products
    };
  } catch (error) {
    console.log(error);
    ctx.status = 500;
    ctx.body = {
      status: 'error',
      message: error.message || 'Sorry, an error has occurred.'
    };
  }
};

export default getAllProducts;
