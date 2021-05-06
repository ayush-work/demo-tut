import React from "react";
import Book from "../Book/Book";
import "./Booklist.css";
const Booklist = ({ books }) => {
  return (
    <div className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id}></Book>;
      })}
    </div>
  );
};
const obj = {
  name: "Ayush",
  age: 21,
};

export default Booklist;
