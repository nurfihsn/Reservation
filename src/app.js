const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("../docs/swagger");

const reservationRoutes = require("./routes/reservationRoutes");

const app = express();

app.use(express.json());

app.use("/api/reservations", reservationRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;