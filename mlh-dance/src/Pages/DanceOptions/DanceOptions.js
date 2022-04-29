import React, { useState } from "react";
import Teachers from "../Instructors/Teachers/Teachers";
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
    <div className="wrapper">
      {/* <div className="options-container"> */}
      <div
        className={
          showInstructors
            ? "options-container moveOptions"
            : "options-container"
        }
      >
        <div className="options-title">Whats Your Style?</div>
        <div className="options-box">
          <p onClick={(e) => getCurrentInstructors(e.target.innerHTML)}>
            Ballet
          </p>
          <p onClick={(e) => getCurrentInstructors(e.target.innerHTML)}>
            Hip Hop
          </p>
          <p onClick={(e) => getCurrentInstructors(e.target.innerHTML)}>
            House
          </p>
          <p onClick={(e) => getCurrentInstructors(e.target.innerHTML)}>
            Salsa
          </p>
        </div>
      </div>
      {showInstructors && (
        <div className="instructorsContainer">
          <Teachers instructors={currentInstructors} />
        </div>
      )}
    </div>
  );
};

export default DanceOptions;
