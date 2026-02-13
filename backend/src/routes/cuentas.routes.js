/**
 * @file:       cuentas.routes.js
 * @project:    PracticasCbtis
 * @brief:      Gestiona la creacion, actualizacion y eliminacion de cuentas
 * @author:     Jesus Rojas
 * @date:       24-01-2026
 * 
 * @details:    Este archivo define las rutas de las APIS que se utiliza para 
 *              El manejo de cuentas del usuario
*/

const express = require("express");
const router = express.Router();

//controlador
const cuentasController = require("../controllers/cuentas.controller");


//Rutas
router.post("/solicitarCuentaNueva", cuentasController.solicitarCuentaNueva);
//router.post("/aceptarSolicitud", cuentasController.aceptarSolicitud);
//router.post("/eliminarSolicitud", cuentasController.eliminarSolicitud);
router.get("/obtenerSolicitudes", cuentasController.obtenerSolicitudes);


module.exports = router;

