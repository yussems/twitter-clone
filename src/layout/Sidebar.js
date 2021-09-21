import React from "react";
import SideLink from "../componenets/SideLink";
import UserBox from "../componenets/UserBox";
import {
  BookmarksIcon,
  ExploreIcon,
  HomeIcon,
  ListsIcon,
  MessagesIcon,
  MoreIcon,
  NotificationsIcon,
  ProfileIcon,
} from "../icons/icons";
import TwiterLogo from "../images/twiter.svg";

const sideLinks = [
  {
    name: "Home",
    icon: HomeIcon,
  },
  {
    name: "Explore",
    icon: ExploreIcon,
  },
  {
    name: "Notifications",
    icon: NotificationsIcon,
  },
  {
    name: "Messages",
    icon: MessagesIcon,
  },
  {
    name: "Bookmarks",
    icon: BookmarksIcon,
  },
  {
    name: "Lists",
    icon: ListsIcon,
  },
  {
    name: "Profile",
    icon: ProfileIcon,
  },
  {
    name: "More",
    icon: MoreIcon,
  },
];

const Sidebar = () => {
  const [active, setActive] = React.useState("Home");
  const handleMenuItemClick = (name) => {
    setActive(name);
  };
  return (
    <div className="h-screen sticky top-0 w-72 bg-primary-light flex flex-col justify-between px-2  ">
      <div>
        <div className="hover:bg-gray-lightest flex items-center justify-center rounded-full w-12 h-12 transform transition-colors duration-200 mt-1 mb-4 ml-1">
          <img src={TwiterLogo} className="w-7 h-7" alt="Logo" />
        </div>
        <nav className="mb-5">
          <ul>
            {sideLinks.map(({ name, icon }) => (
              <SideLink
                key={name}
                name={name}
                Icon={icon}
                active={active}
                onMenuItemClick={handleMenuItemClick}
              />
            ))}
          </ul>
        </nav>
        <button className="bg-primary-base text-white shadow-lg hover:bg-primary-dark transform transition-colors duration-200 rounded-full py-3 px-8 w-11/12 ">
          Tweet
        </button>
      </div>
              <UserBox />
    </div>
  );
};

export default Sidebar;
