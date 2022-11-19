import React from "react";
import "./experience.css";

const ExperienceCard = ({ image, name, duration, children }) => {
  return (
    <div className="exp__card">
      <div
        style={{
          position: "absolute",
          backgroundColor: "#141414",
          filter: "blur(2px)",
          width: "100%",
          height: "100%",
          zIndex: "-1",
          top: "0px",
          left: "0px"
        }}
      ></div>
      <div
        className="d-flex"
        style={{
          alignItems: "center",
          gap: "20px"
        }}
      >
        <img
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "10px"
          }}
          src={image}
          alt={name}
        />
        <h4
          style={{
            fontSize: "1.5rem",
            lineHeight: "1"
          }}
        >
          {name} <br />
          <span
            style={{
              display: "inline",
              fontSize: "1rem",
              fontWeight: "400"
            }}
          >
            {duration}
          </span>
        </h4>
      </div>
      <div
        style={{
          marginLeft: "70px",
          marginTop: "20px",
          fontSize: "12px"
        }}
      >
        {children}
      </div>
    </div>
  );
};

const ExperienceLayout = () => {
  return (
    <section className="experience__container cont d-flex">
      <div className="cont__exp">
        <div className="cont_h d-flex">
          <span className="slash">/</span>
          <h3>EXPERIENCE</h3>
        </div>
        <p className="cont_h__d exp__h gradient__text">Work</p>
        <p className="cont__desc exp__desc">
          I started doing tenured internships from mid-2020, till now I have
          worked with 2 software development organizations and serving different
          individual roles in same.
        </p>
      </div>
      <div className="exp__chart">
        <ExperienceCard
          image="/TIF.jpeg"
          name="The Internet Folks"
          duration="August, 2022 - Present"
        >
          <p>
            Working with an amazing team, and constantly developing SASS
            products.
          </p>
          <ul>
            <li>Developing user interfaces using React JS and Next JS.</li>
            <li>Making products for user-friendly.</li>
            <li>
              Composing reusable components and maintaining proper industry
              level code standards.
            </li>
            <li>
              Constantly focusing the quality of code I write to avoid
              unecessary bugs and making the overall frontend experience robust
            </li>
          </ul>
        </ExperienceCard>
        <div
          style={{
            width: "2px",
            height: "70px",
            borderRight: "2px dashed #ccc",
            margin: "auto"
          }}
        ></div>
        <ExperienceCard
          image="/Merkle.png"
          name="Merkle Sokrati"
          duration="August, 2021 - Feb, 2022"
        >
          <ul>
            <li>
              Worked on an E-commerce web application using the SFRA (Salesforce
              Reference Architecture).
            </li>
            <li>
              Wrote ISML to implement and integrate the design with the backend.
            </li>
            <li>
              Using HTML, CSS and Javascript resolved multiple UAT and
              production bug.
            </li>
            <li>
              I was also a part of the recruiting team, for recruiting new
              candidates for differentdeveloper positions, mostly Frontend
              related designations. As a part, I wasalsoresponsible for taking
              interviews of new candidates.
            </li>
          </ul>
        </ExperienceCard>
      </div>
    </section>
  );
};

export default ExperienceLayout;
