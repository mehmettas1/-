import React from 'react'
// import Navbar from '../Components/Navbar/Navbar'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from '../Pages/Home/Home'
import About from '../Pages/About/About'
import Details from '../Pages/Details/Details'
import Login from '../Pages/Login/Login'
import PrivateRouter from './PrivateRouter'
import Navbar from '../Pages/Navbar/Navbar'



const AppRouter = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    
    <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/home" element={<PrivateRouter />}>
          <Route path="" element={<Home />} />
        </Route>

        <Route path="/about" element={<PrivateRouter />}>
         
        <Route path="" element={<About />} />
        </Route>




        <Route path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter