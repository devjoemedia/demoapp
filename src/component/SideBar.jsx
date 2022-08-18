import React from "react";
import { Nav, NavItem } from "react-bootstrap";
import { AiOutlineHome } from "react-icons/ai";
import { MdSettings } from "react-icons/md";
import { BiLogOutCircle } from "react-icons/bi";
import { FaRegCompass } from "react-icons/fa";
import { RiBarChartFill, RiSendPlaneFill } from "react-icons/ri";
import { NavLink, useLocation } from "react-router-dom";
import { logout, setUser } from "../redux/actions";
import { useDispatch } from "react-redux";

const SideBar = () => {
  let location = useLocation();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await logout();
    dispatch(setUser(null));
  };
  return (
    <Nav className="flex-direction-column p-0 mx-0 mt-1 ">
      <NavItem className="w-100">
        <NavLink
          to="/profile"
          className={
            location.pathname === "/profile" ? "active-link " : "link "
          }
        >
          <AiOutlineHome style={{ marginRight: "10px" }} />
          <p className="p-0 m-0 ">Dashboard</p>
        </NavLink>
      </NavItem>
      <NavItem className="w-100">
        <NavLink
          to="campaigns"
          className={({ isActive }) => (isActive ? "active-link " : "link ")}
        >
          <FaRegCompass style={{ marginRight: "10px" }} />
          <p className="p-0 m-0 ">Campaigns</p>
        </NavLink>
      </NavItem>
      <NavItem className="w-100">
        <NavLink
          to="donations"
          className={({ isActive }) => (isActive ? "active-link " : "link ")}
        >
          <RiSendPlaneFill style={{ marginRight: "10px" }} />
          <p className="p-0 m-0 ">Donations</p>
        </NavLink>
      </NavItem>
      <NavItem className="w-100">
        <NavLink
          to="analytics"
          className={({ isActive }) => (isActive ? "active-link " : "link ")}
        >
          <RiBarChartFill style={{ marginRight: "10px" }} />
          <p className="p-0 m-0 ">Analytics</p>
        </NavLink>
      </NavItem>
      <NavItem className="w-100">
        <NavLink
          to="settings"
          className={({ isActive }) => (isActive ? "active-link " : "link ")}
        >
          <MdSettings style={{ marginRight: "10px" }} />
          <p className="p-0 m-0 ">Settings</p>
        </NavLink>
      </NavItem>
      <NavItem className="w-100" onClick={handleLogout}>
        <NavLink to="#" className="link">
          <BiLogOutCircle style={{ marginRight: "10px" }} />
          <p className="p-0 m-0 ">Logout</p>
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default SideBar;
