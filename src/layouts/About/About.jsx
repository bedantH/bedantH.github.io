import React from "react";
import "./about.css";

export default function About() {
  return (
    <section id="about" className="about__container cont d-flex">
      <div className="cont__about">
        <div className="cont_h d-flex">
          <span className="slash">/</span>
          <h3>ABOUT ME</h3>
        </div>
        <p className="cont_h__d about__h">
          I’ve been <span className="gradient__text">developing</span> websites
          since 2020.
        </p>
        <p className="cont__desc about__desc">
          A self-taught developer, learning new technologies every day. A
          well-organized person, problem solver, and a guy with acute attention
          to detail and creativity. Fan of Anime, outdoor activities, painting
          are some of my hobbies. Interested in the entire front-end and
          back-end spectrum on ambitious projects with a great team.
        </p>
      </div>
      <div className="cont__projects">
        <div className="projs__d d-flex">
          <div
            className="d-flex"
            style={{
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <h4
              style={{
                fontSize: "3.4rem",
              }}
            >
              1.5+
            </h4>
            <p
              style={{
                lineHeight: "1.2",
              }}
            >
              Years of <br /> Experience
            </p>
          </div>
          <div
            className="d-flex"
            style={{
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <h4
              style={{
                fontSize: "3.4rem",
              }}
            >
              12+
            </h4>
            <p
              style={{
                lineHeight: "1.2",
              }}
            >
              Completed <br />
              Projects
            </p>
          </div>
        </div>
        <p>
          Steadily engaged in developing interesting UI experiences for the
          patrons and writing quality code to ensure exceptional service while
          exploring the creative aspects.
        </p>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "-120px",
          width: "100%",
          height: "0.5px",
          backgroundColor: "#CCCCCC",
          borderRadius: "10px",
        }}
      ></div>
    </section>
  );
}
