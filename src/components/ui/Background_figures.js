import classes from "../styles/background_figures.module.css";
import { AnimatePresence, motion } from "framer-motion";

function Background_figures() {
  return (
    <div className={classes.container}>
      <AnimatePresence initial={true}>
        <motion.div
          initial={{ x: -1000, y: 717.5, rotate: -30 }}
          animate={{ x: -100, y: 200 }}
          transition={{ delay: .1, duration: .5 }}
          className={classes.stripe}
        ></motion.div>
        <motion.div
          initial={{ x: -1025, y: 717.5, rotate: -30 }}
          animate={{ x: -125, y: 200 }}
          transition={{ delay: 0.2, duration: .5 }}
          className={classes.stripe}
        ></motion.div>
        <motion.div
          initial={{ x: -1050, y: 717.5, rotate: -30 }}
          animate={{ x: -150, y: 200 }}
          transition={{ delay: 0.3, duration: .5 }}
          className={classes.stripe}
        ></motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Background_figures;
