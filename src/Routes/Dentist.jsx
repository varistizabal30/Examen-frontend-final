import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Dentist = () => {
  const [data, setData] = useState();
  const param = useParams();

  async function searchDentist() {
    try {
      const response = await (
        await fetch(`https://jsonplaceholder.typicode.com/users/${param.id}`)
      ).json();
      setData(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    searchDentist();
  }, []);


  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>Detail Dentist</h1>
      {data ? (
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
              <td>Website</td>
            </tr>
            <tr>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.phone}</td>
              <td>{data.website}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>Cargando...</p>
      )}
    </>
  );
};

export default Dentist;
