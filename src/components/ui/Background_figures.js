import classes from "../styles/background_figures.module.css";

function Background_figures(props) {
  return (
    <div className={classes.container} style={{right: props.right, top: props.top}}>
      <div className={classes.stripe} id={classes.one}></div>
      <div className={classes.stripe} id={classes.two}></div>
      <div className={classes.stripe} id={classes.three}></div>
    </div>
  );
}

export default Background_figures;
