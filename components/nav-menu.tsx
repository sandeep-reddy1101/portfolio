import { theme } from "@/lib/theme";

interface menuProps {
  mobileMenu: boolean;
  toggleMobileMenu: () => void;
}

export default function Menu({ mobileMenu, toggleMobileMenu }: menuProps) {
  return (
    <button
      data-collapse-toggle="navbar-cta"
      type="button"
      className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm ${theme.nav.menuIconTextColor} rounded-lg md:hidden ${theme.nav.menuIconHoverBackgroundColor} focus:outline-none`}
      aria-controls="navbar-cta"
      aria-expanded="false"
      onClick={toggleMobileMenu}
    >
      <span className="sr-only">Open main menu</span>
      {mobileMenu ? (
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ) : (
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      )}
    </button>
  );
}
