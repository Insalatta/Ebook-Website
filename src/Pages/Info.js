import React from "react";
import "../Bootstrap/css/bootstrap.min.css";
class Info extends React.Component{
    render(){
        return(
            <div className="container">
                <h3 style={styles.heading}>INFORMATION</h3>
                <h4 style={{fontWeight:"bold"}}>ABOUT THE WEBSITE</h4>
                <p style={styles.content}>This website only aims on selling books online 
                    while the user have to pay for the book first 
                    then they can the download the paritcular book 
                    offline.
                </p>
                <p style={styles.content}>
                    There is a lot of collections available in this 
                    website, go grab the book you like!
                </p>
                <h4 style={{fontWeight:"bold"}}>ABOUT THE AUTHOR</h4>
                <p style={styles.content}>
                    This website is designed by Insalatta 
                    Priyadharshini a student at Government 
                    College of Engineering, Tirunelveli while 
                    pusuing her third year undergraduate degree. 

                </p>
                <p style={styles.end}>Thank You <i style={styles.iconTag} className="glyphicon glyphicon-heart"></i></p>
            </div>
        )
    }
}
const styles = {
    iconTag:{
        color:"red",
        fontSize:20
    },
    end:{
        textAlign:"center",
        fontSize:20,
    },
    content:{
        fontSize:20,

    },
    heading:{
        textAlign:"center",
        fontWeight:"bold",
    }
}
export default Info;