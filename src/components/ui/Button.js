import { Link } from "react-router-dom";
import classes from "../styles/Buttons.module.css";

function Button(props) {
  return (
    <Link
      to={props.target}
      className={[classes.button, classes.primarybutton].join(" ")}
      style={{ textDecoration: "none"}}
    >
        {props.content}
    </Link>
  );
}

export default Button;
