import React, { useState } from "react";
import Ballet from "../Instructors/Ballet/Ballet";
import "./DanceOptions.css";
import { getInstructors } from "../../util.js";

const DanceOptions = () => {
  const [showInstructors, setShowInstructors] = useState(false);
  const [instructors, setInstructors] = useState(getInstructors(12));
  const [currentInstructors, setCurrentInstructors] = useState();

  const getCurrentInstructors = (val) => {
    let sortedInstructors = [];
    for (let i = 0; i < instructors.length; i++) {
      if (instructors[i].style === val) {
        sortedInstructors.push(instructors[i]);
      }
    }
    setShowInstructors(true);
    console.log(currentInstructors);
    setCurrentInstructors(sortedInstructors);
  };

  return (
    <div className="options-container">
      <div className="options-title">Whats Your Style?</div>
      <div className="options-box">
        <p onClick={(e) => getCurrentInstructors(e.target.innerHTML)}>Ballet</p>
        <p onClick={(e) => getCurrentInstructors(e.target.innerHTML)}>
          Hip Hop
        </p>
        <p onClick={(e) => getCurrentInstructors(e.target.innerHTML)}>House</p>
        <p onClick={(e) => getCurrentInstructors(e.target.innerHTML)}>Salsa</p>
      </div>
      {showInstructors && <Ballet instructors={currentInstructors} />}
    </div>
  );
};

export default DanceOptions;
