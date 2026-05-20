import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <motion.button onClick={toggleTheme} whileHover={{ y: -2 }} whileTap={{ scale: 0.92 }} aria-label="Toggle theme" className="icon-btn">
      {theme === "light" ? <Moon size={15} /> : <Sun size={15} />}
    </motion.button>
  );
}
