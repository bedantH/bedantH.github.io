import { useEffect, useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./layouts/About/About";
import ExperienceLayout from "./layouts/Experience/Experience";
import Hero from "./layouts/Hero/Hero";
import Skills from "./layouts/Skills/Skills";
import Projects from "./layouts/Projects/Projects";
import Contact from "./layouts/Contact/Contact";
import Footer from "./layouts/Footer/Footer";

function App() {
  const mouseFollower = useRef();

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex]
      ];
    }

    return array;
  }

  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      const { pageY, pageX } = event;
      // mouseFollower.current.style.translate = `transform3d(${
      //   clientX - mouseFollower.current.clientWidth / 2
      // }px, ${clientY - mouseFollower.current.clientHeight / 2}px, 0)`;
      // console.log({ clientX, clientY });
      mouseFollower.current.style.top = pageY - 45 + "px";
      mouseFollower.current.style.left = pageX - 45 + "px";
    });

    const radiusTimeOut = setInterval(() => {
      mouseFollower.current.style.borderRadius = shuffle([
        "20%",
        "50%",
        "50%",
        "50%"
      ]).join(" ");
    }, 1000);

    return () => {
      document.removeEventListener("mousemove", () => {});
      clearInterval(radiusTimeOut);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div style={{ position: "relative", overflowY: "hidden" }}>
        <Hero />
        <About />
        <ExperienceLayout />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <div
          ref={mouseFollower}
          className="mouse__follower"
          id="mouse_follower"
        ></div>
      </div>
      {/*
        1. Ways to get involved
        2. Events
        3. Testimonials
      */}
    </>
  );
}

export default App;
