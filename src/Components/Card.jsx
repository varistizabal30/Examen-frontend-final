import React from "react";


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
        <h3>{dentist.name}</h3>
        <h3>{dentist.username}</h3>
        <button onClick={addFav} className="favButton">Fav</button>
    </div>
  );
};

export default Card;
