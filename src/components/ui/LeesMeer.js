import { Link } from "react-router-dom";
import classes from "../styles/LeesMeer.module.css";
import arrow from "../../images/Arrow.svg";

function LeesMeer(props) {
  return (
    <Link to={props.target} style={{ textDecoration: "none" }}>
      <div className={classes.link}>
        LEES MEER
        <img src={arrow} alt="Arrow"></img>
      </div>
    </Link>
  );
}

export default LeesMeer;
