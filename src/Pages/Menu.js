import { render } from "@testing-library/react";
import React from "react";

class Menu extends React.Component{
    render(){
        return(
            <div>
                <h1 style = {styleh1}>Menu Page</h1>
            </div>
        )
    }
}

const styleh1 = {
    color:"Green",
    textAlign:"center",
}
export default Menu;