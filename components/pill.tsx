export default function Pill({ skill }: { skill: string }) {
  return (
    <div className="px-6 py-3 mb-4 mr-4 text-sm rounded-md bg-gray-200 font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-300">
      {skill}
    </div>
  );
}
