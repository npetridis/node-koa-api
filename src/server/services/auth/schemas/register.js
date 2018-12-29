const registerSchema = {
  'type': 'object',
  'properties': {
    'username': {
      'type': 'string',
      'minLength': 4
    },
    'password': {
      'type': 'string',
      'minLength': 8,
      'maxLength': 16,
      'pattern': '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
    },
    'email': {
      'type': 'string',
      'format': 'email'
    }
  }
};

export default registerSchema;
// Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
