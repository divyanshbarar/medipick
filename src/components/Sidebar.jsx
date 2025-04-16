import { NavLink } from "react-router-dom";
import imgph from "../assets/imgph.png";
import c from "../assets/c.png";
const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", path: "/" },
    { name: "Assets", path: "/asset" },
    { name: "Incidents", path: "/incidents" },
    { name: "Services", path: "/services" },
    { name: "Requests", path: "/requests" },
    { name: "Users", path: "/users" },
    { name: "Reports", path: "/reports" },
  ];

  return (
    <div className="w-[268px] min-h-screen bg-[#0A1D56] text-white p-4 fixed top-0 left-0">
      <img src={c} alt="" className="w-[120px] h-[60px] ml-8 mt-4 mb-8" />
      <ul>
        {menuItems.map((item, index) => (
          <li key={index} className=" flex justify-content items-center mb-4">
            <img src={imgph} alt="" className="w-8 h-8 rounded-full" />
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `block px-4 py-2 rounded hover:bg-[#1E2A78] ${
                  isActive ? "bg-[#1E2A78]" : ""
                }`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
