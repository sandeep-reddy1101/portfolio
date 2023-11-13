export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-violet-600 text-white text-sm font-bold py-3 px-10 rounded uppercase transform transition-transform hover:translate-y-[-3px] shadow-xl tracking-wide">
      {children}
    </button>
  );
}
