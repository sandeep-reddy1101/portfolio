import { nameGradiantColors } from "@/lib/data";

export default function TextGradiant({
  children,
}: {
  children: React.ReactNode;
}) {
  const via = nameGradiantColors.via ? `via-[${nameGradiantColors.via}]` : "";
  const gradiant = `from-[${nameGradiantColors.from}] to-[${nameGradiantColors.to}]`;

  return (
    <span
      className={`bg-gradient-to-r ${gradiant} text-transparent ${
        via && via
      } bg-clip-text`}
    >
      {children}
    </span>
  );
}
