import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      keyboard={{
        enabled: false,
      }}
      pagination={{
        clickable: false,
      }}
      autoplay={{
        delay: 3000,
      }}
      navigation={false}
      className="w-full h-[100vh]"
      modules={[Autoplay]}
    >
      <SwiperSlide>
        <img
          src="https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="w-full h-full object-cover bg-right"
        />
        <div className="absolute w-full h-full z-1 left-0 top-0 bg-black/80"></div>
        <div className="w-full max-w-[1140px] px-8 h-full m-auto">
          <div className="max-w-full lg:max-w-[65%] absolute z-5 top-[30%] text-white">
            <motion.div
              initial={{ x: -300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <h1 className="text-4xl md:text-6xl drop-shadow-2xl font-bold mb-5">
                Achieve your dream physique
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold">
                At <span className="text-primary">Hardcore Fitness</span>
              </h2>
              <div className="mt-7">
                <a
                  href="https://api.whatsapp.com/send/?phone=6281267065747"
                  target="_blank"
                  className="btn-primary"
                >
                  Join Now
                </a>
              </div>
              {/* <div className="flex gap-10 max-w-full lg:max-w-[65%] absolute mt-20">
                <div>
                  <div className="text-primary text-3xl tracking-wider font-bold">
                    200+
                  </div>
                  <div className="text-white text-lg tracking-wider font-medium">
                    Members
                  </div>
                </div>
                <div>
                  <div className="text-primary text-3xl tracking-wider font-bold">
                    120+
                  </div>
                  <div className="text-white text-lg tracking-wider font-medium">
                    Reviews
                  </div>
                </div>
                <div>
                  <div className="text-primary text-3xl tracking-wider font-bold">
                    50+
                  </div>
                  <div className="text-white text-lg tracking-wider font-medium">
                    Machines
                  </div>
                </div>
              </div> */}
            </motion.div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://plus.unsplash.com/premium_photo-1663036263525-3059e0c47b96?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full h-full object-cover bg-right"
        />
        <div className="absolute w-full h-full z-1 left-0 top-0 bg-black/80"></div>
        <div className="w-full max-w-[1140px] px-8 h-full m-auto">
          <div className="max-w-full lg:max-w-[65%] absolute z-5 top-[30%] text-white">
            <motion.div
              initial={{ x: -300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <h1 className="text-4xl md:text-6xl drop-shadow-2xl font-bold mb-5">
                Achieve your dream physique
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold">
                At <span className="text-primary">Hardcore Fitness</span>
              </h2>
              <div className="mt-7">
                <a
                  href="https://api.whatsapp.com/send/?phone=6281267065747"
                  target="_blank"
                  className="btn-primary"
                >
                  Join Now
                </a>
              </div>
              {/* <div className="flex gap-10 max-w-full lg:max-w-[65%] absolute mt-20">
              <div>
                <div className="text-primary text-3xl tracking-wider font-bold">
                  200+
                </div>
                <div className="text-white text-lg tracking-wider font-medium">
                  Members
                </div>
              </div>
              <div>
                <div className="text-primary text-3xl tracking-wider font-bold">
                  120+
                </div>
                <div className="text-white text-lg tracking-wider font-medium">
                  Reviews
                </div>
              </div>
              <div>
                <div className="text-primary text-3xl tracking-wider font-bold">
                  50+
                </div>
                <div className="text-white text-lg tracking-wider font-medium">
                  Machines
                </div>
              </div>
            </div> */}
            </motion.div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
