import classes from "../styles/Footer.module.css";
import MainNavigation from "./MainNavigation";

function Footer() {
  return (
    <div className={classes.container}>
      <div className={classes.footer}>
        <MainNavigation />
      </div>
    </div>
  );
}

export default Footer;
