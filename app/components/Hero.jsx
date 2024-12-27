"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // ייבוא אייקון ה-WhatsApp
import Image from "next/image";
import YoadImg from "../../public/images/hero.svg"; // החלף בנתיב המתאים לתמונה

const HeroSection = () => {
  const whatsappNumber = "972542211851"; // החלף למספר הוואטסאפ (כולל קידומת מדינה ללא +)
  const whatsappMessage = encodeURIComponent(
    "שלום יועד, אני מעוניין בפרטים נוספים על שירותי הקריינות שלך."
  );

  return (
    <section className="w-5/6 mx-auto bg-[#14213d] text-white min-h-[90vh] flex flex-col-reverse md:flex-row-reverse items-center justify-between px-6 md:px-20 py-12 transition-colors duration-300">
      {/* טקסט */}
      <div className="flex-1 text-center md:text-right md:mt-0 md:mr-5">
        <h1 className="text-3xl md:text-6xl md:mb-2 font-bold">
          <span className="text-[#fca311] font-rubik">יועד ליפסי</span>
        </h1>
        <h2 className="text-lg md:text-2xl font-rubik font-medium md:mb-2 text-[#e5e5e5]">
          שירותי קריינות מקצועיים לכל מטרה
        </h2>
        <p className="text-md md:text-xl mb-8 font-rubik text-[#e5e5e5]">
          קריינות מקצועית לרדיו, טלוויזיה, פרסומות, פודקאסטים, דיבוב, והקלטות
          למרכזיות.
        </p>
        <div className="flex flex-wrap justify-center md:justify-start">
          <a
            href="#portfolio"
            className="bg-[#fca311] font-rubik text-black font-bold py-2 px-4 md:py-3 md:px-6 rounded-lg hover:bg-[#e59400] transition"
          >
            האזינו לדוגמאות
          </a>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center border-2 mr-3 border-[#fca311] text-[#fca311] font-bold py-2 px-4 md:py-3 md:px-6 rounded-lg hover:bg-[#fca311] hover:text-black transition"
          >
            <FaWhatsapp className="mr-2 order-1 text-lg" /> צור קשר
          </a>
        </div>
      </div>

      {/* תמונה */}
      <div className="flex-1 flex justify-center relative md:mt-0">
        <Image
          src={YoadImg}
          alt="יועד ליפסי"
          width={400}
          height={400}
          className="relative z-20 mr-5 w-[100%] md:w-[600px] max-h-[50vh] md:max-h-[90vh] object-contain"
        />
      </div>
    </section>
  );
};

export default HeroSection;
