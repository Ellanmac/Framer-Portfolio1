import { useRef } from "react";
import "./portfolio.scss";
import { useScroll, useSpring, motion, useTransform } from "framer-motion";
const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "jsadpoaskosadjsapdka;lsdkasodaj",
    link: "https://chakra-ui.com/docs/styled-system/responsive-styles",
  },
  {
    id: 2,
    title: "React Gallery",
    img: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "jsadpoaskosadjsapdka;lsdkasodaj",
    link: "https://chakra-ui.com/docs/styled-system/responsive-styles",
  },
  {
    id: 3,
    title: "React Game",
    img: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "jsadpoaskosadjsapdka;lsdkasodaj",
    link: "https://chakra-ui.com/docs/styled-system/responsive-styles",
  },
  {
    id: 4,
    title: "React Store",
    img: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "jsadpoaskosadjsapdka;lsdkasodaj",
    link: "https://chakra-ui.com/docs/styled-system/responsive-styles",
  },
];
const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer"ref={ref} >
            <img src={item.img}></img>
          </div>

          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button>
              <a href={item.link} target="_blank" rel="noreferrer" >See Demo</a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
