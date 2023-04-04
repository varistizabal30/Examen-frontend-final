import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Dentist from "./Routes/Dentist";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { AppProvider } from "./Context/AppContext";

function App() {
  return (
    <>
      <AppProvider>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dentist/:id" element={<Dentist />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/favs" element={<Favs />} />
            <Route path="*" element={<div>Not found</div>} />
          </Routes>
        <Footer />
      </AppProvider>
    </>
  );
}

export default App;
