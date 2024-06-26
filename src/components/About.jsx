import React from "react";

const About = () => {
  return (
    <div className="" id="about">
      <div className="max-w-[1140px] py-20 px-8 m-auto">
        <div className="py-20">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 md:col-span-5">
              <img
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGd5bXxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
                className="w-full object-cover"
              />
            </div>
            <div className="col-span-12 md:col-span-7">
              <div>
                <h3 className="med-section-title text-white mb-3 text-left">
                  About Us
                </h3>
                <h1 className="section-title text-primary text-left">
                  Know Us Better
                </h1>
              </div>
              <div className="text-white py-10">
                <p className="text-lg text-justify tracking-wider">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores cupiditate error, iste iusto minus quam dolor
                  praesentium eius vero pariatur?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
