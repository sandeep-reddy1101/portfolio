import AboutContent from "./about-content";
import AboutHeader from "./about-header";

export default function About() {
  return (
    <div id="about" className="py-32 bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl w-11/12 m-auto">
        <AboutHeader />
        <AboutContent />
      </div>
    </div>
  );
}
