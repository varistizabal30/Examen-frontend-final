import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import style from '../Styles/card.module.css'
import style2 from '../Styles/app.module.css'
import image from "../img/pngwing.com.png"

const Card = (dentist) => {
  const [isFav, setIsFav] = useState(false);
  useEffect(() => {
    const localData = localStorage.getItem("favs") || "[]";
    const localDataArray = JSON.parse(localData);
    const existDentist = localDataArray.some((d) => d.id === dentist.id);
    if (existDentist) {
      setIsFav(true);
    }
  }, [dentist.id]);

  const addFav = () => {
    const localData = localStorage.getItem("favs") || "[]";
    let localDataArray = JSON.parse(localData);
    const existDentist = localDataArray.some((d) => d.id === dentist.id);
    if (!existDentist) {
      localDataArray.push(dentist);
      setIsFav(true);
      localStorage.setItem("favs", JSON.stringify(localDataArray));
    }
  };

  return (
    <div className={style.card} key={dentist.id}>
        <img src={image} alt="" />
        <Link className={style.name} to={`/dentist/${dentist.id}`}>{dentist.name}</Link>
        <h3 className={style.userName}>{dentist.username}</h3>
        {!dentist.isDisable?<button onClick={addFav} className={style2.fav} disabled={isFav}>{isFav? "Added to favs" : "Add Fav"}</button>: undefined}
    </div>
  );
};

export default Card;
