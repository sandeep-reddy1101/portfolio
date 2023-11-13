export default function OutlineButton({children}: {children: React.ReactNode}) {
  return (
    <button
      className=" text-black dark:text-white bg-inherit border-2 border-violet-600 text-sm font-bold px-10 rounded uppercase transform transition-transform hover:translate-y-[-3px] tracking-wide shadow-md"
      style={{
        paddingTop: "calc(0.75rem - 2px)",
        paddingBottom: "calc(0.75rem - 2px)",
      }}
    >
      {children}
    </button>
  );
}
