import React, { useState } from "react";
import Card from "../Components/Card";
import style from '../Styles/favs.module.css'
import { FaTrashAlt } from "react-icons/fa";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [, setfavsState] = useState([]);
  const localData = JSON.parse(localStorage.getItem("favs"));


    function handleDelete(id){
      const newLocalData = localData.filter((d) => d.id !== id);
      localStorage.setItem("favs", JSON.stringify(newLocalData));
      setfavsState(newLocalData);
    }
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className={style.container}>
        {localData.length ? (
          localData.map((d) => (
            <div key={d.id} className={style.cardContainer}>
            <button onClick={() => handleDelete(d.id)} className={style.delete}><FaTrashAlt/></button>
            <Card
              id={d.id}
              name={d.name}
              username={d.username}
            ></Card>
            </div>            
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default Favs;