import React from "react";
import PricingCard from "./PricingCard";
import { motion } from "framer-motion";
const pricingItems = [
  {
    title: "Harian",
    isMain: false,
    target: "",
    price: "50000",
    term: "hari",
    benefits: ["Free Wifi", "Free Towel", "loremkj i giajweiog", "jwioejgioe"],
  },
  {
    title: "Member",
    target: "Umum",
    isMain: true,
    price: "225000",
    term: "bulan",
    benefits: ["Free Wifi", "Free Towel", "loremkj i giajweiog", "jwioejgioe"],
  },
  {
    title: "Harian",
    target: "Mahasiswa",
    isMain: false,
    price: "170000",
    term: "bulan",
    benefits: ["Free Wifi", "Free Towel", "loremkj i giajweiog", "jwioejgioe"],
  },
];

const Pricing = () => {
  let delay = 0;
  return (
    <section id="pricing">
      <div className="max-w-[1140px] py-20 px-8 m-auto">
        <motion.div
          initial={{ y: 300, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <div>
            <h3 className="med-section-title text-white mb-3">PRICING</h3>
            <h1 className="section-title text-primary">Best Prices</h1>
          </div>
        </motion.div>
        <div className="py-20">
          <div className="w-full flex flex-wrap justify-center gap-5">
            {pricingItems.map((priceItem) => {
              delay += 0.2;
              return (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: delay, duration: 0.3 }}
                >
                  <PricingCard priceItem={priceItem} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
