import { Link } from "react-router-dom";
import classes from "../styles/Buttons.module.css";

function AltButton(props) {
  return (
    <Link
      to={props.target}
      className={[classes.button, classes.altbutton].join(" ")}
      style={{ textDecoration: "none"}}
    >
        {props.content}
    </Link>
  );
}

export default AltButton;
