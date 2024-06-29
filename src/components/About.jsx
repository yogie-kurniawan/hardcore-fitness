import React from "react";
import { motion, useScroll } from "framer-motion";

const About = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div className="" id="about">
      <div className="max-w-[1140px] py-20 px-8 m-auto">
        <div className="py-20">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 md:col-span-5">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGd5bXxlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                  className="w-full object-cover"
                />
              </motion.div>
            </div>
            <div className="col-span-12 md:col-span-7">
              <motion.div
                initial={{ y: 300, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                <div>
                  <h3 className="med-section-title text-white mb-3 text-left">
                    About Us
                  </h3>
                  <h1 className="section-title text-primary text-left">
                    Know Us Better
                  </h1>
                </div>
              </motion.div>
              <motion.div
                initial={{ x: 300, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <div className="text-slate-300 py-10">
                  <p className="text-lg text-justify tracking-wider ">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores cupiditate error, iste iusto minus quam dolor
                    praesentium eius vero pariatur?
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
