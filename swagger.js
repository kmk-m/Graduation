const outputFile = "./swagger_output.json";
const endpointsFile = [
  "./routes/dashboard/*.js",
  "./routes/auth/*.js",
  "./routes/APIRouter.js",
];
const doc = {
  info: {
    version: "1.0.0", // by default: '1.0.0'
    title: "Accept Api", // by default: 'REST API'
    description: "Documentation", // by default: ''
  },
  host: "", // by default: 'localhost:3000'
  basePath: "", // by default: '/'
  schemes: [], // by default: ['http']
  consumes: [], // by default: ['application/json']
  produces: [], // by default: ['application/json']
  tags: [
    // by default: empty Array
    {
      name: "", // Tag name
      description: "", // Tag description
    },
    // { ... }
  ],
  securityDefinitions: {}, // by default: empty object
  definitions: {}, // by default: empty object (Swagger 2.0)
  components: {}, // by default: empty object (OpenAPI 3.x)
};
import swagger from "swagger-autogen";
const swaggerAutogen = swagger();

swaggerAutogen(outputFile, endpointsFile, doc);
