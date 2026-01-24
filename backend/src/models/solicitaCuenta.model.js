/**
 * @file:       cuenta.model.js
 * @project:    PracticasCbtis
 * @brief:      Modelo para la tabla cuentas
 * author:      Jesus Rojas
 * @date:       24-01-2026
 */

const pool = require ("../config/database");

const Cuenta = {

    crear: async ( nombres, apellidos, correo, password ) => {
        const query =`
        INSERT into solicitud_cuentas ( nombres, apellidos, correo, password )
        VALUES ( $1, $2, $3, $4 )
        RETURNING *
        `;
        const values =[ nombres, apellidos, correo, password ];
        const { rows } = await pool.query(query, values);
        return rows[0];


    }
};

module.exports = { Cuenta };