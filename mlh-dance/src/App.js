import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navagation from "./Components/Navigation/Navagation";
import Home from "./Pages/Home/Home";
import DanceOptions from "./Pages/DanceOptions/DanceOptions";

function App() {
  return (
    <>
      <Navagation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/options" element={<DanceOptions />} />
        {/*
        
        <Route path="/about" element={<About />} />
<Route path="/" element={<Ballet />}
<Route path="/" element={<Hiphop />}
<Route path="/" element={<House />}

  */}
      </Routes>
    </>
  );
}

export default App;
