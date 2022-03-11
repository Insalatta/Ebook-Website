import React from "react";
import "../Bootstrap/css/bootstrap.min.css";
class About extends React.Component{
    render(){
        return(
            <div className="container">
                <h3 style={styles.heading}>
                    About This Page
                </h3>
                <p style={styles.content}>
                    This website is mainly for selling books 
                    as pdfs online. You can search for a particular 
                    book by clicking the search icon on the top right 
                    cornor. Once you found the book you can pay for it 
                    and download it to your phone storage.<br></br>
                    This page is developed by <b>S Insalatta Priyadharshini </b> 
                    student at Government College of Engineering, Computer 
                    Science and Engineering department.
                </p>
                <p style={styles.end}>Thank You Visit Again</p>
                <div  style={styles.icon}><i className="glyphicon glyphicon-heart"></i></div>
            </div>
        )
    }
}
const styles = {
    heading:{
        textAlign:"center",
        fontWeight:"bold",
    },
    content:{
        fontSize:20,
        textAlign:"justified"
    },
    end:{
        textAlign:"center",
        fontSize:20,
    },
    icon:{
        color:"red",
        fontSize:30,
        textAlign:"center"
    }
}
export default About;