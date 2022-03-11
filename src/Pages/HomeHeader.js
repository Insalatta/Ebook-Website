import React from "react";
import "../Bootstrap/css/bootstrap.min.css"
import {Link,Outlet} from "react-router-dom";
import "./pages.css";



class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isVisible:false,
            opac:{
                opacity:0
            },
            allbooksActive:true,
            romanceActive:false,
            documentaryActive:false,
        }
        this.handleDropdown = this.handleDropdown.bind(this);
        this.handleAllBooks = this.handleAllBooks.bind(this);
        this.handleDocumentary = this.handleDocumentary.bind(this);
        this.handleRomance = this.handleRomance.bind(this);
    }
    handleDropdown = () =>{
        if(this.state.isVisible){
            this.setState({
                isVisible:false,
                opac:{
                    opacity:0
                }
            })
        }else{
            this.setState({
                isVisible:true,
                opac:{
                    opacity:1
                }
            })
        }
    }
    handleAllBooks = () =>{
        this.setState({
            allbooksActive:true,
            romanceActive:false,
            documentaryActive:false,
            isVisible:false,
            opac:{
                opacity:0
            }
        })
        
    }
    handleRomance = () =>{
        this.setState({
            allbooksActive:false,
            romanceActive:true,
            documentaryActive:false,
            isVisible:false,
            opac:{
                opacity:0
            }
        })
    }
    handleDocumentary = () =>{
        this.setState({
            allbooksActive:false,
            romanceActive:false,
            documentaryActive:true,
            isVisible:false,
            opac:{
                opacity:0
            }
        })
    }
    render(){
        return(
            <div style={styles.container}>
                <h3 style={styles.styleh3}>HOME</h3>
                <br></br>
                <p style={styles.content}>Here are the best deals of the day!</p>
                <p style={styles.content}>Grab before its gone!</p>
                <div className="homepageContainer" >
                    <div className="collections" onClick={this.handleDropdown}>
                        Collections{" "} 
                        <span className="caret"></span>
                    </div>
                    <div style={this.state.opac} className="dropdownContainer">
                        <Link to="/" className={"homebox "+(this.state.allbooksActive?"dropdownActive":"")} onClick={this.handleAllBooks}>All</Link>
                        <Link to="/romance" className={"homebox "+(this.state.romanceActive?"dropdownActive":"")} onClick={this.handleRomance}>Romance</Link>
                        <Link to="/documentary" className={"homebox "+(this.state.documentaryActive?"dropdownActive":"") } onClick={this.handleDocumentary}>Documentary</Link>
                    </div>
                </div >
                <Outlet />
            </div>
        )
    }
}

const styles={
    styleh3:{
        fontWeight:"bold",
        textAlign:"center", 
        fontSize:23,
    },
    content:{
        fontSize:20,
        textAlign:"center"
    },
    container:{
        margin:10,
    },
  
}

export default Home;