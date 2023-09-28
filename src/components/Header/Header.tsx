import { DarkThemeToggle, Flowbite } from "flowbite-react";
import { IconBrandApple } from "@tabler/icons-react";

const Header = () => {
  return (
    <header className="w-full p-2 flex items-center justify-between bg-custom-gray dark:bg-custom-black text-custom-black dark:text-custom-white">
      <IconBrandApple />
      <Flowbite>
        <DarkThemeToggle />
      </Flowbite>
    </header>
  );
};

export default Header;
