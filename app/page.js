import HeroSection from "./components/Hero";
import Navbar from "./components/Navbar";
import ExamplesSection from "./components/ExamplesSection";
import AboutMeSection from "./components/AboutMeSection";

export default function Home() {
  return (
    <div className=" bg-[#14213d]">
      <Navbar />
      <HeroSection />
      <ExamplesSection />
      <AboutMeSection />
    </div>
  );
}
