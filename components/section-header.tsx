import { theme } from "@/lib/theme";

interface sectionHeaderProps {
  heading: string;
  subHeading: string;
}

export default function SectionHeader({heading, subHeading}: sectionHeaderProps) {
  return (
    <div className="mb-16">
      <div className={`block font-bold text-4xl uppercase tracking-wide text-center mb-12 relative ${theme.section.headerTextColor}`}>
        {heading}
        <div className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2">
          <div className={`h-[0.3rem] w-12 ${theme.section.backgroundColorPill} rounded-lg`}></div>
        </div>
      </div>
      <div className={`block text-center  text-xl font-medium max-w-screen-lg mx-auto leading-6 ${theme.section.subHeaderTextColor}`}>
        {subHeading}
      </div>
    </div>
  );
}
