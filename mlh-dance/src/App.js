import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import DanceOptions from "./Pages/DanceOptions/DanceOptions"
function App() {
  return (
    <Routes>
<Route path="/" element={<Home />}/>
<Route path="/options" element={<DanceOptions />} />
{/*

<Route path="/" element={<Ballet />}
<Route path="/" element={<Hiphop />}
<Route path="/" element={<House />}

  */}
    </Routes>
  );
}

export default App;
