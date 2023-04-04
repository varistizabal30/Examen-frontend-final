import React from "react";
import { Link } from 'react-router-dom'


const Card = (dentist) => {

  const addFav = ()=>{
    const localData = localStorage.getItem("favs") || "[]";
    let localDataArray = JSON.parse(localData);
    const existDentist = localDataArray.some((d)=>d.id===dentist.id);
    if (!existDentist){
        localDataArray.push(dentist)        
    }
    localStorage.setItem("favs", JSON.stringify(localDataArray));
  }

  return (
    <div className="card" key={dentist.id}>
        <h3>{dentist.id}</h3>
        <Link to={`/dentist/${dentist.id}`}>{dentist.name}</Link>
        <h3>{dentist.username}</h3>
        <button onClick={addFav} className="favButton">Fav</button>
    </div>
  );
};

export default Card;
