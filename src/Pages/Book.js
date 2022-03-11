import React from "react";
import "../Bootstrap/css/bootstrap.min.css";
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

class Book extends React.Component{
    render(){
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
        const myBooks = books.map((ele,index) => 
                <div key={index} className="box">
                    <img src={ele.image} alt="Image" width="100"/>
                    <div>
                        <p style={styles.bookname}><i className="glyphicon glyphicon-book bookicon"></i> {ele.name}</p>
                        <p style={styles.author}>{ele.author}</p>
                        <p style={styles.price}>{ele.price}</p>
                    </div>
                </div>
            )
        return(
            <div className="">
                <h3 style={styles.heading}>
                    BOOKS STORE
                </h3>
                <div className="boxwrapper">
                    {myBooks}
                </div>
            </div>
        )
    }
}
const styles={
    heading:{
        color:"black",
        textAlign:"center",
        fontWeight:"bold"
    },
    id:{
        color:"black",
        fontSize:20,
        alignSelf:"flex-start"
    },
    bookname:{
        color:"black",
        fontSize:14,
        textAlign:"center",
        
    },
    price:{
        color:"green",
        fontSize:18,
        textAlign:"center"
    },
    author:{
        fontSize:12,
        textAlign:"center",
        opacity:0.8
    }
}

export default Book;