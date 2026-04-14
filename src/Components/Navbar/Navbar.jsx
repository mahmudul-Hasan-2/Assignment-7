import React from "react";
import logoImage from "../../assets/logo.png";
import { BiHome, BiMenu } from "react-icons/bi";
import { Link, NavLink } from "react-router";
import { CgLock } from "react-icons/cg";
import { BsClock } from "react-icons/bs";
import { FaChartLine } from "react-icons/fa";

const Navbar = () => {
  const items = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "btn bg-green-900 text-base font-bold text-white"
              : "btn btn-ghost text-base font-bold text-[#64748B]"
          }
          to="/"
        >
          <BiHome></BiHome> Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "btn bg-green-900 text-base font-bold text-white"
              : "btn btn-ghost text-base font-bold text-[#64748B]"
          }
          to="/timeline"
        >
          <BsClock></BsClock> Timeline
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "btn bg-green-900 text-base font-bold text-white"
              : "btn btn-ghost text-base font-bold text-[#64748B]"
          }
          to="/stats"
        >
          <FaChartLine />
          Stats
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar px-4 container mx-auto">
        {/* LEFT (Logo) */}
        <div className="flex-1">
          <Link to="/" className="flex items-center gap-2">
            <img className="" src={logoImage} alt="Logo" />
          </Link>
        </div>

        {/* RIGHT (Desktop Menu) */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">{items}</ul>
        </div>

        {/* MOBILE MENU */}
        <div className="lg:hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost">
              <BiMenu size={30}></BiMenu>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40"
            >
              {items}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
