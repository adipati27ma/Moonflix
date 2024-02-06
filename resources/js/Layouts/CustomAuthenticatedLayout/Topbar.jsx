import { Link } from "@inertiajs/react";
import React, { useState, useRef } from "react";

const Topbar = ({ name }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  const dropdownTarget = useRef();

  const triggerDropdown = () => {
    if (isDropdownOpen) {
      dropdownTarget.current.classList.remove("hidden");
    } else {
      dropdownTarget.current.classList.add("hidden");
    }
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={triggerDropdown}
      >
        <input
          type="text"
          className="top-search"
          placeholder="Search movie, cast, genre"
        />
        <div className="flex items-center gap-4">
          <span className="text-black text-sm font-medium">
            Welcome, {name}
          </span>
          {/* <!-- user avatar --> */}
          <div className="collapsible-dropdown flex flex-col gap-2 relative">
            <div className="outline outline-2 outline-gray-2 p-[5px] rounded-full w-[60px] dropdown-button">
              <img
                src="/images/avatar.png"
                className="rounded-full object-cover w-full"
                alt=""
              />
            </div>
            <div
              className="bg-white rounded-2xl text-black font-medium flex flex-col gap-1 absolute z-[999] right-0 top-[80px] min-w-[180px] hidden overflow-hidden"
              ref={dropdownTarget}
            >
              <a href="#!" className="transition-all hover:bg-sky-100 p-4">
                Dashboard
              </a>
              <a href="#!" className="transition-all hover:bg-sky-100 p-4">
                Settings
              </a>
              <Link
                href={route("logout")}
                method="post"
                // as="anchor"
                className="transition-all hover:bg-sky-100 p-4"
              >
                Sign Out
              </Link>
            </div>
          </div>
        </div>
        <style jsx="true">
          {`
            .top-search {
              background-image: url("/icons/ic_search.svg");
            }
          `}
        </style>
      </div>
    </>
  );
};

export default Topbar;
