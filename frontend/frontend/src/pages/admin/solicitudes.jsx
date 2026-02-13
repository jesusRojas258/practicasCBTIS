import Button from "../../components/atoms/button";
import Fila from "../../components/molecules/tabla/fila";
import Encabezado from "../../components/molecules/tabla/encabezado";
import "./../../components/molecules/tabla/tabla.css";

import { useState } from "react";
import { useEffect } from "react";

import { 
    mostrarSolicitudes, 
    aceptarSolicitud, 
    rechazarSolicitud 
} from "../../hooks/useSolicitudes"

async function handleAceptar(id) {
    try {
        await aceptarSolicitud(id);

        // Quitamos la fila del estado
        setData(prev => prev.filter(item => item.id_solicitud !== id));

    } catch (error) {
        console.error("Error al aceptar:", error);
    }
}

async function handleRechazar(id) {
    try {
        await rechazarSolicitud(id);

        setData(prev => prev.filter(item => item.id_solicitud !== id));

    } catch (error) {
        console.error("Error al rechazar:", error);
    }
}



function AdminPage(){

    const [data,setData] = useState([]);

    useEffect(() => {
        async function cargarSolicitudes() {
            const solicitudes = await mostrarSolicitudes();
            setData(solicitudes || []); 
        }
        cargarSolicitudes();
    }, []);

    return(
        <div>
            <table className="table-container">
                <thead>
                    <Encabezado columnas={["Nombres","Apellidos", "Correo", "Acciones"]} />
                </thead>

                <tbody>
                    {data.map((solicitud) => (
                        <Fila
                            key={solicitud.id_solicitud}
                            alumno={solicitud}
                            acciones={
                            <>
                                <Button 
                                    buttonTxt="Aceptar" 
                                    className="edit"
                                    onClick={() => console.log(solicitud.id_solicitud)}
                                />

                                <Button 
                                    buttonTxt="Rechazar" 
                                    className="delete"
                                    onClick={() => handleRechazar(solicitud.id_solicitud)}
                                />

                            </>
                            }
                        />
                    ))}
                </tbody>
            </table>

        </div>

    );

}
export default AdminPage;