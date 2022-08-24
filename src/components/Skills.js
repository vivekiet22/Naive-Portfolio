import React from "react";

const Skills = () => {
  return (<>
    
    <div className="mx-3 my-5"  >
    <h1 style={{textAlign: "initial"}}>Tech Skills</h1>
    
        <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <strong>Languages</strong>
          <span class="badge bg-primary rounded-pill">Python | JavaScript | HTML | CSS</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
        <strong>Technologies </strong>
          <span class="badge bg-primary rounded-pill">Django | Git | React.js</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
        <strong>Data Structures </strong>
          <span class="badge bg-primary rounded-pill"></span>
        </li>
      </ul>
    </div>
    </>
  );
};

export default Skills;
