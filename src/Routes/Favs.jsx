import React from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
    const localData = JSON.parse(localStorage.getItem("favs"));
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {localData.length ? (
          localData.map((d) => (
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
    </>
  );
};

export default Favs;