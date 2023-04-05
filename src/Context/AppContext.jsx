import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [data, setData] = useState({
    dentists: null,
    theme: "light" 
  });


  async function getData(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const dentists = await response.json();
        setData((prevData) => ({...prevData, dentists, theme: data.theme}));
    } catch (error) {
        console.log(error)
    }

} 

function toggleTheme() {
    setData((prevData) => {
      const newTheme = prevData.theme === 'light' ? 'dark' : 'light';
      document.body.className = newTheme;
      return { ...prevData, theme: newTheme };
    });
  }


  useEffect(() => {
    getData()
  }, []);

  const value = {
    dentists: data.dentists,
    theme: data.theme,
    toggleTheme
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
