"use client";

import React, { useState } from "react";
import LineSvg from "../../public/images/line.svg"; // נתיב ל-SVG של הקו

const YouTubeVideo = ({ videoId }) => {
  return (
    <div className="relative w-full h-0 pb-[56.25%]">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

const ExamplesSection = () => {
  const categories = {
    תשדירי_חסות: [
      { id: "tNs7nDINook", title: "קריינות לרדיו 3" },
      { id: "VZVopPZjG6k", title: "קריינות לרדיו 2" },
      { id: "PRgN-tcU_eQ", title: "קריינות לטלוויזיה 1" },
      { id: "A0cRFg95KIw", title: "קריינות לטלוויזיה 2" },
    ],
    קריינות_עבור_סרטוני_תדמית: [
      { id: "RYtN2EeX6Vo", title: "סרטון תדמית 1" },
      { id: "9fbxBikjO20", title: "סרטון תדמית 2" },
      { id: "7B7lGKK3rVg", title: "סרטון תדמית 3" },
      { id: "36rY8Ew28Kc", title: "סרטון תדמית 4" },
    ],
    קריינות_לטלוויזיה: [
      { id: "tNs7nDINook", title: "קריינות לרדיו 3" },
      { id: "VZVopPZjG6k", title: "קריינות לרדיו 2" },
      { id: "PRgN-tcU_eQ", title: "קריינות לטלוויזיה 1" },
      { id: "A0cRFg95KIw", title: "קריינות לטלוויזיה 2" },
    ],
  };

  const [visibleVideos, setVisibleVideos] = useState({
    תשדירי_חסות: 3,
    קריינות_עבור_סרטוני_תדמית: 3,
    קריינות_לטלוויזיה: 3,
  });

  const handleShowMore = (category) => {
    setVisibleVideos((prev) => ({
      ...prev,
      [category]: prev[category] + 3,
    }));
  };

  return (
    <section className="bg-[#14213d] text-white py-12 px-6 md:px-10 w-4/5 mx-auto">
      {/* כותרת ראשית */}
      {/* <div className=" flex justify-center mb-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#8c52ff]">
          העבודות שלי
        </h2>
      </div> */}

      {/* קטגוריות */}
      {Object.keys(categories).map((category, index) => (
        <div key={index} className="mb-8">
          {/* כותרת קטגוריה */}
          <div className="text-right mb-4">
            <h3 className="text-xl md:text-2xl font-bold text-[#fca311]">
              {category.replace(/_/g, " ")}
            </h3>
            {/* <div className="flex justify-start mt-2">
              <img
                src={LineSvg.src}
                alt="קו תחתון"
                className="w-2/5 md:w-1/4"
              />
            </div> */}
          </div>

          {/* סרטונים */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories[category]
              .slice(0, visibleVideos[category])
              .map((video, videoIndex) => (
                <div
                  key={videoIndex}
                  className="flex flex-col items-center bg-[#1d3557] rounded-lg shadow-md overflow-hidden border border-[#457b9d]"
                >
                  <YouTubeVideo videoId={video.id} />
                </div>
              ))}
          </div>

          {/* כפתור הצגת עוד */}
          {visibleVideos[category] < categories[category].length && (
            <div className="flex justify-end mt-4">
              <button
                onClick={() => handleShowMore(category)}
                className="bg-[#fca311] text-black px-6 py-2 rounded-lg font-medium hover:bg-[#e68a00] transition"
              >
                הצג עוד
              </button>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default ExamplesSection;
