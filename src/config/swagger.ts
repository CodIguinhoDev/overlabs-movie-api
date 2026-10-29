import swaggerJsdoc from "swagger-jsdoc";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Overlabs API",
      version: "1.0.0",
      description: "Documentação da API de filmes",
    },
  },
  apis: ["./src/routes/movies.ts"],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
