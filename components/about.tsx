import AboutContent from "./about-content";
import SectionHeader from "./section-header";
import { aboutHeaders } from "@/lib/aboutInfo";
import { theme } from "@/lib/theme";

export default function About() {
  return (
    <section
      id="about"
      className={`py-32 ${theme.about.backgroundColor}`}
    >
      <div className="max-w-screen-xl w-11/12 m-auto">
        <SectionHeader {...aboutHeaders} />
        <AboutContent />
      </div>
    </section>
  );
}
