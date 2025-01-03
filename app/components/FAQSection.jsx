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
      question: "תוך כמה זמן תספק את העבודה?",
      answer:
        "אני מתחייב לספק את העבודה תוך שלושה ימי עסקים לכל היותר. במקרים דחופים, אני יכול לזרז את התהליך בתיאום מראש.",
    },
    {
      question: "איך התהליך עובד?",
      answer:
        "לאחר שתשלחו לי את התסריט או הדרישות שלכם, אני מבצע סקירה וחוזר אליכם עם הצעת מחיר. לאחר אישורכם, אני מתחיל בעבודה ושולח לכם דוגמה ראשונית להערות.",
    },
    {
      question: "האם אפשר לבצע שינויים לאחר קבלת העבודה?",
      answer:
        "בוודאי! אני מאפשר סבב תיקונים אחד ללא עלות נוספת כדי להבטיח שתהיו מרוצים.",
    },
    {
      question: "האם אפשר לעבוד על פרויקטים דחופים?",
      answer:
        "בהחלט! במקרים דחופים אני יכול לספק עבודה תוך 24 שעות, בכפוף לזמינות.",
    },
    {
      question: "האם אני צריך לספק תסריט?",
      answer:
        "כן, אני עובד על פי תסריט סופי ומוכן לקריינות. אם אתם זקוקים לעזרה בכתיבה או עריכה, אני אשמח לסייע בתיאום מראש.",
    },
    {
      question: "באילו שפות אתה מציע קריינות?",
      answer:
        "אני מתמחה בקריינות בעברית ובאנגלית, ויכול להתאים שפות נוספות בתיאום מיוחד.",
    },
    {
      question: "מה אם אני לא מרוצה מהתוצאה?",
      answer:
        "המטרה שלי היא שתהיו מרוצים ב-100%. אני מאפשר סבב תיקונים ומבטיח שקיפות מלאה לאורך כל התהליך.",
    },
  ];

  return (
    <section
      id="faq"
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
            className="border border-[#fca311] rounded-lg overflow-hidden shadow-lg transition hover:border-[#8c52ff] hover:bg-[#1a1e35]"
          >
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full flex justify-between items-center px-4 md:px-6 py-4 bg-[#1d3557] text-right text-base md:text-lg font-medium focus:outline-none whitespace-normal break-words hover:text-[#fca311] transition"
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

      {/* קרדיט */}
      <div className="mt-12 text-center text-[#fca311] text-sm">
        <p>
          האתר עוצב ונבנה על ידי <span className="font-bold">יגאל ליפסי</span>
        </p>
      </div>
    </section>
  );
};

export default FAQSection;
