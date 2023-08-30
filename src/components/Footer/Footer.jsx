import { NavLink } from 'react-router-dom';
import styles from './Footer.module.css'
import { SiLinkedin } from "react-icons/si";
import { ImGithub } from "react-icons/im";
import { useContext } from 'react';
import { ThemeContect } from '../../contect/ThemeContect';
const Footer = () => {
  const {isDark} = useContext(ThemeContect)
  return (
    <>
      <section className="container-fluid">
        <div className={`container ${styles.footer}`}>
          <div className="row">
            <div className="col-6">
              <h2 className={styles.footerHeading}>Portfolio</h2>
              <div className={styles.footerdata}>
                <NavLink
                  className={`${styles.footerLinks} footerLinks`}
                  to={"/"}
                >
                  Home
                </NavLink>
                <NavLink
                  className={`${styles.footerLinks} footerLinks`}
                  to={"/about"}
                >
                  About
                </NavLink>
              </div>
            </div>
            <div className="col-6">
              <h2 className={styles.footerHeading}>Social</h2>
              <div className={styles.footerdata}>
                <a
                  className={`${styles.footerLinks} footerLinks`}
                  href="https://github.com/Luckyhudda"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                  <span className="ms-2">
                    <ImGithub
                      color={isDark ? "white" : "black"}
                      size={"1rem"}
                    />
                  </span>
                </a>
                <a
                  className={`${styles.footerLinks} footerLinks`}
                  href="https://www.linkedin.com/in/lucky-hudda-59a0a7254/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                  <span className="ms-2">
                    <SiLinkedin color="#0A66C2" size={"1rem"} />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid">
        <div className="container">
          <div className="row">
            <div className={`rocol-12w ${styles.mainFooter_line}`}>
              <div className={`${styles.coptRightLine} themeNameFooter`}>
                Copyright &copy; 2023 <span> - Lucky hudda | Portfolio</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;