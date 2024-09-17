import { NavLink, useLocation } from "react-router-dom";
import { FiGrid, FiUser, FiUsers, FiHeart } from "react-icons/fi";

const Sidebar = () => {
  const location = useLocation(); // Get the current path

  return (
    <div className="w-64 bg-white h-screen p-6 shadow-lg flex flex-col items-center">
      {/* Add the image */}
      <img
        src="/src/images/CardioGuard.webp"
        alt="Profile"
        className="w-20 h-20 rounded-full mb-4 object-cover"
      />
      <h2 className="text-[#2C3746] text-2xl font-bold mb-16">CardioGuard</h2>
      <nav className="flex flex-col gap-4 w-full">
        <NavLink
          to="/patient"
          className={() =>
            `flex items-center py-3 px-4 text-gray-600 hover:bg-gray-100 rounded-lg ${
              location.pathname === "/patient"
                ? "bg-gray-100 text-gray-600"
                : ""
            }`
          }
        >
          <FiGrid className="mr-3" />
          Dashboard
        </NavLink>
        <NavLink
          to="/patient/medicalinfo"
          className={() =>
            `flex items-center py-3 px-4 text-gray-600 hover:bg-gray-100 rounded-lg ${
              location.pathname === "/patient/medicalinfo"
                ? "bg-gray-100 text-gray-600"
                : ""
            }`
          }
        >
          <FiUsers className="mr-3" />
          Medical Info
        </NavLink>
        <NavLink
          to="/patient/doctors"
          className={() =>
            `flex items-center py-3 px-4 text-gray-600 hover:bg-gray-100 rounded-lg ${
              location.pathname === "/patient/doctors"
                ? "bg-gray-100 text-gray-600"
                : ""
            }`
          }
        >
          <FiUser className="mr-3" />
          Doctors
        </NavLink>
        <NavLink
          to="/patient/predictions"
          className={() =>
            `flex items-center py-3 px-4 text-gray-600 hover:bg-gray-100 rounded-lg ${
              location.pathname === "/patient/predictions"
                ? "bg-gray-100 text-gray-600"
                : ""
            }`
          }
        >
          <FiHeart className="mr-3" />
          Predictions
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
