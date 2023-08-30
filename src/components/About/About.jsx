import styles from './About.module.css'
import lepiImage from '../../images/programer.png'
const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className={`row ${styles.aboutBox}`}>
          <div className="col-md-5">
            <div className={styles.leptopImage}>
              <img src={lepiImage} alt="image" />
              <p className={styles.signature}>Lucky</p>
            </div>
          </div>
          <div className="col-md-7">
            <div className={styles.aboutData}>
                <h1>About me</h1>
              <h2>
                A dedicated Front-end Developer based in Rajastha, India 📍
              </h2>
              <p>
                As a Junior Front-End Developer, I possess an impressive arsenal
                of skills in HTML, CSS, JavaScript, React, Bootstrap, and React. I
                excel in designing and maintaining responsive websites that
                offer a smooth user experience. My expertise lies in crafting
                dynamic, engaging interfaces through writing clean and optimized
                code and utilizing cutting-edge development tools and
                techniques. I am also a team player who thrives in collaborating
                with cross-functional teams to produce outstanding web
                applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;