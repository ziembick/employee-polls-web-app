import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import "./App.css";
import HomePage from "./components/HomePage";
import Questions from "./components/Questions";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}/>
      <Route path="/home" element={<Questions />}/>
    </Routes>
  );
}

export default App;
