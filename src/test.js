const Ajv = require('ajv');

const ajv = new Ajv(); // Create Ajv instance

const schema = {
  type: 'object',
  properties: {
    firstName: { type: 'string' },
    lastName: { type: 'string' },
    email: { type: 'string' },
    phoneNumber: { type: 'string' },
    password: { type: 'string' },
  },
  required: ['firstName', 'lastName', 'email'],
};

const data = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'johndoe@example.com',
  phoneNumber: '1234567890',
  password: 'mypassword',
};

const isValid = ajv.validate(schema, data); // Validate data against schema

if (isValid) {
  console.log('Data is valid');
} else {
  console.log('Data is invalid');
  console.log(ajv.errors); // Access validation errors if any
}
