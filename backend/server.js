/**
 * @file:       server.js
 * @project:    PracticasCbtis
 * @brief:      Punto de arranque del servidor
 * author:      Jesus Rojas
 * @date:       24-01-2026
*/

require("dotenv").config();
const app = require("./src/app");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});
