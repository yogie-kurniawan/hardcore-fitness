import React from "react";
import { motion, useScroll } from "framer-motion";

const trainers = [
  {
    img: "https://images.unsplash.com/photo-1581009137042-c552e485697a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Riski Fernandes",
    details: "Lorem ipsum dolor sit amet.",
  },
  {
    img: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Ron Weasley",
    details: "Lorem ipsum dolor sit amet.",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1682435533755-273aec988f08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGd5bXxlbnwwfHwwfHx8MA%3D%3D",
    name: " John Sina",
    details: "Lorem ipsum dolor sit amet.",
  },
];

const Trainers = () => {
  let delay = 0;
  return (
    <section className="" id="trainers">
      <div className="max-w-[1140px] py-20 px-8 m-auto">
        <motion.div
          initial={{ y: 300, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <div>
            <h3 className="med-section-title text-white mb-3">TRAINERS</h3>
            <h1 className="section-title text-primary">Meet Our Trainers</h1>
          </div>
        </motion.div>
        <div className="py-20">
          <div className="flex justify-center flex-wrap gap-10">
            {trainers.map((trainer) => {
              delay += 0.2;
              return (
                <motion.div
                  initial={{ y: 300, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: delay, duration: 0.3 }}
                >
                  <article className="w-[250px]">
                    <img
                      src={trainer.img}
                      alt=""
                      className="w-full rounded-lg h-60 object-cover ease-in duration-300 hover:scale-90"
                    />
                    <div className="text-white mt-3">
                      <h4 className="text-2xl font-medium text-primary tracking-wider">
                        {trainer.name}
                      </h4>
                      <p>{trainer.details}</p>
                    </div>
                  </article>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trainers;
