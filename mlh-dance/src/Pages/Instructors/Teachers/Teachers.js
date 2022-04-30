import React from "react";
import "./teachers.css";
const Teachers = ({ instructors }) => {
  
  return (
    <div className="instructor-wrapper">
      {instructors &&
        instructors?.map((instructor, i) => {
          return (
            <div key={i} className="instructor-container">
              <img className="instructor-img" src={instructor.image} alt="" />

              <div className="instructor-body">
                <div className="instructor-name">
                  Name: &nbsp;
                  {instructor.name}
                </div>
                <div className="instructor-email">
                  Email: &nbsp;
                  {instructor.email}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Teachers;
