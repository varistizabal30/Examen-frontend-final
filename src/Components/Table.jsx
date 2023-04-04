import React from 'react';

const columnas = ['Nombre', 'Email', 'Teléfono', 'Website'];

function renderFila(data) {
  return (
    <tr>
      <td>{data.nombre}</td>
      <td>{data.email}</td>
      <td>{data.telefono}</td>
      <td>{data.website}</td>
    </tr>
  );
}


function Tabla(props) {
  return (
    <table>
      <thead>
        <tr>
          {columnas.map((columna) => (
            <th key={columna}>{columna}</th>
          ))}
        </tr>
      </thead>
      <tbody>{props.map(renderFila)}</tbody>
    </table>
  );
}

export default Tabla;
