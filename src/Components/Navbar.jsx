import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { AppContext } from '../Context/AppContext';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  // const [themeState, setThemeState] = useState(theme);
  // const { dentists, theme } = useContext(AppContext);

  
  function handleOnClick(){


  }

  return (
    <>
      <Link to="./">Home</Link>
      <Link to="./contact">Contact</Link>
      <Link to="./favs">Favs</Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>
    </>
  )
}

export default Navbar