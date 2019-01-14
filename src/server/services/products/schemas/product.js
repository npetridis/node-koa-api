const categorySchema = {
  'type': 'string',
  // 'properties': {
  //   'title': 'string'
  // }
};

const productSchema = {
  'type': 'object',
  'properties': {
    'title': {
      'type': 'string',
      'maxLength': 20
    },
    'categories': {
      'type': 'array',
      'items': {
        '#ref': categorySchema
      }
    },
    'description': {
      'type': 'string',
      'maxLength': 100
    },
    'price': {
      'type': 'number',
    },
    'stock': {
      'type': 'number',
    }
  },
  'required': [
    'title',
    'categories',
    'description',
    'price',
    'stock'
  ]
};

export default productSchema;
