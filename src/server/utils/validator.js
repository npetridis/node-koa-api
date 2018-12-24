import Ajv from 'ajv';

const ajv = new Ajv();

const validator = schema => {
  // console.log('AAAAA', schema)
  const validate = ajv.compile(schema);
  return async (ctx, next) => {
    const valid = validate(ctx.request.body);
    if (valid) {
      console.log('validation successful');
      await next();    
    } else {
      console.log('validation failed:\n', validate.errors);
      ctx.status = 400;
      ctx.body = {
        errors: validate.errors
      };
    }
  };
}



// const validator = ajv => schema => obj => ajv.validate(schema, obj)(new Ajv());

export default validator;