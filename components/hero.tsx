import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";

export default function Hero() {
  const socialMedia = [
    { icon: <LinkedInIcon />, name: "LinkedIn", link: "/" },
    { icon: <TwitterIcon />, name: "X", link: "/" },
    { icon: <GitHubIcon />, name: "Github", link: "/" },
  ];
  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-cover bg-center z-0 bg-gray-100 dark:bg-gray-800"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-screen-xl w-11/12">
        <h1 className="text-5xl uppercase tracking-wide text-center text-black font-bold dark:text-white">
          {"Hey, I\'m Sandeep Reddy"}
        </h1>
        <div className="mx-auto mt-8 md:max-w-3xl">
          <p className="text-lg text-gray-700 text-center leading-6 dark:text-slate-200">
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
        </div>
        <div className="mt-12 text-center">
          <button className="bg-violet-600 text-white text-base font-semibold py-3 px-10 rounded uppercase transform transition-transform hover:translate-y-[-3px] drop-shadow-xl tracking-wide">
            Projects
          </button>
        </div>
      </div>
      <div className="hidden md:block absolute top-1/2 left-0 transform -translate-y-1/2 bg-white drop-shadow-2xl p-2 dark:bg-gray-600 rounded">
        <div className="w-12">
          {socialMedia.map((item) => {
            return (
              <Link
                key={item.name}
                href={item.link}
                className="w-full block p-3 transition duration-300 hover:bg-gray-200 rounded-md dark:hover:bg-gray-100"
              >
                {item.icon}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
