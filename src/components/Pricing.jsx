import React from "react";

const Pricing = () => {
  return (
    <section id="pricing">
      <div className="max-w-[1140px] py-20 px-8 m-auto">
        <div>
          <h3 className="med-section-title text-white mb-3">PRICING</h3>
          <h1 className="section-title text-primary">Best Prices</h1>
        </div>
        <div className="py-20">
          <div className="w-full flex flex-wrap justify-center gap-5">
            <article className="w-[300px] rounded-md bg-transparent border border-[var(--primary)] py-8 px-12 shadow-xl group ease-in duration-300 text-white hover:-translate-y-2 hover:bg-primary overflow-hidden">
              <div className="mb-10">
                <h5 className="text-2xl text-center font-bold text-white">
                  Harian
                </h5>
              </div>
              <div className="mb-5">
                <ul className="list-disc">
                  <li>Free Wifi</li>
                  <li>Free Towel</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                </ul>
              </div>
              <h3 className="text-2xl text-center text-primary font-bold tracking-wider ease-in duration-300 group-hover:text-white">
                Rp50.000
              </h3>
            </article>
            <article className="w-[300px] rounded-md bg-primary border border-[var(--primary)] py-8 px-12 shadow-xl group ease-in duration-300 text-white hover:-translate-y-2 overflow-hidden">
              <div className="mb-10">
                <h5 className="text-2xl text-center font-bold text-white">
                  Member
                </h5>
                <p className="text-xl text-center text-white">(Umum)</p>
              </div>
              <div className="mb-5">
                <ul className="list-disc">
                  <li>Free Wifi</li>
                  <li>Free Towel</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                </ul>
              </div>
              <h3 className="text-2xl text-center text-primary font-bold tracking-wider ease-in duration-300 text-white">
                Rp225.000/<span className="text-lg">bulan</span>
              </h3>
            </article>
            <article className="w-[300px] rounded-md bg-transparent border border-[var(--primary)] py-8 px-12 shadow-xl group ease-in duration-300 text-white hover:-translate-y-2 hover:bg-primary overflow-hidden">
              <div className="mb-10">
                <h5 className="text-2xl text-center font-bold text-white">
                  Member
                </h5>
                <p className="text-xl text-center text-white">(Pelajar)</p>
              </div>
              <div className="mb-5">
                <ul className="list-disc">
                  <li>Free Wifi</li>
                  <li>Free Towel</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                </ul>
              </div>
              <h3 className="text-2xl text-center text-primary font-bold tracking-wider ease-in duration-300 group-hover:text-white">
                Rp170.000/<span className="text-lg">bulan</span>
              </h3>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
