import { socialMedia } from "@/lib/socialMedia";
import { theme } from "@/lib/theme";
import Link from "next/link";

export default function SocialIcons() {
  return (
    <div
      className={`hidden md:block absolute top-1/2 left-0 transform -translate-y-1/2 ${theme.social.hoverEffect} p-2 ${theme.social.backgroundColor} rounded`}
    >
      <div className="w-12">
        {socialMedia.map((item) => {
          return (
            <Link
              key={item.name}
              href={item.link}
              className={`w-full block p-3 transition duration-300 rounded-md ${theme.social.hoverIconBackgroundColor} ${theme.social.hoverIconTextColor}`}
            >
              {item.icon}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
