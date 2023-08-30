/* eslint-disable react/no-unescaped-entities */
import styles from './Projuct.module.css';
import Colorimage from '../../images/colorPickerProject.png'
import ProductImage from '../../images/todoApplication.png'
import UniqueStoreImage from '../../images/EcomWebImage.png'
import guessNumberImage from "../../images/guessNumber.png";
import { RiBootstrapFill } from "react-icons/ri";
import { BsGithub, BsBoxArrowUpRight } from "react-icons/bs";
import { DiReact } from "react-icons/di";
import { SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";
const Project = () => {

 

  
  return (
    <section className="Projects mt-5 pt-5 ">
      <div className="container">
        <div className="row mt-3">
          <div className="row">
            <div className="col-12">
              <h2 className={styles.sectionHeading}>PORTFOLIO</h2>
              <p className={` sectionParaTheme ${styles.sectionPara}`}>
                Each project is a unique piece of development 🧩
              </p>
            </div>
          </div>
          {/* projecs */}
          <div className="col-12">
            <div className={`row ${styles.projectCard} themeCard`}>
              <div className={`col-md-6 ${styles.projectImage}`}>
                <img src={UniqueStoreImage} alt="" />
              </div>
              <div className={`col-md-6 ${styles.projectDetails}`}>
                <h2 className={` ${styles.projectHeading}`}>
                  e-commerce website
                </h2>
                <p className={` ${styles.projectDescription}`}>
                  Unique Store is an innovative and dynamic e-commerce website
                  meticulously crafted using the powerful React.js framework,
                  offering an unparalleled online shopping experience. Packed
                  with an array of advanced. Unique Store is designed to cater to
                  modern shoppers' needs.
                </p>
                <div className={` ${styles.projectTechUsed}`}>
                  <p>
                    <SiHtml5 color="#E34C26" size={"1.5rem"} />
                  </p>
                  <p>
                    {" "}
                    <SiCss3 color="#2965f1" size={"1.5rem"} />
                  </p>
                  <p>
                    {" "}
                    <SiJavascript color="gold" size={"1.5rem"} />
                  </p>
                  <p>
                    <DiReact color="#313BAC" size={"1.5rem"} />
                  </p>
                  <p>
                    <RiBootstrapFill color="#313BAC" size={"1.5rem"} />
                  </p>
                </div>
                <div className={` ${styles.projectLinkes}`}>
                  <button
                    onClick={() =>
                      window.open(
                        "https://github.com/Luckyhudda/Unique_Store",
                        "_blank"
                      )
                    }
                    className={styles.projectsBtn}
                  >
                    Code{" "}
                    <span className={styles.projectgit}>
                      <BsGithub size={" 1.5rem"} />
                    </span>{" "}
                  </button>
                  <button
                    onClick={() =>
                      window.open(
                        "https://uniquestore-lucky.netlify.app/",
                        "_blank"
                      )
                    }
                    className={styles.projectsBtn}
                  >
                    Live Demo{" "}
                    <span className={styles.projectarrow}>
                      <BsBoxArrowUpRight />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className={`row ${styles.projectCard} themeCard`}>
              <div className={`col-md-6 ${styles.projectImage}`}>
                <img src={guessNumberImage} alt="" />
              </div>
              <div className={`col-md-6 ${styles.projectDetails}`}>
                <h2 className={` ${styles.projectHeading}`}>Guess My Number</h2>
                <p className={` ${styles.projectDescription}`}>
                  "Guess Number" is an engaging JavaScript-based game where
                  players aim to decipher a hidden number. Every guess triggers
                  dynamic color changes in the background, guiding players
                  closer to the answer. Strive for a low score by solving the
                  mystery in minimal attempts.
                </p>
                <div className={` ${styles.projectTechUsed}`}>
                  <p>
                    <SiHtml5 color="#E34C26" size={"1.5rem"} />
                  </p>
                  <p>
                    {" "}
                    <SiCss3 color="#2965f1" size={"1.5rem"} />
                  </p>
                  <p>
                    {" "}
                    <SiJavascript color="gold" size={"1.5rem"} />
                  </p>
                </div>
                <div className={` ${styles.projectLinkes}`}>
                  <button
                    onClick={() =>
                      window.open(
                        "https://github.com/Luckyhudda/GuessNumber",
                        "_blank"
                      )
                    }
                    className={styles.projectsBtn}
                  >
                    Code{" "}
                    <span className={styles.projectgit}>
                      <BsGithub size={" 1.5rem"} />
                    </span>{" "}
                  </button>
                  <button
                    onClick={() =>
                      window.open(
                        "https://luckyhudda.github.io/GuessNumber/",
                        "_blank"
                      )
                    }
                    className={styles.projectsBtn}
                  >
                    Live Demo{" "}
                    <span className={styles.projectarrow}>
                      <BsBoxArrowUpRight />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className={`row ${styles.projectCard} themeCard`}>
              <div className={`col-md-6 ${styles.projectImage}`}>
                <img src={ProductImage} alt="ProductImage" />
              </div>
              <div className={`col-md-6 ${styles.projectDetails}`}>
                <h2 className={` ${styles.projectHeading}`}>
                  Todo Application
                </h2>
                <p className={` ${styles.projectDescription}`}>
                  The MyToDo application is a feature-rich and user-friendly
                  ToDo list manager that empowers users to effortlessly organize
                  their tasks, track their progress, and maintain a productive
                  routine. This application provides a seamless and intuitive
                  interface for managing daily tasks and responsibilities.
                </p>
                <div className={` ${styles.projectTechUsed}`}>
                  <p>
                    <SiHtml5 color="#E34C26" size={"1.5rem"} />
                  </p>
                  <p>
                    {" "}
                    <SiCss3 color="#2965f1" size={"1.5rem"} />
                  </p>
                  <p>
                    {" "}
                    <SiJavascript color="gold" size={"1.5rem"} />
                  </p>
                  <p>
                    <RiBootstrapFill color="#313BAC" size={"1.5rem"} />
                  </p>
                </div>
                <div className={` ${styles.projectLinkes}`}>
                  <button
                    onClick={() =>
                      window.open(
                        "https://github.com/Luckyhudda/ProductTodoApplication",
                        "_blank"
                      )
                    }
                    className={styles.projectsBtn}
                  >
                    Code{" "}
                    <span className={styles.projectgit}>
                      <BsGithub size={" 1.5rem"} />
                    </span>{" "}
                  </button>
                  <button
                    onClick={() =>
                      window.open(
                        "https://luckyhudda.github.io/ProductTodoApplication/",
                        "_blank"
                      )
                    }
                    className={styles.projectsBtn}
                  >
                    Live Demo{" "}
                    <span className={styles.projectarrow}>
                      <BsBoxArrowUpRight />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className={`row ${styles.projectCard} themeCard`}>
              <div className={`col-md-6 ${styles.projectImage}`}>
                <img src={Colorimage} alt="" />
              </div>
              <div className={`col-md-6 ${styles.projectDetails}`}>
                <h2 className={` ${styles.projectHeading}`}>Color Picker</h2>
                <p className={` ${styles.projectDescription}`}>
                  Introducing the "Color Picker" project, crafted with React.js
                  – where organization meets innovation! I've built a smart tree
                  of components that keeps things neat and efficient. But the
                  real star is the validation – it's top-notch.
                </p>
                <div className={` ${styles.projectTechUsed}`}>
                  <p>
                    <SiHtml5 color="#E34C26" size={"1.5rem"} />
                  </p>
                  <p>
                    {" "}
                    <SiCss3 color="#2965f1" size={"1.5rem"} />
                  </p>
                  <p>
                    {" "}
                    <SiJavascript color="gold" size={"1.5rem"} />
                  </p>
                  <p>
                    <DiReact color="#313BAC" size={"1.5rem"} />
                  </p>
                  <p>
                    <RiBootstrapFill color="#313BAC" size={"1.5rem"} />
                  </p>
                </div>
                <div className={` ${styles.projectLinkes}`}>
                  <button
                    onClick={() =>
                      window.open(
                        "https://github.com/Luckyhudda/colorPicker-react",
                        "_blank"
                      )
                    }
                    className={styles.projectsBtn}
                  >
                    Code{" "}
                    <span className={styles.projectgit}>
                      <BsGithub size={" 1.5rem"} />
                    </span>{" "}
                  </button>
                  <button
                    onClick={() =>
                      window.open(
                        "https://color-picker-react-luckyhudda.netlify.app/",
                        "_blank"
                      )
                    }
                    className={styles.projectsBtn}
                  >
                    Live Demo{" "}
                    <span className={styles.projectarrow}>
                      <BsBoxArrowUpRight />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </section>
  );
}

export default Project;