import React, { useState } from "react";
import "./InstructorList.css";
import { getInstructors } from "../../util.js";

const InstructorList = () => {
  const [instructors, setInstructors] = useState(getInstructors(12));
  const [currentInstructors, setCurrentInstructors] = useState();

  console.log(instructors);

  const getCurrentInstructors = (val) => {
    let sortedInstructors = [];
    for (let i = 0; i < instructors.length; i++) {
      if (instructors[i].style === val) {
        sortedInstructors.push(instructors[i]);
      }
    }
    // setShowInstructors(true);
    console.log(currentInstructors);
    setCurrentInstructors(sortedInstructors);
  };

  return (
    <div className="instructorList-container">
      <h1 className="instructorList-title">Instructors</h1>
      <div className="instructorList-box">
        {instructors &&
          instructors?.map((instructor, i) => {
            return (
              <div key={i} className="instructorList-card">
                <h1 className="instructorList-name">
                  {instructor.name}
                </h1>
                <img
                  className="instructorList-img"
                  src={instructor.image}
                  alt=""
                />

                <div className="instructorList-body">
                  <div className="instructorList-email">
                    Email: &nbsp;
                    {instructor.email}
                  </div>
                  <div className="instructorList-style">
                  Style: &nbsp;
                    {instructor.style}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default InstructorList;

/*


{instructors.map((instructor,index) =>{
  return <InstructorList key={index} instructor={instructor}/>
 })}
*/
