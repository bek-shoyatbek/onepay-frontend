import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

interface ThemeToggleProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

export const ThemeToggle = ({ isDarkMode, onToggle }: ThemeToggleProps) => (
  <button className="theme-toggle" onClick={onToggle}>
    <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} color="white" />
  </button>
);
