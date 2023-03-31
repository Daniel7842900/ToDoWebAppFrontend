import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import coin from "../assets/images/dollar.png";
import shop from "../assets/images/store.png";
import IconButton from "../components/IconButton";
import useToggle from "../hooks/useToggle";

const TopNav = () => {
  const [burgerToggle, setBurgerToggle] = useToggle(false);
  const [profileToggle, setProfileToggle] = useToggle(false);

  return (
    <nav>
      <div className="h-[5vh] md:h-[10vh] lg:h-[5vh] bg-orange-500 flex justify-between">
        <div className="flex items-center ml-4 lg:ml-10 xl:ml-14 2xl:ml-24">
          <img src={coin} alt="coin" className="w-7 h-7 mx-2" />
          <span className="font-bold">1</span>
        </div>
        {/* Navigation menu - Desktop */}
        <div className="hidden lg:flex items-center mr-4 lg:mr-10 xl:mr-14 2xl:mr-28">
          <img src={shop} alt="shop" className="w-8 h-8 mx-2" />
          <div
            className="w-8 h-8 border-2 border-blue-500"
            onClick={setProfileToggle}
          ></div>
          {/* Account specific menu - Desktop */}
          {profileToggle ? (
            <div
              className="absolute right-0 z-10 lg:mt-48 lg:mr-12 xl:mt-40 xl:mr-16 2xl:mt-44 2xl:mr-28 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
              tabIndex="-1"
            >
              <Link
                className="block px-4 py-2 text-sm text-gray-700"
                id="user-menu-item-0"
                tabIndex="-1"
              >
                <span>Account</span>
              </Link>
              <Link
                className="block px-4 py-2 text-sm text-gray-700"
                id="user-menu-item-1"
                tabIndex="-1"
              >
                <span>Settings</span>
              </Link>
              <Link
                className="block px-4 py-2 text-sm text-gray-700"
                id="user-menu-item-2"
                tabIndex="-1"
              >
                <span>Sign out</span>
              </Link>
            </div>
          ) : null}
        </div>
        <div className="flex mr-4 md:mr-8 lg:hidden">
          {/* Mobile menu button  */}
          <IconButton
            containerClassName="inline-flex items-center justify-center rounded-md p-2 text-black "
            icon={burgerToggle ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
            iconClassName="block h-6 w-6"
            handleOnClick={setBurgerToggle}
          />
        </div>
        {/* Mobile menu, show/hide based on menu state.  */}
        {burgerToggle ? (
          <div
            className="fixed bottom-0 top-0 left-0 z-[1045] flex w-80 max-w-full -translate-x-full flex-col border-none bg-amber-600 bg-clip-padding text-white shadow-sm outline-none transition duration-300 ease-in-out transform-none"
            tabIndex="-1"
            id="offcanvasExample"
          >
            <div className="flex items-center justify-between p-4 ml-4">
              <div className="border-2 border-black w-32 h-32">
                Icon image here
              </div>
            </div>
            <div className="flex flex-col items-start justify-between p-4 ml-4">
              <p className="mb-0 font-bold leading-normal text-3xl font-roboto">
                First Name
              </p>
              <br />
              <p className="mb-0 font-bold leading-normal text-3xl font-roboto">
                Last Name
              </p>
            </div>
            <div className="flex-grow overflow-y-auto p-4">
              <div className="flex my-4">
                <img src={shop} alt="shop" className="w-8 h-8 mx-4 " />
                <span className="text-2xl font-opensans">Shop</span>
              </div>
              <div className="flex my-4">
                <FontAwesomeIcon
                  icon="fa-solid fa-user"
                  className="w-8 h-8 mx-4"
                  style={{ color: "#ffffff" }}
                />
                <span className="text-2xl font-opensans">Account</span>
              </div>
              <div className="flex my-4">
                <FontAwesomeIcon
                  icon="fa-solid fa-gear"
                  className="w-8 h-8 mx-4"
                  style={{ color: "#ffffff" }}
                />
                <span className="text-2xl font-opensans">Settings</span>
              </div>
              <div className="flex my-4">
                <FontAwesomeIcon
                  icon="fa-solid fa-arrow-right-from-bracket"
                  className="w-8 h-8 mx-4"
                  style={{ color: "#ffffff" }}
                />
                <span className="text-2xl font-opensans">Sign out</span>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default TopNav;
