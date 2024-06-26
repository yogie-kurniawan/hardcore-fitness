import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-[100vh]">
      <img
        src="https://plus.unsplash.com/premium_photo-1663036263525-3059e0c47b96?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="w-full h-full object-cover bg-right"
      />
      <div className="absolute w-full h-full z-1 left-0 top-0 bg-black/80"></div>
      <div className="w-full max-w-[1140px] px-8 h-full m-auto">
        <div className="max-w-full lg:max-w-[65%] absolute z-5 top-[20%] text-white">
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
          <div className="flex gap-10 max-w-full lg:max-w-[65%] absolute mt-20">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
