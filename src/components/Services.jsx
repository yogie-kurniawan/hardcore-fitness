import React from "react";
import { motion, useScroll } from "framer-motion";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Super Training",
    desc: "lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quisquam reiciendis eum",
  },
  {
    title: "Zumba Class",
    desc: "lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quisquam reiciendis eum",
  },
  {
    title: "Boxing",
    desc: "lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quisquam reiciendis eum",
  },
];

const Services = () => {
  let delay = 0;
  return (
    <section className="" id="services">
      <div className="max-w-[1140px] py-20 px-8 m-auto">
        <motion.div
          initial={{ y: 300, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <div>
            <h3 className="med-section-title text-white mb-3">SERVICES</h3>
            <h1 className="section-title text-primary">What We Serve</h1>
          </div>
        </motion.div>
        <div className="py-20">
          <div className="w-full flex justify-center items-center flex-wrap gap-5">
            {services.map((service) => {
              delay += 0.2;
              return (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: delay, duration: 0.3 }}
                >
                  <ServiceCard service={service} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
