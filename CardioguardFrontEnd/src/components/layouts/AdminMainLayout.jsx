import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../AdminComponents/SideBar";
import TopBar from "../AdminComponents/TopBar";
import useStateContext from "../../contexts/useStateContext";

const AdminMainLayout = () => {
  const { token, setUser, user, setToken } = useStateContext();

  // Safely check if the user is authenticated and has the "ADMIN" role
  if (!token || !user || user.role !== "ADMIN") {
    return <Navigate to="/login" />;
  }

  const handleLogout = () => {
    console.log("User logged out");
    setUser(null);
    setToken(null);
    window.location.href = "/login"; // Redirect to login page after logout
  };

  return (
    <div className="flex">
      {/* Sidebar will remain fixed to the left */}
      <div className="w-64 fixed top-0 left-0 h-full">
        <Sidebar />
      </div>

      {/* Main content area, with margin to make space for the sidebar */}
      <div className="flex flex-col w-full ml-64">
        {/* Pass handleLogout to TopBar */}
        <TopBar patientName={"HI"} handleLogout={handleLogout} />

        {/* This Outlet will load the corresponding page component */}
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminMainLayout;
