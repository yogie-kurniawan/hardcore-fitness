import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";

const Footer = () => {
  let date = new Date();
  return (
    <section className="border-t border-slate-800" id="footer">
      <div className="max-w-[1140px] py-20 px-8 m-auto">
        <div className="flex flex-wrap gap-5 text-white w-full justify-between">
          <div>
            <h1 className="text-primary text-2xl">Hardcore Fitness</h1>
            <div className="mt-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15957.0419764163!2d100.3999936!3d-0.9581105!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd4b9532be163b3%3A0x75524a9d158b5ac0!2sHARDCORE%20FITNESS!5e0!3m2!1sen!2sid!4v1719173401814!5m2!1sen!2sid"
                width={"100%"}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div>
            <h3 className="text-primary text-xl mb-3">Services</h3>
            <ul className="text-slate-400">
              <li>Training</li>
              <li>Zumba</li>
              <li>Boxing</li>
            </ul>
          </div>
          <div>
            <h3 className="text-primary text-xl mb-3">
              Contacts & Social Medias
            </h3>
            <ul className="flex gap-5 text-slate-400">
              <li>
                <a
                  href="https://www.instagram.com/hardcorefitness_center/"
                  target="_blank"
                  className="hover:text-[var(--primary)] ease-in duration-300"
                >
                  <FaInstagram size={20} />
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send/?phone=6281267065747"
                  target="_blank"
                  className="flex items-start gap-2 cursor-pointer hover:text-[var(--primary)] ease-in duration-300 "
                >
                  <FaWhatsapp size={20} />
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/Asfc5panZtRWzLFs9"
                  target="_blank"
                  className="flex items-start gap-2 cursor-pointer hover:text-[var(--primary)] ease-in duration-300 "
                >
                  <MdOutlineLocationOn size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-md text-slate-400 mt-10">
          Copyright© • Yogie Kurniawan • {date.getFullYear()}
        </div>
      </div>
    </section>
  );
};

export default Footer;
