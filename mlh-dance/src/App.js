import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Pages/Home/Home";
import DanceOptions from "./Pages/DanceOptions/DanceOptions";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/options" element={<DanceOptions />} />
      </Routes>
    </>
  );
}

export default App;
