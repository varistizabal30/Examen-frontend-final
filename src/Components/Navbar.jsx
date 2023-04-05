import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import style from '../Styles/app.module.css'
import { AppContext } from '../Context/AppContext';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <div className={theme === "dark" ? style.dark : style.ligth}>
      <Link to="./">Home</Link>
      <Link to="./contact">Contact</Link>
      <Link to="./favs">Favs</Link>
      <p>{theme}</p>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={toggleTheme}>Change theme</button>
    </div>
  )
}

export default Navbar