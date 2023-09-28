import { ReactNode } from "react";

import { Header } from "../components";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex items-center flex-col bg-white dark:bg-black text-custom-black dark:text-custom-white min-h-screen gap-2">
      <Header />
      <main className="p-2 w-full max-w-4xl xl:max-w-7xl">{children}</main>
    </div>
  );
};

export default Layout;
