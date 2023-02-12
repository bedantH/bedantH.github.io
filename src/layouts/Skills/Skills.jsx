import React from "react";
import { skills } from "../../data/data";
import "./skills.css";

const SkillCard = ({ image, text }) => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#393939",
        maxWidth: "300px",
        minWidth: "200px",
        borderRadius: "6px",
        padding: "10px 20px",
        alignItems: "center",
        gap: "20px"
      }}
    >
      <img
        style={{
          width: "50px"
        }}
        src={image}
        alt="skill"
      />
      <h4
        style={{
          fontSize: "1.3rem"
        }}
      >
        {text}
      </h4>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="cont skills__container ">
      <div className="cont__exp skills_head">
        <div className="cont_h d-flex">
          <span className="slash">/</span>
          <h3>MY SKILLS</h3>
        </div>
        <p className="exp__h">
          So, <span className="gradient__text">what</span> can I do ?
        </p>
      </div>
      <div
        style={{
          display: "grid",
          // okk got it
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
          width: "100%",
          height: "auto",
          marginTop: "30px",
        }}
      >
        {skills.map((item, index) => (
          <SkillCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
