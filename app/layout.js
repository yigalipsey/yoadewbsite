import { Bebas_Neue, Libre_Baskerville, Rubik } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas-neue",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre-baskerville",
  style: ["normal", "italic"],
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-rubik",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body
        className={`${bebasNeue.variable} ${libreBaskerville.variable} ${rubik.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
