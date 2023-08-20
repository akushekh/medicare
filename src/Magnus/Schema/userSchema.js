const UsersSchema = {
  type: "object",
  properties: {
    firstName: { type: "string", minLength: 3, maxLength: 50 },
    lastName: { type: "string", minLength: 3, maxLength: 50 },
    email: { type: "string", minLength: 5, maxLength: 255 },
    phoneNumber: { type: "string" },
    password: { type: "string", minLength: 8 },
  },
  required: ["firstName", "lastName", "email", "phoneNumber", "password"],
};

module.exports = { UsersSchema };
