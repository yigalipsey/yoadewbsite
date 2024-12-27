"use client";

import React from "react";
import Image from "next/image";
import YoadImg from "../../public/images/about.svg"; // עדכן את הנתיב של התמונה

const AboutMeSection = () => {
  return (
    <section
      id="about"
      className="bg-[#14213d] text-white py-12 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between mx-auto w-4/5 md:w-full gap-8"
    >
      {/* עיגול ותמונה */}
      <div className="relative flex-1 flex justify-center items-center">
        <Image
          src={YoadImg}
          alt="יועד ליפסי"
          width={400}
          height={400}
          className="relative z-10 ml-6 md:ml-0 mb-30 object-cover"
        />
      </div>

      {/* תוכן */}
      <div className="flex-1 text-center md:text-right">
        <h2 className="text-4xl md:text-4xl font-bold mb-2 text-[#fca311]">
          קצת עליי
        </h2>
        <h3 className="text-lg md:text-md font-medium mb-4 text-[#e5e5e5] leading-relaxed">
          שלום, אני יועד ליפסי, קריין מקצועי עם ניסיון של למעלה מ-17 שנים בתחום.
          במהלך הקריירה שלי הייתי קריין הבית של שפ״א (שירותי פרסום אזורי) למשך
          מספר שנים, וקריינתי לעשרות פרסומות לרדיו ששודרו בכל רחבי הארץ. בנוסף,
          הייתי קריין חדשות ברדיו "קול ברמה", ועבדתי עם משרדי הפרסום הגדולים
          והמובילים במשק. שיתפתי פעולה עם מפיקים בעלי שם ועזרתי למותגים וחברות
          להעביר את המסרים שלהם בצורה מקצועית ומשפיעה. אני מתמחה בהתאמת הסגנון
          והטון הנכון לכל פרויקט, החל מקריינות לרדיו ולטלוויזיה, דרך סרטי תדמית
          ומצגות עסקיות, ועד קריינות למרכזיות ודיבוב מקצועי.
          <br />
          אם אתם מחפשים קול שיספר את הסיפור שלכם בצורה ייחודית ומרגשת, אני כאן
          בשבילכם.
        </h3>

        <div className="flex mx-auto md:mx-0 justify-between items-center text-center md:w-4/5">
          {/* דיב ראשון */}
          <div className="flex-1 flex flex-col items-center">
            <div className="flex-1 flex items-center justify-center">
              <h4 className="text-2xl md:text-3xl font-bold text-[#fca311]">
                700+
              </h4>
            </div>
            <div className="flex-2 flex items-center justify-center">
              <p className="text-sm md:text-lg">פרויקטים</p>
            </div>
          </div>

          {/* דיב שני */}
          <div className="flex-1 flex flex-col items-center border-x border-[#e5e5e5]">
            <div className="flex-1 flex items-center justify-center">
              <h4 className="text-2xl md:text-3xl font-bold text-[#fca311]">
                80+
              </h4>
            </div>
            <div className="flex-2 flex items-center justify-center">
              <p className="text-sm md:text-lg">שיתופי פעולה</p>
            </div>
          </div>

          {/* דיב שלישי */}
          <div className="flex-1 flex flex-col items-center">
            <div className="flex-1 flex items-center justify-center">
              <h4 className="text-2xl md:text-3xl font-bold text-[#fca311]">
                17+
              </h4>
            </div>
            <div className="flex-2 flex items-center justify-center">
              <p className="text-sm md:text-lg">שנות ניסיון</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
