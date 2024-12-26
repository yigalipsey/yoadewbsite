"use client";

import React, { useState } from "react";
import FaqSvg from "../../public/images/faq.svg"; // נתיב ל-SVG של ה-FAQ

const FAQSection = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: "תוך כמה זמן אקבל את העבודה שלי?",
      answer:
        "אנו מתחייבים לספק את העבודה תוך שלושה ימי עסקים לכל היותר. במקרים דחופים ניתן לזרז את התהליך בתיאום מראש.",
    },
    {
      question: "איך התהליך עובד?",
      answer:
        "לאחר שתשלחו את התסריט או הדרישות שלכם, נבצע סקירה ונחזור אליכם עם הצעת מחיר. לאחר אישורכם, העבודה מתחילה ונשלח אליכם דוגמא ראשונית להערות.",
    },
    {
      question: "באיזה פורמט אקבל את הקבצים?",
      answer:
        "אנו מספקים את הקבצים בפורמטים נפוצים כמו MP3 ו-WAV, בהתאם להעדפתכם ולדרישות הפרויקט.",
    },
    {
      question: "האם ניתן לבצע שינויים לאחר קבלת העבודה?",
      answer:
        "כן, אנו מאפשרים סבב תיקונים אחד ללא עלות נוספת, על מנת להבטיח את שביעות רצונכם.",
    },
    {
      question: "האם ניתן לעבוד על פרויקטים דחופים?",
      answer:
        "בהחלט. במקרים דחופים אנו יכולים לספק עבודה תוך 24 שעות, בכפוף לזמינות ולתוספת עלות מסוימת.",
    },
    {
      question: "האם אני צריך לספק תסריט?",
      answer:
        "כן, אנו זקוקים לתסריט סופי ומוכן לקריינות. במידה ואתם זקוקים לעזרה בכתיבה או עריכה, נשמח לסייע בתיאום מראש.",
    },
    {
      question: "באילו שפות ניתן לקבל קריינות?",
      answer:
        "אנו מתמחים בקריינות בעברית ובאנגלית, אך ניתן להתאים שפות נוספות בתיאום מיוחד.",
    },
    {
      question: "מה אם אני לא מרוצה מהתוצאה?",
      answer:
        "המטרה שלנו היא שתהיו מרוצים ב-100%. אנו מאפשרים סבב תיקונים ומתחייבים לשקיפות מלאה בתהליך.",
    },
  ];

  return (
    <section
      id="faq" // הוספתי את ה-id פה
      className="bg-[#14213d] text-white py-12 px-4 md:px-20 w-full mx-auto"
    >
      {/* SVG FAQ */}
      <div className="flex justify-center mb-6">
        <img src={FaqSvg.src} alt="שאלות ותשובות" className="w-24 md:w-32" />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-[#fca311]">
        שאלות ותשובות
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-[#fca311] rounded-lg overflow-hidden shadow-lg"
          >
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full flex justify-between items-center px-4 md:px-6 py-4 bg-[#1d3557] text-right text-base md:text-lg font-medium focus:outline-none whitespace-normal break-words"
            >
              <span>{faq.question}</span>
              <svg
                className={`h-6 w-6 transform transition-transform ${
                  activeQuestion === index ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {activeQuestion === index && (
              <div className="px-4 md:px-6 py-4 bg-[#1d3557] text-[#e5e5e5] whitespace-normal break-words">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
