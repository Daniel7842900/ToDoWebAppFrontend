import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import coin from "../assets/images/dollar.png";
import shop from "../assets/images/store.png";

const TopNav = () => {
  return (
    <div className="h-[5vh] md:h-[10vh] lg:h-[5vh] bg-orange-500 flex justify-between">
      <div className="flex items-center ml-4 lg:ml-10 xl:ml-14 2xl:ml-24">
        <img src={coin} alt="coin" className="w-7 h-7 mx-2" />
        <span className="font-bold">1</span>
      </div>
      {/* Navigation menu - Desktop */}
      <div className="hidden lg:flex items-center mr-4 lg:mr-10 xl:mr-14 2xl:mr-28">
        <img src={shop} alt="shop" className="w-8 h-8 mx-2" />
        <div className="w-8 h-8 border-2 border-blue-500"></div>
      </div>
      <div className="flex mr-4 md:mr-8 lg:hidden">
        {/* Mobile menu button  */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-black "
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <FontAwesomeIcon icon="fa-solid fa-bars" className="block h-6 w-6" />
          {/* Menu open: "hidden", Menu closed: "block"  */}
          {/* <svg
            className="block h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg> */}
          {/* Menu open: "block", Menu closed: "hidden"  */}
          {/* <svg
            className="hidden h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg> */}
        </button>
      </div>
    </div>
  );
};

export default TopNav;
