
import React from 'react';
import ReactDOM from 'react-dom';
import "./Bootstrap/css/bootstrap.min.css";
import "./index.css";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Book from "./Pages/Book";
import About from "./Pages/About";
import Search from "./Pages/Search";
import Info from "./Pages/Info"
import Header from "./Pages/Header";
import AllBooks from "./Pages/AllBooks";
import Romance from "./Pages/Romance";
import Documentary from "./Pages/Documentary";
import HomeHeader from "./Pages/HomeHeader"

function Main(){
  return(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomeHeader />} >
          <Route path="/" element={<AllBooks />} />
          <Route path="/romance" element={<Romance />} />
          <Route path="/documentary" element={<Documentary />} />
        </Route>
        <Route path="/books" element={<Book />} />
        <Route path="/info" element={<Info />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  )
}            
            

ReactDOM.render(<Main />, document.getElementById("root"));

 