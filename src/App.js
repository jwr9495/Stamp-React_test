import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <div className="stamp-demo">
        <Login />
        <Register />
      </div>
    </div>
  );
}

export default App;
