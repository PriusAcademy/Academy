import { NavLink, Outlet } from "react-router-dom";
import NavItems from "./nav-items";
import ModalProvider from "../../provider/modal-provider";
import TextWithIcon from "../text-with-icon";
import { Mail, MapPinIcon, Phone } from "lucide-react";
import SignInButton from "../sign-in-button";
import { isAuthorized } from "../../utils/isAuthorized";
import Profile from "../profile";

const Navbar = () => {
  return (
    <>
      <div className="hidden lg:flex items-center h-16 gap-8 w-full bg-secondaryBlue justify-center">
        <TextWithIcon
          aosAnimate="fade-right"
          href="tel:+918610773303"
          title="+918610773303"
          Icon={Phone}
        />
        <TextWithIcon
          aosAnimate="flip-right"
          href="mailto:HR@abcd.com"
          title="HR@abcd.com"
          Icon={Mail}
        />
        <TextWithIcon
          aosAnimate="fade-left"
          title="Coimbatore, Tamilnadu-642109"
          Icon={MapPinIcon}
        />
      </div>

      <div className="h-20 w-full  bg-white flex justify-between">
        <div className="relative flex-1 p-3 max-w-[1024px] mx-auto flex justify-between items-center h-full">
          <NavLink to="/">
            <img
              width={150}
              src="https://www.priusitservices.com/assets/img/logo.png"
              alt=""
            />
          </NavLink>
          <NavItems />
        </div>
        <div className="hidden lg:flex items-center mr-10 ml-2">
          {!isAuthorized() ? <SignInButton /> : <Profile />}
        </div>
      </div>
      <Outlet />
      <ModalProvider />
    </>
  );
};

export default Navbar;
