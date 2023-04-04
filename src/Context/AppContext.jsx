import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [data, setData] = useState({
    dentist: [],
    theme: "light"
  });

  async function getData(){
    try {
        const data = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
        setData(data)
    } catch (error) {
        console.log(error)
    }
} 

  useEffect(() => {
    getData()
  }, []);

  const value = {
    dentist: data,
    theme: "light"
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
