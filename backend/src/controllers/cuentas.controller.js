/**
 * @file:       cuentas.controller.js
 * @project:    PracticasCbtis
 * @brief:      Controlador para la gestión de cuentas de usuario
 * @author:     Jesus Rojas
 * @date:       24-01-2026
 * 
 * @details:    Este archivo contiene la lógica de negocio relacionada con
 *              la creación, actualización y eliminación de cuentas de usuario.
*/

const bcrypt = require ("bcrypt");

const {SolicitarCuentaNueva} = require("../models/cuenta.model");
const {MostrarSolicitudes} = require("../models/cuenta.model")


exports.solicitarCuentaNueva = async (req, res) => {
    try {
        const { nombres, apellidos, correo, password } = req.body;

        //encripta el password
        const saltRounds = 10;
        const passwordHash = await bcrypt.hash(password, saltRounds)

        const cuenta = await SolicitarCuentaNueva.solicitarCuentaNueva(
            nombres,
            apellidos,
            correo,
            passwordHash
        );

        res.status(201).json(cuenta);

    } catch (error) {
        console.error("❌ ERROR REAL:", error); // 🔥 CLAVE
        res.status(500).json({
            mensaje: "Error al crear la cuenta",
            error: error.message
        });
    }
};

exports.obtenerSolicitudes = async (req, res) => {
  try {
    const solicitudes = await MostrarSolicitudes.obtenerSolicitudes();

    res.status(200).json(solicitudes);

  } catch (error) {
    console.error("❌ ERROR REAL:", error);
    res.status(500).json({
      mensaje: "Error al obtener las solicitudes",
      error: error.message
    });
  }
};

