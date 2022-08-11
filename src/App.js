import React from "react";
import { BrowserRouter as Router,
  Route, Navigate, Routes}
  from 'react-router-dom';
  import "bootstrap/dist/css/bootstrap.min.css";

  import Home from "./pages/Home/Home";
  import Footer from "./componentes/Footer/Footer"
  import Navbar from "./componentes/Navbar/Navbar";

function App(){
  return (
    <Router>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer/>
    </Router>
    
  );
}

export default App;
