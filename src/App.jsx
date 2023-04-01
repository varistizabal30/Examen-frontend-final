import './App.css'
import { Routes,Route} from 'react-router-dom'
import Home from './Routes/Home'
import Detail from './Routes/Detail'
import Contact from './Routes/Contact'
import Favs from './Routes/Favs'
import Navbar from './Components/Navbar'


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Navbar/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/detail" element={<Detail/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/favs" element={<Favs/>}/>
    </Routes>
    </>
  )
}

export default App
