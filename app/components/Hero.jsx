"use client";

import React from "react";
import Image from "next/image";
import YoadImg from "../../public/images/heroimg.png"; // החלף בנתיב המתאים לתמונה
import Shape from "../../public/images/greenshape.png"; // ייבוא הצורה

const HeroSection = () => {
  return (
    <section className="bg-white w-5/6 mx-auto text-black dark:bg-black dark:text-white min-h-[90vh] flex flex-col-reverse md:flex-row-reverse items-center justify-between px-6 md:px-20 py-12 transition-colors duration-300">
      {/* טקסט */}
      <div className="flex-1 text-center md:text-right mt-4 md:mt-0 md:mr-5">
        <h1 className="text-3xl md:text-6xl font-bold mb-0 mt-3 md:mt-0 md:mb-2">
          <span className="text-[#32FF72] dark:text-[#28D65A]  font-rubik">
            יועד ליפסי
          </span>
        </h1>
        <h2 className="text-lg md:text-2xl font-rubik font-medium md:mb-2">
          שירותי קריינות מקצועיים לכל מטרה{" "}
        </h2>
        <p className="text-md md:text-xl mb-8 font-rubik">
          קריינות לרדיו, טלוויזיה, פרסומות, פודקאסטים, דיבוב, והקלטות למרכזיות.
        </p>
        <div className="flex flex-wrap justify-center md:justify-start">
          <a
            href="#portfolio"
            className="bg-[#32FF72] font-rubik text-black font-bold py-3 px-6 rounded-lg hover:bg-[#28D65A] transition"
          >
            האזינו לדוגמאות{" "}
          </a>
          <a
            href="#contact"
            className="border-2 mr-3 border-[#32FF72] text-[#32FF72] font-bold py-3 px-6 rounded-lg hover:bg-[#32FF72] hover:text-black transition"
          >
            צור קשר
          </a>
        </div>
      </div>

      {/* תמונה */}
      <div className="flex-1 flex justify-center relative md:mt-0">
        {/* צורה */}
        <div className="absolute top-8 -right-10 -left-10 md:top-24 md:right-0 h-[100%] md:w-[100%] md:h-[80%] max-h-[90vh] z-10">
          <Image
            src={Shape}
            alt="צורה לא סימטרית"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* תמונה */}
        <Image
          src={YoadImg}
          alt="יועד ליפסי"
          width={400}
          height={400}
          className="relative z-20 w-[100%] md:w-[600px] max-h-[50vh] md:max-h-[90vh] object-contain"
        />

        {/* דיב ירוק עם בורדר שחור */}
        <div className="absolute bottom-24 -right-0 font-rubik md:right-16 bg-[#32FF72] dark:bg-[#28D65A] text-black dark:text-white border-2 border-black dark:border-white px-3 py-1 text-sm font-semibold rounded-full shadow-lg z-30">
          17 שנות ניסיון{" "}
        </div>

        {/* דיב שחור עם בורדר לבן */}
        <div className="absolute bottom-10 md:bottom-20 font-rubik left-0 md:left-16 bg-black dark:bg-white text-white dark:text-black border-2 border-white dark:border-black px-3 py-1 text-sm font-semibold rounded-full shadow-lg z-30">
          3 ימים וזה אצלכם
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
