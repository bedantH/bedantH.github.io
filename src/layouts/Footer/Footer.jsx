import React from "react";
import { BsInstagram, BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import instagram from "react-useanimations/lib/instagram";
import linkedin from "react-useanimations/lib/linkedin";
import twitter from "react-useanimations/lib/twitter";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer__wrapper">
      <div className="footer__self_bio__wrapper">
        <div>
          <div className="footer__self_bio__container">
            <img
              width="130px"
              height="130px"
              className="footer__self_bio__container__img"
              src="/Me.jpeg"
              alt="BedantHota"
            />
            <div className="footer__self_bio__container__text">
              <h4 className="footer__self_bio__container__title">
                Bedant Hota
              </h4>
              <p className="footer__self_bio__container__description">
                SDE at 'The Internet Folks'
              </p>
            </div>
          </div>
          <ul className="footer__self_bio__container__social_container">
            <li>
              <a
                className="footer__self_bio__container__social_link"
                href="https://www.instagram.com/mohaneshhota/"
              >
                <UseAnimations
                  animation={instagram}
                  onClick={() => {
                    setIsMobileNav((prev) => !prev);
                  }}
                  size={35}
                  strokeColor="white"
                  wrapperStyle={{
                    zIndex: 2000,
                    position: "relative",
                    cursor: "pointer",
                  }}
                />
              </a>
            </li>
            <li>
              <a
                className="footer__self_bio__container__social_link"
                href="https://twitter.com/BedantHota"
              >
                <UseAnimations
                  animation={twitter}
                  onClick={() => {
                    setIsMobileNav((prev) => !prev);
                  }}
                  size={35}
                  strokeColor="white"
                  wrapperStyle={{
                    zIndex: 2000,
                    position: "relative",
                    cursor: "pointer",
                  }}
                />
              </a>
            </li>
            <li>
              <a
                className="footer__self_bio__container__social_link"
                href="https://www.linkedin.com/in/bedanth/"
              >
                <UseAnimations
                  animation={linkedin}
                  onClick={() => {
                    setIsMobileNav((prev) => !prev);
                  }}
                  size={35}
                  strokeColor="white"
                  wrapperStyle={{
                    zIndex: 2000,
                    position: "relative",
                    cursor: "pointer",
                  }}
                />
              </a>
            </li>
            <li>
              <a
                className="footer__self_bio__container__social_link"
                href="https://github.com/bedantH"
              >
                <UseAnimations
                  animation={github}
                  onClick={() => {
                    setIsMobileNav((prev) => !prev);
                  }}
                  size={35}
                  strokeColor="white"
                  wrapperStyle={{
                    zIndex: 2000,
                    position: "relative",
                    cursor: "pointer",
                  }}
                />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="footer__contact__title">
            <p>Get in touch</p>
            <span
              style={{
                marginTop: "10px",
                color: "#6774FF",
                marginLeft: "10px",
              }}
            >
              <FaArrowRight />
            </span>
          </h3>
          <div
            style={{
              gap: "40px",
            }}
            className="d-flex footer__contact__links"
          >
            <div>
              <h4>EMAIL ME:</h4>
              <a
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "1.1rem",
                  paddingBottom: "5px",
                  borderBottom: "1px solid #c4c4c4",
                  marginTop: "15px",
                }}
                href="mailto:bedanthota@yahoo.com"
              >
                bedanthota@yahoo.com
              </a>
            </div>
            <div>
              <h4>CALL ME:</h4>
              <a
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "1.1rem",
                  paddingBottom: "5px",
                  borderBottom: "1px solid #c4c4c4",
                  marginTop: "15px",
                }}
                href="tel:9136282434"
              >
                (+91) 91362 82434
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "80px",
          bottom: "0px",
          borderTop: "1px solid #c4c4c4",
          marginTop: "50px",
        }}
      >
        <p
          style={{
            width: "fit-content",
            margin: "20px auto",
            display: "block",
          }}
        >
          Developed By @BedantHota
        </p>
      </div>
    </footer>
  );
};

export default Footer;
