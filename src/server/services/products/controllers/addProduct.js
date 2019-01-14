import { Products } from '../../../domain';

/*
Dependency injection, inject product to help with testing

const addProduct = Product => async (ctx) => { ...
*/

const addProduct = async ctx => {
  try {
    console.log('ADD Product', ctx.request.body);
    const product = await Products.saveProduct(ctx.request.body);
    if (product) { // TODO maybe due to try catch the if else is not needed
      ctx.status = 201;
      ctx.body = {
        status: 'success',
        payload: product
      };
    } else {
      ctx.status = 500;
      ctx.body = {
        status: 'error',
        message: 'Something went wrong.'
      };
    }
  } catch (error) {
    console.log(error);
    ctx.status = 500;
    ctx.body = {
      status: 'error',
      message: error.message || 'Sorry, an error has occurred.'
    };
  }
};

export default addProduct;
