import "./about.scss";
import {motion, useInView } from "framer-motion";
import { Progress } from "@chakra-ui/react";
import { useRef } from "react";

const variants = {
  initial: {
    x: -50,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const About = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Learning and Getting Better
          <br />
          With More Projects
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"purple"}}>My</motion.b> Skillset
          </h1>
        </div>
        <div className="title">
          <h1>
            And <motion.b whileHover={{color:"purple"}}>Knowledge</motion.b>
          </h1>
          <button><a href="#Portfolio">My Projects</a></button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ scale: 1.5, background: "lightgray", color: "black" }}
        >
          <h2>General</h2>
          <h3>FrontEnd</h3>
          <Progress colorScheme="purple" size="sm" hasStripe value={74} />
          <h3>Design</h3>
          <Progress colorScheme="purple" size="sm" hasStripe value={64} />
          <h3>Animation</h3>
          <Progress colorScheme="purple" size="sm" hasStripe value={70} />
          <h3>BackEnd</h3>
          <Progress colorScheme="purple" size="sm" hasStripe value={54} />
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ scale: 1.5, background: "lightgray", color: "black" }}
        >
          <h2>General</h2>
          <h3>FrontEnd</h3>
          <Progress colorScheme="purple" size="sm" hasStripe value={74} />
          <h3>Design</h3>
          <Progress colorScheme="purple" size="sm" hasStripe value={64} />
          <h3>Animation</h3>
          <Progress colorScheme="purple" size="sm" hasStripe value={70} />
          <h3>BackEnd</h3>
          <Progress colorScheme="purple" size="sm" hasStripe value={54} />
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ scale: 1.5, background: "lightgray", color: "black" }}
        >
          <h2>Frameworks/Libraries</h2>
          <h3>FrontEnd</h3>
          <Progress colorScheme="purple" size="sm" hasStripe value={74} />
          <h3>Design</h3>
          <Progress colorScheme="purple" size="sm" hasStripe value={64} />
          <h3>Animation</h3>
          <Progress colorScheme="purple" size="sm" hasStripe value={70} />
          <h3>BackEnd</h3>
          <Progress colorScheme="purple" size="sm" hasStripe value={54} />
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ scale: 1.5, background: "lightgray", color: "black" }}
        >
          <h2>General</h2>
          <h3>FrontEnd</h3>
          <Progress colorScheme="purple" size="sm" hasStripe value={74} />
          <h3>Design</h3>
          <Progress colorScheme="purple" size="sm" hasStripe value={64} />
          <h3>Animation</h3>
          <Progress colorScheme="purple" size="sm" hasStripe value={70} />
          <h3>BackEnd</h3>
          <Progress colorScheme="purple" size="sm" hasStripe value={54} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
