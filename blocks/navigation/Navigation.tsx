import { MenuBar } from "./MenuBar";
import { NavBar } from "./NavBar";

export const Navigation = () => {
  return (
    <div className="fixed top-0 w-screen h-fit z-20">
      <div className="container flex items-center justify-between">
        <div>Wallet</div>
        <NavBar />
        <MenuBar />
      </div>
    </div>
  );
};
