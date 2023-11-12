import AboutContent from "./about-content";
import SectionHeader from "./section-header";

export default function About() {
  const heading = "About Me";
  const subHeading =
    "Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology";
  return (
    <div id="about" className="py-32 bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl w-11/12 m-auto">
        <SectionHeader heading={heading} subHeading={subHeading} />
        <AboutContent />
      </div>
    </div>
  );
}
