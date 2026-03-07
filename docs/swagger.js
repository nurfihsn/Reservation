const swaggerJsdoc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Hotel Reservation API",
            version: "1.0.0",
            description: "API untuk sistem reservasi hotel"
        }
    },
    apis: ["./src/routes/*.js"]
};

module.exports = swaggerJsdoc(options);