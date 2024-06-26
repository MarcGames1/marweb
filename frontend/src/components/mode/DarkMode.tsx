import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from 'next-themes';

export default function DarkMode() {
  const { theme, setTheme } = useTheme();

  // toggle of dark & light mode
  const toggle = () => {
    if (theme === 'light') setTheme('dark');
    else setTheme('light');
  };

  return (
    <>
      <span role='button' title={theme === 'light' ? 'Tema Intunecata' : 'Tema Luminoasa'}
        className="bg-white w-12 hover:text-white hidden  h-12 rounded-full lg:flex justify-center items-center text-black hover:bg-[#ef4060] transition-all duration-300 ease-in-out cursor-pointer ml-2 "
        onClick={toggle}
      >
        <FiMoon className="text-3xl dark-mode-light dark:hidden" />
        <FiSun className="text-2xl dark-mode-dark hidden  fill-jacarta-700  group-hover:fill-white group-focus:fill-white dark:block dark:fill-white " />
      </span>
    </>
  );
}
