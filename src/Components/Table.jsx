import React from "react";

const columnas = ["Name", "Email", "Phone", "Website"];

function Table(props) {
  return (
    <table>
      <thead>
        <tr>
          {columnas.map((columna) => (
            <th key={columna}>{columna}</th>
          ))}
        </tr>
      </thead>
      <tbody>
      <tr>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
            <td>{props.website}</td>
          </tr>
      </tbody>
    </table>
  );
}

export default Table;
