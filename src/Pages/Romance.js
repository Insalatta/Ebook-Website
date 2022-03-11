import React from "react";

class Romance extends React.Component{
    render(){
        return(
            <div style={styles.container}>
                <p style={styles.header}>ROMANCE</p> 
            </div>
        )
    }
}
const styles = {
    header:{
        fontSize:22,
        fontWeight:"bold",
        textAlign:"center",
        padding:10
    },
    container:{
        padding:10,
    }
}
export default Romance;