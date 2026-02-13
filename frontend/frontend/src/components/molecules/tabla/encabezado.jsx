function Encabezado({ columnas }) {
  return (
    <tr>
      {columnas.map((col, index) => (
        <th key={index}>{col}</th>
      ))}
    </tr>
  );
}

export default Encabezado;