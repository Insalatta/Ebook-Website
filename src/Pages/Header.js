import React from "react";
import "../index.css";
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
        
            <div class="container-fluid">
                <div className="wrapper">
                  <i className="glyphicon glyphicon-book book"></i>
                  <h1 className="header">
                    EBOOK STORE WEBSITE
                  </h1>
                </div>
                <div className="btn-wrapper-div">
                    <div className={"mydiv "+(this.state.homeActive?"btnactive":"")}>
                      <Link to="/" className={"mybtn "} onClick={this.handleHomeClick}>
                        <i className="glyphicon glyphicon-home"></i>
                      </Link>
                    </div>
                    <div className={"mydiv "+(this.state.bookActive?"btnactive":"")}>
                      <Link to="/Book" className={"mybtn "} onClick={this.handleBookClick}>BOOK</Link>
                    </div>
                    <div className={"mydiv "+(this.state.infoActive?"btnactive":"")}>
                      <Link to="/Info" className={"mybtn "} onClick={this.handleInfoClick}>INFO</Link>
                    </div>
                    <div className={"mydiv "+(this.state.aboutActive?"btnactive":"")}>
                      <Link to="/About" className={"mybtn "} onClick={this.handleAboutClick}>ABOUT</Link>
                    </div>
                    <div className={"mydiv "+(this.state.searchActive?"btnactive":"")}>
                      <Link to="/Search" className={"mybtn "} onClick={this.handleSearchClick}>
                          <i className="glyphicon glyphicon-search"></i>
                      </Link>
                    </div>
                </div>
                
             </div> 
              
            
            
          
      )
    }
  }
export default Header;