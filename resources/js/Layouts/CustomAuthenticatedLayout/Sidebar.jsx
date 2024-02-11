import React from "react";
import { Link } from "@inertiajs/react";
import SubscriptionDetail from "./SubscriptionDetail";

import { UserMenu, UserOthersMenu } from "./MenuList";
import MenuItem from "./MenuItem";

const Sidebar = ({ auth }) => {
  return (
    <>
      <aside className="fixed z-50 w-[300px] h-full">
        <div className="flex flex-col p-[30px] pr-0 border-r border-gray-[#F1F1F1] overflow-y-auto h-full">
          <a href="/">
            <img src="/images/moonton.svg" alt="" />
          </a>
          <div className="links flex flex-col mt-[60px] h-full gap-[50px]">
            {/* <!-- Menu --> */}
            <div>
              <div className="text-gray-1 text-sm mb-4">Menu</div>
              {UserMenu.map((menu, index) => (
                <MenuItem
                  key={`menu-user-${index}-${menu.text}`}
                  link={menu.link}
                  icon={menu.icon}
                  text={menu.text}
                  isActive={menu.link && route().current(menu.link)} // (apakah current route sama dengan menu ini?)
                />
              ))}
            </div>
            {/* <!-- ./Menu --> */}

            {/* <!-- Others --> */}
            <div>
              <div className="text-gray-1 side-link mb-4">Others</div>
              {UserOthersMenu.map((menu, index) => (
                <MenuItem
                  key={`menu-user-others-${index}-${menu.text}`}
                  link={menu.link}
                  icon={menu.icon}
                  text={menu.text}
                  isActive={menu.link && route().current(menu.link)} // (apakah current route sama dengan menu ini?)
                  method={menu.method}
                />
              ))}
            </div>
            {/* <!-- ./Others --> */}

            {auth.activePlan && (
              <SubscriptionDetail
                name={auth.activePlan.name}
                isPremium={auth.activePlan.name === "Premium"}
                remainingActiveDays={auth.activePlan.remainingActiveDays}
                activeDays={auth.activePlan.activeDays}
              />
            )}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
