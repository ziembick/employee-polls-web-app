import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={LoginPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
