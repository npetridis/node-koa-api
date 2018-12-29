const movieSchema = {
  'type': 'object',
  'properties': {
    'title': {
      'type': 'string',
      'maxLength': 30
    },
    'genre': {
      'type': 'string',
      'maxLength': 30
    },
    'rating': {
      'type': 'number'
    }
  },
  'required': [
    'title',
    'genre',
    'rating'
  ]
};

export default movieSchema;
