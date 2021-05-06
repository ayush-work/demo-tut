import "./App.css";
import { useState, useEffect } from "react";
import Booklist from "./components/Booklist/Booklist";
const App = () => {
  const [title, setTitle] = useState("Amazon Books");
  const [user, setUser] = useState({});
  const [text, setText] = useState("Default text");
  const books = [
    {
      id: 101,
      name: "How to Make Easy money",
      url:
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      author: "Kunal Sagar",
    },
    {
      id: 102,
      name: "Think and grow rich",
      url:
        "https://images.unsplash.com/photo-1607473128383-0cf6c96f0689?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      author: "Ayush Maurya",
    },
    {
      id: 103,
      name: "Atomic habbits",
      url:
        "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
      author: "Vishal Sachan",
    },
  ];
  useEffect(() => {
    console.log("hi");
  }, [text]);

  const handleClick = () => {
    setTitle("Amazon best seller");
    setText("again changed text");
    setUser({
      name: "Ayush",
      age: 21,
    });
    console.log(user);
  };
  const handleChange = (e) => {
    console.log(e);
    setText(e.target.value);
  };
  console.log(text);
  return (
    <div className="App">
      <h1>{title}</h1>
      <input type="text" value={text} onChange={(e) => handleChange(e)} />
      <button onClick={handleClick}>Change title</button>
      <Booklist books={books}></Booklist>
    </div>
  );
};

export default App;
