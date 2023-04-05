import React from "react";
import { Link } from 'react-router-dom'
import style from '../Styles/card.module.css'
import image from "../img/pngwing.com.png"

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
    <div className={style.card} key={dentist.id}>
        <img src={image} alt="" />
        <Link className={style.name} to={`/dentist/${dentist.id}`}>{dentist.name}</Link>
        <h3 className={style.userName}>{dentist.username}</h3>
        <button onClick={addFav} className={style.fav}>Add Fav</button>
    </div>
  );
};

export default Card;
