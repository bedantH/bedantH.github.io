import React from "react";
import "./about.css";

import { AiOutlineTeam } from "react-icons/ai";

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
              gap: "20px"
            }}
          >
            <h4
              style={{
                fontSize: "3.4rem"
              }}
            >
              1+
            </h4>
            <p
              style={{
                lineHeight: "1.2"
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
              gap: "20px"
            }}
          >
            <h4
              style={{
                fontSize: "3.4rem"
              }}
            >
              12+
            </h4>
            <p
              style={{
                lineHeight: "1.2"
              }}
            >
              Deployed <br /> projects
            </p>
          </div>
        </div>
        <p>
          Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla
          porttitor accumsan tincidunt. Curabitur arcu erat, accumsan id
          imperdiet et, porttitor at sem.
        </p>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "-120px",
          width: "100%",
          height: "0.5px",
          backgroundColor: "#CCCCCC",
          borderRadius: "10px"
        }}
      ></div>
    </section>
  );
}
