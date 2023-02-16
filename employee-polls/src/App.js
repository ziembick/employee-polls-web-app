import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import "./App.css";

function App() {
  return (
    <Provider>
      <Routes>
        <Route exact path="/" component={LoginPage} />
      </Routes>
    </Provider>
  );
}

export default App;
