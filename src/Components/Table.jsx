import React from "react";
import styles from "../Styles/table.module.css";

const columns = ["Name", "Email", "Phone", "Website"];

function Table(props) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
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
