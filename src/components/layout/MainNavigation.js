import { Link } from "react-router-dom";

import classes from "../styles/MainNavigation.module.css";
function Navigation() {
  return (
    <div className={classes.navbar}>
      <div className={classes.logo}> <Link to="/">DK Fiber</Link></div>
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
    </div>
  );
}

export default Navigation;
