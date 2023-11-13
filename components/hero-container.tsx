export default function HeroContainer({
  children, id
}: {
  children: React.ReactNode;
  id: string
}) {
  return (
    <section
      id={id}
      className="relative min-h-screen flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-cover bg-center z-0 bg-gray-100 dark:bg-gray-800"></div>
      {children}
    </section>
  );
}
