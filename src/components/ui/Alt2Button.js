import { Link } from "react-router-dom";
import classes from "../styles/Buttons.module.css";

function Alt2Button(props) {
  return (
    <Link
      to={props.target}
      className={[classes.button, classes.alt2button].join(" ")}
      style={{ textDecoration: "none", width: props.width + "%" }}
    >
        {props.content}
    </Link>
  );
}

export default Alt2Button;
