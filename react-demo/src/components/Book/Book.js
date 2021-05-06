import React from "react";

const Book = ({ name, author, id, url }) => {
  return (
    <div className="book">
      <div className="book__img">
        <img className="img" src={`${url}`} alt="" />
      </div>
      <h1 className="book__title">{name}</h1>
      <h2 className="book__author">{author}</h2>
    </div>
  );
};

export default Book;
