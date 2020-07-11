//@ts-check
import React from "react";
import { motion } from "framer-motion";

/**
 * Basic element wrapper for items in a list in order to indicate new entry or changes to the list
 * @param {object} props
 */
export default (props) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    {...props}
  >
    {props.children}
  </motion.div>
);
