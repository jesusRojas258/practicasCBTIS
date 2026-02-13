/**
 * @file:       cuenta.model.js
 * @project:    PracticasCbtis
 * @brief:      Modelo para la tabla cuentas
 * author:      Jesus Rojas
 * @date:       24-01-2026
 */

const pool = require ("../config/database");

//se solicita la cuenta, añadiendo los datos de la solicitud a la tabla "solicitud_cuentas" en la basew d datos 
const SolicitarCuentaNueva = {

    solicitarCuentaNueva: async ( nombres, apellidos, correo, passwordHash ) => {
        const query =`
        INSERT into solicitud_cuentas ( nombres, apellidos, correo, password )
        VALUES ( $1, $2, $3, $4 )
        RETURNING *
        `;
        const values =[ nombres, apellidos, correo, passwordHash ];
        const { rows } = await pool.query(query, values);
        return rows[0];


    }
};

//se muestran los datos de la tabla tabla de las solicitudes "solicitud_cuentas"
const MostrarSolicitudes = {

  obtenerSolicitudes: async () => {
    const query = `
      SELECT id_solicitud, nombres, apellidos, correo
      FROM solicitud_cuentas
      ORDER BY id_solicitud ASC
    `;

    const { rows } = await pool.query(query);
    return rows;
  }

};

//se acepta la cuenta, los datos se mandan a la tabla "Alumnos" y se eliminan de "solicitud_cuenta" 
const AceptarCuenta = {

}

module.exports = { SolicitarCuentaNueva,MostrarSolicitudes,AceptarCuenta };