import React from "react";

class Documentary extends React.Component{
    render(){
        return(
            <div style={styles.container}>
                <p style={styles.heading}>DOCUMENTARY</p>
            </div>
        )
    }
}
const styles = {
    container:{
        padding:10,
    },
    heading:{
        fontSize:22,
        textAlign:"center",
        fontWeight:"bold",
        padding:10
    }
}
export default Documentary;