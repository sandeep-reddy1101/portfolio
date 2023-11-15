import { theme } from "@/lib/theme";

export default function Pill({ skill }: { skill: string }) {
  return (
    <div className={`px-6 py-3 mb-4 mr-4 text-sm rounded-md ${theme.pill.backgroundColor} font-semibold ${theme.pill.textColor} ${theme.pill.hoverEffect}`}>
      {skill}
    </div>
  );
}
