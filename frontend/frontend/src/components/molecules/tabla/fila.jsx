function Fila({ alumno, acciones }) {
  return (
    <tr>
      <td>{alumno.nombres}</td>
      <td>{alumno.apellidos}</td>
      <td>{alumno.correo}</td>
      <td>
        <div className="table-actions">
          {acciones}
        </div>
      </td>
    </tr>
  );
}

export default Fila;
