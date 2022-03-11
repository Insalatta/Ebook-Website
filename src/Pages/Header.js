import React from "react";
import "./header.css";
import {Link} from "react-router-dom";

class Header extends React.Component{
    constructor(){
      super();
      this.state = {
        menuActive:false,
        homeActive:true,
        bookActive:false,
        infoActive:false,
        aboutActive:false,
        searchActive:false
      }
      this.handleMenuClick = this.handleMenuClick.bind(this);
      this.handleHomeClick = this.handleHomeClick.bind(this);
      this.handleBookClick = this.handleBookClick.bind(this);
      this.handleInfoClick = this.handleInfoClick.bind(this);
      this.handleAboutClick = this.handleAboutClick.bind(this);
      this.handleSearchClick = this.handleSearchClick.bind(this);
    }
    handleMenuClick = () =>{
      this.setState({
        menuActive:true,
        homeActive:false,
        bookActive:false,
        infoActive:false,
        aboutActive:false,
        searchActive:false
      })
    }
    handleHomeClick = () =>{
      this.setState({
        menuActive:false,
        homeActive:true,
        bookActive:false,
        infoActive:false,
        aboutActive:false,
        searchActive:false
      })
    }
    handleBookClick = () =>{
      this.setState({
        menuActive:false,
        homeActive:false,
        bookActive:true,
        infoActive:false,
        aboutActive:false,
        searchActive:false
      })
    }
    handleInfoClick = () =>{
      this.setState({
        menuActive:false,
        homeActive:false,
        bookActive:false,
        infoActive:true,
        aboutActive:false,
        searchActive:false
      })
    }
    handleAboutClick = () =>{
      this.setState({
        menuActive:false,
        homeActive:false,
        bookActive:false,
        infoActive:false,
        aboutActive:true,
        searchActive:false
      })
    }
    handleSearchClick = () =>{
      this.setState({
        menuActive:false,
        homeActive:false,
        bookActive:false,
        infoActive:false,
        aboutActive:false,
        searchActive:true
      })
    }
  
    render(){
      return(
        
            <div class="headerwrapper">
                <div className="wrapper">
                  <i className="glyphicon glyphicon-book book"></i>
                  <h1 className="header">
                    EBOOK STORE WEBSITE
                  </h1>
                </div>
                <div className="btn-wrapper-div">
                    <Link to="/" className={"mybtn "+(this.state.homeActive?"btnactive":"")} onClick={this.handleHomeClick}>
                        <i className="glyphicon glyphicon-home"></i>
                    </Link>
                    <Link to="/books" className={"mybtn "+(this.state.bookActive?"btnactive":"")} onClick={this.handleBookClick}>BOOK</Link>
                    <Link to="/info" className={"mybtn "+(this.state.infoActive?"btnactive":"")} onClick={this.handleInfoClick}>INFO</Link>
                    <Link to="/about" className={"mybtn "+(this.state.aboutActive?"btnactive":"")} onClick={this.handleAboutClick}>ABOUT</Link>
                    <Link to="/search" className={"mybtn "+(this.state.searchActive?"btnactive":"")} onClick={this.handleSearchClick}>
                          <i className="glyphicon glyphicon-search"></i>
                    </Link>
                </div>
                
             </div> 
      )
    }
  }
export default Header;