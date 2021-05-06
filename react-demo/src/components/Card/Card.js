import React from "react";
import Button from "../Button/Button";
import "./Card.css";

const Card = () => {
  return (
    <>
      <div>
        <h1>title</h1>
        <h2>subtitle</h2>
        <Title></Title>
      </div>
    </>
  );
};
const Title = () => {
  return (
    <div>
      <h1>Title component</h1>
      <Button></Button>
    </div>
  );
};
export default Card;
