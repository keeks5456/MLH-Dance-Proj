import React, { useState } from "react";
import Ballet from "../Instructors/Ballet/Ballet";
import "./DanceOptions.css";

const DanceOptions = () => {
  const [ballet, setBallet] = useState(false);
  return (
    <div className="options-container">
      <div className="options-title">Whats Your Style?</div>
      <div className="options-box">
        <p onClick={() => setBallet(true)}>Ballet</p>
        <p>Hip Hop</p>
        <p>House</p>
        <p>Salsa</p>
      </div>
      {ballet && <Ballet />}
    </div>
  );
};

export default DanceOptions;
