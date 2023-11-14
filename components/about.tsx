import AboutContent from "./about-content";
import SectionHeader from "./section-header";
import {aboutHeaders} from "@/lib/aboutInfo";

export default function About() {
  
  return (
    <section id="about" className="py-32 bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl w-11/12 m-auto">
        <SectionHeader {...aboutHeaders} />
        <AboutContent />
      </div>
    </section>
  );
}
