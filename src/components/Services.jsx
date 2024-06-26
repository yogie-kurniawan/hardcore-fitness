import React from "react";

const Services = () => {
  return (
    <section className="" id="services">
      <div className="max-w-[1140px] py-20 px-8 m-auto">
        <div>
          <h3 className="med-section-title text-white mb-3">SERVICES</h3>
          <h1 className="section-title text-primary">What We Serve</h1>
        </div>
        <div className="py-20">
          <div className="w-full grid grid-cols-12 items-center gap-5">
            {[1, 2, 3, 4].map((art) => (
              <article className="group col-span-12 md:col-span-6 lg:col-span-3 w-full overflow-hidden bg-gray-700 text-gray-700 hover:bg-primary shadow-3xl ease-in duration-300 hover:text-white font-medium hover:-translate-y-1 px-6 py-4 text-center">
                <h3 className="text-2xl text-white group-hover:text-white ease-in duration-300">
                  Super Training
                </h3>
                <p className="text-sm text-slate-400 mt-3 group-hover:text-slate-400 ease-in duration-300">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Praesentium quisquam reiciendis eum
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
