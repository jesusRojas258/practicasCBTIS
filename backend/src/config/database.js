/**
 * @file:       database.js
 * @project:    PracticasCbtis
 * @brief:      Configuración de conexión a PostgreSQL
 * @author:     Jesus Rojas
 * @date:       24-01-2026
 */

const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

pool.connect()
  .then(() => console.log("✅ Base de datos conectada"))
  .catch(err => console.error("❌ Error al conectar DB:", err));

module.exports = pool;
