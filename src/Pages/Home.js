import React from "react";
import "../Bootstrap/css/bootstrap.min.css"
import AllBooks from "./AllBooks";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import "./pages.css";


class Home extends React.Component{
    constructor(props){
        super();
        this.state={
            isVisible:false,
            opac:{
                opacity:0
            }
        }
        this.handleDropdown = this.handleDropdown.bind(this);
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
                    <div style={this.state.opac} className="collectionsItemContainer">
                        <div className="collectionsItem">
                            <Link to="/" className="collectionLink">All Books</Link>
                        </div>
                        <div className="collectionsItem">
                            <Link to="/" className="collectionLink">Romance</Link>
                        </div>
                        <div className="collectionsItem">
                            <Link to="/" className="collectionLink">Documentary</Link>
                        </div>
                    </div>
                </div>
                <AllBooks />
            </div>
        )
    }
}
{/** 
const books = [
    {
        name:"Harry Potter and the Prisoner of Askaban",
        author:"J.K.Rowling",
        price:"$200",
        image:h1
    },
    {
        name:"Harry Potter and the Philosopher's Stone",
        author:"J.K.Rowling",
        price:"$200",
        image:h2
    },
    {
        name:"Harry Potter and the Order of the Phoenix",
        author:"J.K.Rowling",
        price:"$200",
        image:h4
    },
    {
        name:"Harry Potter and the Half Blood Prince",
        author:"J.K.Rowling",
        price:"$200",
        image:h7
    },
    {
        name:"Harry Potter and the Sorcerers Stone",
        author:"J.K.Rowling",
        price:"$200",
        image:h3
    },
    {
        name:"Harry Potter and the Cursed Child",
        author:"J.K.Rowling",
        price:"$200",
        image:h5
    },
    {
        name:"Harry Potter and the Deathly Hollows",
        author:"J.K.Rowling",
        price:"$200",
        image:h8
    },
    {
        name:"Harry Potter and the Chamber of Secrets",
        author:"J.K.Rowling",
        price:"$200",
        image:h6
    },
    {
        name:"The Midnight Library",
        author:"Matt Haig",
        price:"$300",
        image:m1
    },
    {
        name:"Romeo And Juliet",
        author:"William Shakespeare",
        price:"$150",
        image:r1
    },
    {
        name:"Pride And Prejudice",
        author:"Jane Austen",
        price:"$100",
        image:p1
    },
];
*/}

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
    }
}

export default Home;