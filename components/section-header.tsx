interface sectionHeaderProps {
  heading: string;
  subHeading: string;
}

export default function SectionHeader({heading, subHeading}: sectionHeaderProps) {
  return (
    <div className="mb-16">
      <div className="block font-bold text-4xl uppercase tracking-wide text-center mb-12 relative text-black dark:text-white">
        {heading}
        <div className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2">
          <div className="h-[0.3rem] w-12 bg-purple-700 rounded-lg"></div>
        </div>
      </div>
      <div className="block text-center text-gray-500 text-xl font-medium max-w-screen-lg mx-auto leading-6 dark:text-gray-300">
        {subHeading}
      </div>
    </div>
  );
}
