import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { useParams } from "react-router-dom";
import Table from "../Components/Table";
import styles from "../Styles/table.module.css";
import styles2 from "../Styles/app.module.css";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Dentist = () => {
  const { theme } = useContext(AppContext);
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
    <main className={`${styles2[theme]}`}>
      <div className={styles2.titleContainer}>
        <h1 className={styles2.title}>Detail Dentist</h1>
        <section className={styles.divTable}>
          {data ? (
            <Table
              name={data.name}
              email={data.email}
              phone={data.phone}
              website={data.website}
            ></Table>
          ) : (
            <p>Loading...</p>
          )}
        </section>
      </div>
    </main>
  );
};

export default Dentist;
