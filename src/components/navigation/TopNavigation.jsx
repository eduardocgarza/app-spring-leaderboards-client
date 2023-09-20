import React from "react";
import { Link, useLocation } from "react-router-dom";
import { HomeIcon, UserIcon } from "@heroicons/react/24/solid";

function LinkItem(props) {
  const { to, children } = props;
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link
      className={`flex items-center justify-center flex-col py-1 ${
        isActive ? "text-blue-600" : "text-gray-600"
      } hover:text-blue-600 transition duration-500 ease-in-out text-xs w-[80px]`}
      to={to}
    >
      {children}
    </Link>
  );
}

export default function TopNavigation() {
  const iconStyles = "block w-5 h-5 mb-1";

  return (
    <nav className="z-[10] fixed top-0 left-0 min-h-[60px] max-h-[60px] h-[60px] w-full bg-white border-b border-b-gray-300 px-4 py-1">
      <div className="container mx-auto flex justify-center items-center h-full">
        <LinkItem to="/">
          <HomeIcon className={iconStyles} />
          <span className="block">Dashboard</span>
        </LinkItem>
        <LinkItem to="/users/new">
          <UserIcon className={iconStyles} />
          <span className="block">New User</span>
        </LinkItem>
      </div>
    </nav>
  );
}
