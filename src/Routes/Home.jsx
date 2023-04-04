import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { dentist, theme } = useContext(AppContext);
  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        {dentist.length ? (
          dentist.map((d) => (
            <Card
              key={d.id}
              id={d.id}
              name={d.name}
              username={d.username}
            ></Card>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </main>
  );
};

export default Home;
