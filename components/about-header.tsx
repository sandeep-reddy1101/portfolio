export default function AboutHeader() {
  return (
    <div className="mb-16">
      <div className="block font-bold text-4xl uppercase tracking-wider text-center mb-12 relative text-black dark:text-white">
        About Me
        <div className="absolute top-full mt-5 left-1/2 transform -translate-x-1/2">
          <div className="h-2 w-12 bg-purple-700 rounded-md"></div>
        </div>
      </div>
      <div className="block text-center text-gray-500 text-xl font-medium max-w-screen-lg mx-auto leading-6">
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology
      </div>
    </div>
  );
}
