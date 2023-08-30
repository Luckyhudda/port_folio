/* eslint-disable react/no-unescaped-entities */
import styles from "./Hero.module.css";
import profileImage from "./../../images/profile.jpg";
import HandImage from "./../../images/waveHand.png";
import HtmlImage from "./../../images/html5-logo.png";
import CssImage from "./../../images/css3_badge.png";
import JsImage from "./../../images/js.jfif";
import BootstrapImage from "./../../images/bootstrap.jfif";
import ReactImage from "./../../images/react.jfif";
import { ImGithub } from "react-icons/im";
import { SiLinkedin, SiLeetcode } from "react-icons/si";
import { useContext } from "react";
import { ThemeContect } from "../../contect/ThemeContect";
const Hero = () => {
  const { isDark } = useContext(ThemeContect);
  return (
    <section className={` ${styles.Hero_Section} container`}>
      <div className={`row  mt-3 ${styles.hero_box}`}>
        <div className={`col-md-5 ${styles.profileOne}`}>
          <div className={styles.imageBox}>
            <img
              src={profileImage}
              className={styles.profileImg}
              alt="Profile"
            />
          </div>
        </div>
        <div className={`col-md-7 ${styles.mainHeading} mainHeadingTheme`}>
          <h1>
            Front-End React Developer{" "}
            <span className={styles.handWave}>
              <img src={HandImage} alt="" />
            </span>
          </h1>
          <p>
            Hi, I'm Lucky Hudda. A passionate Front-end
            <span className={styles.bgPlat}> React Developer</span> based in
            Jaipur,Rj. India. 📍{" "}
          </p>
          <div className={styles.socialLinks}>
            <a
              href="https://github.com/Luckyhudda"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImGithub color={isDark ? "white" : "black"} size={"2rem"} />
            </a>
            <a
              href="https://www.linkedin.com/in/lucky-hudda-59a0a7254/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLinkedin color="#0A66C2" size={"2rem"} />
            </a>
            <a
              href="https://leetcode.com/Luckyhudda/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLeetcode color="gold" size={"2rem"} />
            </a>
          </div>
        </div>
        <div className={`col-md-5 ${styles.profileTwo}`}>
          <div className={styles.imageBox}>
            <img
              src={profileImage}
              className={styles.profileImg}
              alt="Profile"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className={`col-12 ${styles.techno}`}>
          <p>
            Tech Stack <span>|</span>
          </p>

          <div className={styles.techImgBox}>
            <div className={styles.techImg}>
              <img src={HtmlImage} alt="html" />
            </div>
            <div className={styles.techImg}>
              <img src={CssImage} alt="css" />
            </div>
            <div className={styles.techImg}>
              <img src={JsImage} alt="JavaScript" />
            </div>
            <div className={styles.techImg}>
              <img src={BootstrapImage} alt="Bootstrap" />
            </div>
            <div className={styles.techImg}>
              <img src={ReactImage} alt="React" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
