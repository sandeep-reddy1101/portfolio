import { theme } from "@/lib/theme";

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button
      className={`${theme.button.backgroundColor} ${theme.button.textColor} text-sm font-bold py-3 px-10 rounded uppercase transform transition-transform hover:translate-y-[-3px] shadow-xl tracking-wide`}
    >
      {children}
    </button>
  );
}
