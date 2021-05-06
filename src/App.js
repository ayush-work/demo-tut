import Header from "./Header";
import users from "./user";
function App() {
  return (
    <div className="App">
      <h1 className="text">welcome to reacttt</h1>
      {users.map((usr, idx) => {
        return (
          <div key={idx}>
            <h1>{usr.name}</h1>
            <h2>{usr.age}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default App;
