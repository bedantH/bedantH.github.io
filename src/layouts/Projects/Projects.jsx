import React from "react";
import { BsGithub } from "react-icons/bs";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./projects.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const projectsData = [
  {
    image: "/Caveat.png",
    tags: ["Android", "Static"],
    title: "Caveat",
    description:
      "A simple grievance management system using Android, aimed at increasing transperancy in the students' grievance handling...",
    link: "https://github.com/bedantH/caveat"
  },
  {
    image: "/TheKeeperApp.png",
    tags: ["Web Development", "Database"],
    title: "The Keeper App",
    description:
      "The KeeperApp is a simple Notes and Reminders taking app with great User experience.",
    link: "https://github.com/bedantH/Notera"
  },
  {
    image: "/Centaur.png",
    tags: ["Web Development", "MERN Stack"],
    title: "Centaur",
    description:
      "A University Management platform to facilitate centralized communication between various departments and parts of management.",
    link: "https://antaur-international.github.io/centaur-web/"
  },
  {
    image: "/DiscordBot.png",
    tags: ["Python"],
    title: "Discord Bot",
    description:
      "Simple Discord Bot helpful for students to get continuosly notified about the techincal events taking place near them.",
    link: "https://github.com/bedantH/TechaFo-Discord-Bot"
  },
  {
    image: "/OrganizeIt.png",
    tags: ["Python", "Automation"],
    title: "Organize It",
    description:
      "OraganizeIt organizes your files in certain folders. This package organizes your files into certain folders. E.g You can use it with....",
    link: "https://github.com/bedantH/python-automation"
  },
  {
    image: "/WatchIt.png",
    tags: ["Full Stack", "MERN Stack", "Sockets"],
    title: "Watch It",
    description:
      "WatchIt is a web app, that let's you stream YouTube content with your friends and family together without any screen sharing so, with clear audio and video.",
    link: "https://github.com/bedantH/WatchIt"
  },
  {
    image: "/Trailicious.png",
    tags: ["Web", "Full Stack", "MERN Stack"],
    title: "Trailicious",
    description:
      "Simple Food Recipe web application with simple and minimalistic UI.",
    link: "https://github.com/bedantH/Trailicious"
  }
];

const ProjectCard = ({ image, tags, title, description, link }) => {
  return (
    <div id="projects" className="project__Card">
      <img src={image} alt="1" border="0" />
      <div
        style={{
          display: "flex",
          gap: "10px",
          margin: "10px 20px",
        }}
      >
        {tags.map((tag) => {
          return (
            <div
              style={{
                fontSize: "12px",
                padding: "2px 10px",
                borderRadius: "15px",
                backgroundColor: "#8550F7",
              }}
            >
              {tag}
            </div>
          );
        })}
      </div>
      <div
        style={{
          padding: "20px 20px",
          paddingTop: "0px",
        }}
      >
        <h5
          style={{
            fontSize: "1.3rem",
          }}
        >
          {title}
        </h5>
        <p
          style={{
            marginTop: "10px",
            width: "100%",
            fontSize: "13px",
          }}
        >
          {description}
        </p>
        <a
          href={link}
          style={{
            display: "flex",
            width: "fit-content",
            textDecoration: "none",
            cursor: "pointer",
            gap: "10px",
            backgroundColor: "#000000",
            padding: "5px 20px",
            alignItems: "center",
            color: "#ffffff",
            borderRadius: "8px",
            marginTop: "15px",
            fontSize: "15px",
          }}
        >
          <span
            style={{
              marginTop: "2px",
              display: "block",
              fontSize: "1.2rem",
            }}
          >
            <BsGithub />
          </span>{" "}
          Github
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="skills__container cont">
      <div className="cont__exp skills_head">
        <div className="cont_h d-flex">
          <span className="slash">/</span>
          <h3>PROJECTS</h3>
        </div>
        <p className="exp__h proj">
          So, <span className="gradient__text">what</span> I have worked on
          previously ?
        </p>
        <p
          style={{
            marginTop: "10px",
          }}
        >
          <em>
            Some of my projects are down for maintenance, sorry for the
            inconvenience.
          </em>
        </p>
      </div>
      <div className="projects__container">
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            700: {
              slidesPerView: 1,
            },
            1000: {
              slidesPerView: 3.5,
            },
          }}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={3.5}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <div>
            {projectsData.map((project) => {
              return (
                <SwiperSlide>
                  <ProjectCard
                    image={project.image}
                    tags={project.tags}
                    title={project.title}
                    description={project.description}
                    link={project.link}
                  />
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
