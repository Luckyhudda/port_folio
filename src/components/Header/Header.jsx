import { NavLink } from "react-router-dom";
import {useContext} from 'react'
import Styles from "./Header.module.css";
import { FiSun } from "react-icons/fi";
import { BsMoonStars } from "react-icons/bs";
import { RiMenu3Line } from "react-icons/ri";
import { ThemeContect } from "../../contect/ThemeContect";
const Header = () => {
    const { isDark,setIsDark} = useContext(ThemeContect)
     const themeHandler = () =>{
        setIsDark(!isDark)
     }

    const handleNavLinkClick = () => {
      window.scrollTo(0, 0);
    };

  return (
    <div className={`Container-fluid  header ${Styles.header} `}>
      <div className={`container  ${Styles.headerBox}`}>
        <div className={`row ${Styles.headerList}`}>
          <div className="col-3">
            <h2 className={Styles.logo}>
              Lucky<span>.</span>
            </h2>
          </div>
          <div className={`col-6 ${Styles.hiddleData}`}>
            <ul className={` ${Styles.links}`}>
              <li>
                <NavLink
                  onClick={handleNavLinkClick}
                  className={({ isActive }) =>
                    isActive ? "activelink" : "otheLink"
                  }
                  to={"/"}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={handleNavLinkClick}
                  className={({ isActive }) =>
                    isActive ? "activelink" : "otheLink"
                  }
                  to={"/projects"}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={handleNavLinkClick}
                  className={({ isActive }) =>
                    isActive ? "activelink" : "otheLink"
                  }
                  to={"/about"}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={handleNavLinkClick}
                  className={({ isActive }) =>
                    isActive ? "activelink" : "otheLink"
                  }
                  to={"/contect"}
                >
                  Contect me
                </NavLink>
              </li>
            </ul>
          </div>
          <div className={`col-3 ${Styles.headerBtns}`}>
            <div onClick={themeHandler} className={`${Styles.toggleTheme}`}>
              {isDark && (
                <span className={Styles.zooming}>
                  <FiSun size={"1.3rem"} />
                </span>
              )}
              {!isDark && (
                <span>
                  <BsMoonStars />{" "}
                </span>
              )}
            </div>
            <div className={` menuTheme ${Styles.menuBtn}`}>
              <RiMenu3Line />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
