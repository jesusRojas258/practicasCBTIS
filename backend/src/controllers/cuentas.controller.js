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

const {Cuenta} = require("../models/solicitaCuenta.model");


exports.solicitarCuentaNueva = async (req, res) => {
    try {
        const { nombres, apellidos, correo, password } = req.body;

        const cuenta = await Cuenta.crear(
            nombres,
            apellidos,
            correo,
            password
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

