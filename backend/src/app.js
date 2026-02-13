/**
 * @file:       app.js
 * @project:    PracticasCbtis
 * @brief:      Configuración principal de la aplicación Express
 * author:      Jesus Rojas
 * @date:       24-01-2026
*/
require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

// ✅ CORS
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// Middlewares
app.use(express.json());

// Rutas

//cuentas
const cuentasRoutes = require("./routes/cuentas.routes");
app.use("/api/cuentas", cuentasRoutes);
const alumnosRoutes = require("./routes/alumnos.routes");
app.use("/api/obtenerSolicitudes", alumnosRoutes);



module.exports = app;

