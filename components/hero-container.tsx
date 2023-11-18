import { theme } from "@/lib/theme";
import SocialIcons from "./social-icons";
import Blob from "./blob";

export default function HeroContainer({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  return (
    <section
      id={id}
      className="relative min-h-screen flex items-center justify-center"
    >
      <div
        className={`absolute inset-0 bg-cover bg-center z-0 ${theme.hero.backgroundColor}`}
      ></div>
      {children}
      <SocialIcons />
      {/* <Blob/> */}
    </section>
  );
}
