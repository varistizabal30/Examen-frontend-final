import React, { useContext } from "react";
import Form from '../Components/Form';
import style from '../Styles/app.module.css';
import { AppContext } from "../Context/AppContext";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { theme, toggleTheme } = useContext(AppContext);
  return (
    <div className={theme === "dark" ? style.dark : style.ligth}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact