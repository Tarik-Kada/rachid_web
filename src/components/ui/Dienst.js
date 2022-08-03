import classes from "../styles/Dienst.module.css";
import LeesMeer from "./LeesMeer";

function Dienst(props) {
  return <div className={classes.container}>
    <div className={classes.content}>
      <div className={classes.icon}>
        <img src={props.src} alt='icon'></img>
      </div>
      <div className={classes.text}>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
      </div>
    </div>
    <LeesMeer target='/diensten' />
  </div>;
}

export default Dienst;
