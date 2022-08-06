import { motion } from "framer-motion";

function AnimatedPage(props) {
  return (
      <motion.div
        initial={{ opacity: 0, x: 400 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -400 }}
        transition={{ duration: 0.5 }}
      >
        {props.children}
      </motion.div>
  );
}

export default AnimatedPage;
