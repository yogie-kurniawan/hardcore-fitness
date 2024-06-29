import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <article className="group w-[300px] overflow-hidden bg-transparent text-gray-700 hover:bg-primary hover:-translate-y-2 shadow-3xl ease-in duration-300 hover:text-white font-medium px-6 py-4 text-center">
      <h3 className="text-2xl text-secondary ease-in duration-300">
        {service.title}
      </h3>
      <p className="text-sm text-slate-400 mt-3 group-hover:text-slate-400 ease-in duration-300">
        {service.desc}
      </p>
    </article>
  );
};

export default ServiceCard;
