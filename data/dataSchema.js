export const schema = {
  type: "object",
  properties: {
    product: {
      type: "array",
      minItems: 16,
      maxItems: 30,
      items: {
        type: "object",
        properties: {
          id: {
            type: "number",
            unique: true,
            minimum: 1,
          },
          name: {
            type: "string",
          },
          author: {
            type: "string",
            faker: "name.firstName",
          },
          price: {
            type: "number",
            minimum: 2,
            exclusiveMinimum: true,
          },
          image: "https://picsum.photos/600/400/?random",
        },
        required: ["id", "name", "author", "price", "image"],
      },
    },
    users: {
      type: "array",
      minItems: 1,
      maxItems: 2,
      items: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            minimum: 1,
          },

          username: {
            type: "string",
            faker: "name.lastName",
            required: true,
          },
          email: {
            type: "string",
            faker: "internet.email",
            required: true,
          },

          password: {
            type: "string",
            maxLength: 15,
            minLength: 6,
            faker: "internet.password",
          },
        },
        required: ["id", "username", "email", "password"],
      },
    },
  },
  required: ["product", "users"],
};
