import React, { useEffect, useState } from "react";
import { getInstructors } from "./../../../util";

const Ballet = () => {
  const [instructors, setInstructors] = useState(getInstructors(12));

  const getBalletInstructors = () => {
    let balletInstructors = [];
    for (let i = 0; i < instructors.length; i++) {
      if (instructors[i].style === "ballet") {
        balletInstructors.push(instructors[i]);
      }
    }
    setInstructors(balletInstructors);
  };

  useEffect(() => {
    getBalletInstructors();
  }, []);

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
