import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <div>
      <Link to="./">Home</Link>
      <Link to="./contact">Contact</Link>
      <Link to="./favs">Favs</Link>
      <button onClick={toggleTheme}>Change theme</button>
    </div>
  )
}

export default Navbar