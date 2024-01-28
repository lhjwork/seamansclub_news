import React from "react";

import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

import Loader from "./Loader";
import { sidebarLinks } from "../../constants";
import { INavLink } from "../../types";

const LeftSidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <nav className="leftsidebar ">
      <div className="flex flex-col gap-11">
        <Link to="/" className="flex gap-3 items-center text-white">
          CompanyName
        </Link>

        <ul className="flex flex-col gap-6">
          {sidebarLinks.map((link: INavLink) => {
            const isActive = pathname === link.route;

            return (
              <li
                key={link.label}
                className={`leftsidebar-link group flex gap-6 p-2 text-white  ${
                  isActive && "bg-primary-500"
                }`}
              >
                <NavLink to={link.route} className="flex gap-4 items-center">
                  <img
                    src={link.imgURL}
                    alt={link.label}
                    className={`group-hover:invert-white ${
                      isActive && "invert-white"
                    }`}
                  />
                  {link.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default LeftSidebar;
