import React from "react";
import "./pages.css";
import h1 from "./Pictures/h1.jpg";
import h2 from "./Pictures/h2.jpg";
import h3 from "./Pictures/h3.jpg";
import h4 from "./Pictures/h4.jpg";
import h5 from "./Pictures/h5.jpg";
import h6 from "./Pictures/h6.jpg";
import h7 from "./Pictures/h7.jpg";
import h8 from "./Pictures/h8.jpg";
import m1 from "./Pictures/m1.png";
import r1 from "./Pictures/r1.jpg";
import p1 from "./Pictures/p1.webp";


class Romance extends React.Component{
    render(){
        const books = [
            {
                name:"Harry Potter and the Prisoner of Askaban",
                author:"J.K.Rowling",
                price:"$200",
                image:h1,
                type:"Magical"
            },
            {
                name:"Harry Potter and the Philosopher's Stone",
                author:"J.K.Rowling",
                price:"$200",
                image:h2,
                type:"Magical"
            },
            {
                name:"Harry Potter and the Order of the Phoenix",
                author:"J.K.Rowling",
                price:"$200",
                image:h4,
                type:"Magical"
            },
            {
                name:"Harry Potter and the Half Blood Prince",
                author:"J.K.Rowling",
                price:"$200",
                image:h7,
                type:"Magical"
            },
            {
                name:"Harry Potter and the Sorcerers Stone",
                author:"J.K.Rowling",
                price:"$200",
                image:h3,
                type:"Magical"
            },
            {
                name:"Harry Potter and the Cursed Child",
                author:"J.K.Rowling",
                price:"$200",
                image:h5,
                type:"Magical"
            },
            {
                name:"Harry Potter and the Deathly Hollows",
                author:"J.K.Rowling",
                price:"$200",
                image:h8,
                type:"Magical"
            },
            {
                name:"Harry Potter and the Chamber of Secrets",
                author:"J.K.Rowling",
                price:"$200",
                image:h6,
                type:"Magical"
            },
            {
                name:"The Midnight Library",
                author:"Matt Haig",
                price:"$300",
                image:m1,
                type:"Romance"
            },
            {
                name:"Romeo And Juliet",
                author:"William Shakespeare",
                price:"$150",
                image:r1,
                type:"Romance"
            },
            {
                name:"Pride And Prejudice",
                author:"Jane Austen",
                price:"$100",
                image:p1,
                type:"Romance"
            },
        ];
        const doc = books.filter(ele => ele.type==="Documentary").map((ele,index) => 
            <div key={index} className="box">
                <img src={ele.image} alt="Image" width="100"/>
                <div>
                    <p style={styles.bookname}><i className="glyphicon glyphicon-book bookicon"></i> {ele.name}</p>
                    <p style={styles.author}>{ele.author}</p>
                    <p style={styles.price}>{ele.price}</p>
                </div>
            </div>
        );
        return(
            <div style={styles.container}>
                <p style={styles.header}>DOCUMENTARY</p> 
                <div className="boxwrapper">
                    {doc}
                </div>
            </div>
        )
    }
}
const styles = {
    header:{
        fontSize:22,
        fontWeight:"bold",
        textAlign:"center",
    },
    container:{
        padding:10,
    }
}
export default Romance;