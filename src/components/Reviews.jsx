import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { FaStar } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const reviews = [
  {
    img: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    status: "Member",
    rating: 5,
    name: "Yogie",
    text: "Tempatnya sangat nyaman dan alat-alatnya lengkap, sangat recommended!",
  },
  {
    img: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    status: "Member",
    name: "John",
    rating: 5,
    text: "Tempatnya sangat nyaman dan alat-alatnya lengkap, sangat recommended!",
  },
  {
    img: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    status: "Member",
    name: "Ron",
    rating: 5,
    text: "Tempatnya sangat nyaman dan alat-alatnya lengkap, sangat recommended!",
  },
  {
    img: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    status: "Member",
    name: "Siska",
    rating: 5,
    text: "Tempatnya sangat nyaman dan alat-alatnya lengkap, sangat recommended!",
  },
];
const Reviews = () => {
  return (
    <section className="" id="reviews">
      <div className="max-w-[1140px] py-20 px-8 m-auto">
        <div className="py-20">
          <div>
            <h3 className="med-section-title text-white mb-3 text-left">
              Reviews
            </h3>
            <h1 className="section-title text-primary text-left">
              What Our Happy Clients Say
            </h1>
          </div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={30}
            slidesPerView={3}
            navigation
            loop={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            className="mySwiper w-full h-[250px] mt-10 px-10"
          >
            {reviews.map((review) => (
              <SwiperSlide className="w-[400px]  border border-primary px-8 py-4 rounded-xl text-white">
                <div className="flex gap-5 items-center">
                  <div className="rounded-full w-16 h-16 border border-primary overflow-hidden">
                    <img
                      src={review.img}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-white text-xl font-medium">
                      {review.name}
                    </span>
                    <span className="text-slate-500 text-normal font-medium">
                      {review.status}
                    </span>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="mb-3 flex gap-2">
                    <FaStar size={15} color="yellow" />
                    <FaStar size={15} color="yellow" />
                    <FaStar size={15} color="yellow" />
                    <FaStar size={15} color="yellow" />
                    <FaStar size={15} color="yellow" />
                  </div>
                  <p className="text-white text-md text-justify">
                    {review.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
