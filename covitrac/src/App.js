import "./App.css";
import Card from "./component/Card/Card";
import { useState, useEffect } from "react";
// https://disease.sh/v3/covid-19/all
function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const getData = async () => {
    try {
      const response = await fetch("https://disease.sh/v3/covid-19/all");
      const info = await response.json();
      setData([
        { cases: info.active, id: "active" },
        { cases: info.recovered, id: "recovered", today: info.todayRecovered },
        { cases: info.deaths, id: "death", today: info.todayDeaths },
      ]);
      console.log(info);
    } catch (e) {
      setError(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  return (
    <div className="App">
      <h1 className="App__heading">covitrac</h1>
      <input
        type="text"
        placeholder="Enter the country"
        className="App__search"
      />
      <button className="btn">Find Country</button>
      <div className="App__card">
        {data.map((item) => {
          return <Card {...item} key={item.id}></Card>;
        })}
      </div>
    </div>
  );
}

export default App;
