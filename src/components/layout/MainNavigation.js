import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import hamburger from "../../images/hamburger.svg";
import classes from "../styles/MainNavigation.module.css";
import logo from "../../images/png-1.png";

function Navigation() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const [classList, setClassList] = useState([classes.container]);
  const [menuClasses, setMenuClasses] = useState([
    classes.menu,
    classes.hidden,
  ]);

  const closeNav = () => {
    setToggleMenu(false);
    setMenuClasses([classes.menu, classes.hidden]);
    setClassList([classes.container]);
  };

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
    if (!toggleMenu) {
      setMenuClasses([classes.menu]);
      setClassList([classes.container, classes.frosted]);
    } else {
      setMenuClasses([classes.menu, classes.hidden]);
      if (scrollPos < 75) {
        setClassList([classes.container]);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const pos = window.pageYOffset;
      setScrollPos(pos);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrollPos > 75 && !toggleMenu) {
      setClassList([classes.container, classes.frosted]);
    } else if (scrollPos < 75 && !toggleMenu) {
      setClassList([classes.container]);
    }
  }, [toggleMenu, scrollPos]);

  return (
    <div className={classList.join(" ")}>
      <div className={classes.navbar}>
        {/* <div className={classes.textlogo}>
          <Link to="/" onClick={(e) => closeNav()}>
            DK Fiber
          </Link>
        </div> */}

        <div className={classes.logo}>
          <Link to="/" onClick={(e) => closeNav()}>
            <img
              src={logo}
              style={{ maxWidth: "125px", marginBottom: "-2px" }}
              alt="DK fiber logo."
            />
          </Link>
        </div>
        <div className={classes.links}>
          <div className={classes.link}>
            <Link to="/over">Over ons</Link>
          </div>
          <div className={classes.link}>
            <Link to="/diensten">Diensten</Link>
          </div>
          <div className={classes.link}>
            <Link to="/maatschappelijk">Maatschappelijk</Link>
          </div>
          <div className={classes.link}>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <button className={classes.hamburger} onClick={(e) => toggleNav()}>
          <img src={hamburger} alt="Hamburger menu button."></img>
        </button>
      </div>
      <div className={menuClasses.join(" ")}>
        <div className={classes.link}>
          <Link to="/over" onClick={(e) => closeNav()}>
            Over ons
          </Link>
        </div>
        <div className={classes.link}>
          <Link to="/diensten" onClick={(e) => closeNav()}>
            Diensten
          </Link>
        </div>
        <div className={classes.link}>
          <Link to="/maatschappelijk" onClick={(e) => closeNav()}>
            Maatschappelijk
          </Link>
        </div>
        <div className={classes.link}>
          <Link to="/contact" onClick={(e) => closeNav()}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
