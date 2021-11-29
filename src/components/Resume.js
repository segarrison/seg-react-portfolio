import React from 'react';
import Paper from "@mui/material/Paper"

function Resume() {
  return (
    <section className="my-5">
      <div className="my-2">
        <Paper elevation ={24}>
      <p>
        Download my <a href="https://docs.google.com/document/d/1rLHmlBzlKUi1_Vp1EZsj6PSwS5vOx-VB/edit?usp=sharing&ouid=103911207378054781726&rtpof=true&sd=true">resume</a>
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