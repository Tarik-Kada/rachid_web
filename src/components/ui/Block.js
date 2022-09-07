import classes from "../styles/Block.module.css";

function Block(props) {
  return <div className={classes.container}>
    <div className={classes.content}>
      <div className={classes.text}>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
      </div>
    </div>
  </div>;
}

export default Block;
