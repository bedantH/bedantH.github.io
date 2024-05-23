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
    image: "./WebTrack.png",
    tags: ["Chrome Extension", "Svelte", "On-going"],
    title: "WebTrack",
    description:
      "WebTrack Pro is a powerful browser extension designed to empower users with comprehensive insights into their web browsing habits",
    link: "https://github.com/bedantH/WebTrack",
  },
  {
    image: "./formix.png",
    tags: ["Full Stack", "On-going"],
    title: "Formiz",
    description: "A headless form builder with high customization features",
    link: "https://github.com/bedantH/formiz",
  },
  {
    image: "./xeno.png",
    tags: ["Computer Vision", "React Native", "AI"],
    title: "Xeno",
    description:
      "Assisting visually impaired individuals in navigation through computer vision. ",
    link: "https://github.com/bedantH/xeno",
  },
  {
    image: "./revive.png",
    tags: ["Flutter", "App Development", "Solutions Challenge"],
    title: "Revive",
    description:
      "Revive is an innovative app designed to promote sustainability by providing users with tips for recycling and reusing items, along with a feature to locate nearby recycling centers. ",
    link: "https://github.com/bedantH/revive-flutter",
  },
  {
    image: "./page.png",
    tags: ["Tooling", "Core", "Typescript"],
    title: "NextJS Page Router",
    description:
      "Tried to recreate how does NextJS' page router system works under the hood, for HTML ",
    link: "https://github.com/bedantH/page-router",
  },
  {
    image: "/TheKeeperApp.png",
    tags: ["Web Development", "Database"],
    title: "The Keeper App",
    description:
      "The KeeperApp is a simple Notes and Reminders taking app with great User experience.",
    link: "https://github.com/bedantH/Notera",
  },
  {
    image: "/Centaur.png",
    tags: ["Web Development", "MERN Stack"],
    title: "Centaur",
    description:
      "A University Management platform to facilitate centralized communication between various departments and parts of management.",
    link: "https://antaur-international.github.io/centaur-web/",
  },
  {
    image: "/DiscordBot.png",
    tags: ["Python"],
    title: "Discord Bot",
    description:
      "Simple Discord Bot helpful for students to get continuosly notified about the techincal events taking place near them.",
    link: "https://github.com/bedantH/TechaFo-Discord-Bot",
  },
  {
    image: "/OrganizeIt.png",
    tags: ["Python", "Automation"],
    title: "Organize It",
    description:
      "OraganizeIt organizes your files in certain folders. This package organizes your files into certain folders. E.g You can use it with....",
    link: "https://github.com/bedantH/python-automation",
  },
  {
    image: "/WatchIt.png",
    tags: ["Full Stack", "MERN Stack", "Sockets"],
    title: "Watch It",
    description:
      "WatchIt is a web app, that let's you stream YouTube content with your friends and family together without any screen sharing so, with clear audio and video.",
    link: "https://github.com/bedantH/WatchIt",
  },
];

const ProjectCard = ({ image, tags, title, description, link }) => {
  return (
    <div id="projects" className="project__Card">
      <img src={image} className="project__image" alt="1" border="0" />
      <div
        style={{
          display: "flex",
          gap: "10px",
          padding: "10px",
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
          padding: "10px",
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
          cardsEffect={true}
          mousewheel={true}
          scrollbar={{ draggable: true }}
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
