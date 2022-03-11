
import React from 'react';
import ReactDOM from 'react-dom';
import "./Bootstrap/css/bootstrap.min.css";
import "./index.css";
import {BrowserRouter,Route,Routes,Link} from "react-router-dom";
import Menu from "./Pages/Menu";
import Home from "./Pages/Home";
import Book from "./Pages/Book";
import About from "./Pages/About";
import Search from "./Pages/Search";
import Info from "./Pages/Info"
import Header from "./Pages/Header";


function Main(){
  return(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/Menu" element={<Menu />} />
        <Route path="/" element={<Home />} />
        <Route path="/Book" element={<Book />} />
        <Route path="/Info" element={<Info />} />
        <Route path="/About" element={<About />} />
        <Route path="/Search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  )
}            
            

ReactDOM.render(<Main />, document.getElementById("root"));

 