import Button from "./button";

export default function AboutContent() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Angular",
    "Python",
    "SQL",
    "Mongo DB",
    "Node JS",
    "Express JS",
    "Redux",
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
      <div>
        <div className="font-bold text-2xl mb-4 dark:text-white">Get to know me!</div>
        <div className="text-base font-medium text-gray-600 w-11/12 leading-6 mb-4 dark:text-gray-400">
          {"I\'m a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section."}
        </div>
        <div className="text-base font-medium text-gray-600 w-11/12 leading-6 mb-4 dark:text-gray-400">
          {"I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming"}
        </div>
        <div className="text-base font-medium text-gray-600 w-11/12 leading-6 mb-4 dark:text-gray-400">
          {"I\'m open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don\'t hesitate to contact me."}
        </div>
        <div className="mt-8">
          <Button>Contact</Button>
        </div>
      </div>
      <div>
        <div className="font-bold text-2xl mb-4 dark:text-white">My Skills</div>
        <div className="flex flex-wrap">
          {skills.map((item, idx) => {
            return (
              <div
                key={idx}
                className="px-6 py-3 mb-4 mr-4 text-sm rounded bg-gray-200 font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-300"
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
