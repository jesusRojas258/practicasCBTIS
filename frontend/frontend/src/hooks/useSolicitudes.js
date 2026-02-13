/**
 * @file:       useAdmin.js
 * @project:    PracticasCbtis
 * @brief:      Logicapara mostrar alumnos
 * @author:     Jesus Rojas
 * @date:       24-01-2026
 * 
 * @details:    Este archivo contiene la lógica para mostrar todas
 *              las solicitudes de alumnos
*/


export async function mostrarSolicitudes(){
   

    try{

         const response = await fetch("http://localhost:3000/api/cuentas/obtenerSolicitudes",

             {
                method:"GET",
                headers:{
                    "Content-type": "application/json",
                },
            }
        );

        const data = await response.json();


        return data;


    }catch (error) {
        console.error(error);
        return [];
    }
    
}

export async function aceptarSolicitud(id) {
    const response = await fetch("http://localhost:3000/api/aceptarSolicitud", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ id_solicitud: id })
    });

    return response.json();
}

export async function rechazarSolicitud(id) {
    const response = await fetch("http://localhost:3000/api/eliminarSolicitud", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ id_solicitud: id })
    });

    return response.json();
}


