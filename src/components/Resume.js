import React from 'react';
import Paper from "@mui/material/Paper"

function Resume() {
  return (
    <section className="my-5">
      <div className="my-2">
        <Paper elevation ={24}>
      <p>
        Download my <a href="https://drive.google.com/file/d/1QxVGugjySa_SX3qWemSSFNiQGmIVsPH5/view?usp=sharing" target = "blank">resume</a>
        </p>
        <h3>Front-end Proficiencies</h3>
        <ul className="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>responsive design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
        <h3>Back-end Proficiencies</h3>
        <ul className="skills">
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
        </Paper>
      </div>
    </section>
  );
}

export default Resume;