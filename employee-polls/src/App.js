import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import "./App.css";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}/>
      <Route path="/home" element={<HomePage />}/>
    </Routes>
  );
}

export default App;
