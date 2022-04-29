import React from "react";

const Ballet = ({ instructors }) => {
  return (
    <div>
      {instructors &&
        instructors?.map((instructor, i) => {
          return (
            <div key={i} className="instructor-container">
              <div className="instructor-name">{instructor.name}</div>
              <div className="instructor-email">{instructor.email}</div>
            </div>
          );
        })}
    </div>
  );
};

export default Ballet;
