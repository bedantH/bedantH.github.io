import React, { useEffect, useState } from "react";
import { BiCoffeeTogo } from "react-icons/bi";
import "./hero.css";

export default function Hero() {
  const greetings = [
    "Namaste",
    "नमस्कार",
    "ନମସ୍କାର",
    "Hey",
    "Hola",
    "Bonjour",
    "Hallo",
    "こんにちは",
    "你好"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      if (index === greetings.length - 1) {
        setIndex(0);
      } else {
        setIndex((prev) => prev + 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [index]);

  return (
    <main className="hero">
      <div className="hero__container" id="hero__container">
        <p className="dynamic_text">{greetings[index]},</p>
        <h2 className="hero__title">
          <span className="gradient__text">Myself,</span> <br />
          Bedant Hota
        </h2>
        <p className="hero__desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt,
          facere eveniet! Praesentium, vel sint deserunt commodi a saepe odio.
        </p>
        <div className="button__cta__list">
          <button className="hero_cta cta__1">Connect with me!</button>
          <button
            onClick={() => {
              let newWindow = window.open(
                "https://www.buymeacoffee.com/bedantH",
                "_blank",
                "noopener, noreferrer"
              );

              if (newWindow) newWindow.opener = null;
            }}
            className="hero_cta hero__cta--discord"
          >
            {/* check chat*/}
            <span
              style={{
                fontSize: "1rem",
                display: "flex"
              }}
            >
              <BiCoffeeTogo />
            </span>
            <p>Buy me coffee</p>
          </button>
        </div>
      </div>

      {/* <div className="background__assets">
        <div className="circle circle--blue" />
        <div className="circle circle--purple" />
      </div> */}
    </main>
  );
}
