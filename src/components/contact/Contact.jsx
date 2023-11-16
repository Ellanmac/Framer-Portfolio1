import "./contact.scss";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};
const Contact = () => {
   
    const ref=useRef();
    const formRef = useRef();
    const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
    const isInView=useInView(ref, {margin:"-100px"});

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_jaz2rlp', 'template_ytsbzlq', formRef.current, 'N8qlxDBaGVVGvFOed')
          .then((result) => {
            setSuccess(true);
            
          

              console.log(result.text);
          }, (error) => {
            setError(true)
              console.log(error.text);
          });
          setTimeout(()=>{
            setSuccess(false);
            setError(false);
          }, 3000);
      };
   
    
  return (
    <motion.div
      className="contact"
    //   variants={variants}
    //   initial="initial"
    //   whileInView="animate"
    //   ref={ref}
    >
      <motion.div  className="textContainer">
        <motion.h1 >Contact Me</motion.h1>
        <motion.div  className="item">
          <h2>Mail</h2>
          <span>ellanmacemail@gmail.com</span>
        </motion.div>
        <motion.div  className="item">
          <h2>Address</h2>
          <span>2105 Bella Casa St, Davis</span>
        </motion.div>
        <motion.div  className="item">
          <h2>Phone</h2>
          <span>707-363-2216</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <div className="svgContainer">
        <motion.div
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
          className="mysvg"
        >
          <svg
            width="450px"
            height="450px"
            viewBox="0 0 1920 1920"
            fill="purple"
          >
            <motion.path
              strokeWidth={0.2}
              initial={{ pathLength: 0 }}
              animate={isInView && {pathLength:1,}}
              trnasition={{duration:3}}
              d="M0 1694.235h1920V226H0v1468.235ZM112.941 376.664V338.94H1807.06v37.723L960 1111.233l-847.059-734.57ZM1807.06 526.198v950.513l-351.134-438.89-88.32 70.475 378.353 472.998H174.042l378.353-472.998-88.32-70.475-351.134 438.89V526.198L960 1260.768l847.059-734.57Z"
            />
          </svg>
        </motion.div>
        </div>
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
          ref={formRef}
          onSubmit={sendEmail}
        >
          <input type="text" required placeholder="Name" name="name"/>
          <input type="email" required placeholder="Email" name="email"/>
          <textarea rows={8} placeholder="Message" name="message"/>
          <button>Submit</button>
          {error && <div>Error</div>}
          {success && <div>Success</div>}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
