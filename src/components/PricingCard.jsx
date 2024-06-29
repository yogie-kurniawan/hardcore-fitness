import React from "react";
import { rupiah } from "../utils/currency";

const PricingCard = ({ priceItem }) => {
  return (
    <article
      className={`w-[300px] rounded-md ${
        priceItem.isMain ? "bg-primary" : "bg-transparent"
      } border border-[var(--primary)] py-8 px-12 shadow-xl group ease-in duration-300 text-white hover:-translate-y-2 hover:bg-primary overflow-hidden`}
    >
      <div className="mb-10">
        <h5 className="text-2xl text-center font-bold text-white">
          {priceItem.title}
        </h5>
        <p className="text-xl text-center text-white">
          {priceItem.target && priceItem.target != ""
            ? `(${priceItem.target})`
            : ""}
        </p>
      </div>
      <div className="mb-5">
        <ul className="list-disc">
          {priceItem.benefits.map((benefit) => (
            <li>{benefit}</li>
          ))}
        </ul>
      </div>
      <h3 className="text-2xl text-center text-primary font-bold tracking-wider ease-in duration-300 text-white text-wrap">
        {rupiah(priceItem.price)}/
        <span className="text-lg">{priceItem.term}</span>
      </h3>
    </article>
  );
};

export default PricingCard;
