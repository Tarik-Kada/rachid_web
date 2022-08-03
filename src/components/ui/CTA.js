import classes from "../styles/CTA.module.css";
import Alt2Button from "./Alt2Button";

function CTA(props) {
  return <div className={classes.container}>
    <h2 className={classes.question}>{props.question}</h2>
    <h2 className={classes.calltoaction}>{props.cta}</h2>
    <Alt2Button target="/contact" content="NEEM CONTACT MET ONS OP" width="30" />
  </div>;
}

export default CTA;
