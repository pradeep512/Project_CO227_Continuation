const TopBar = () => {
    return (
      <div className="bg-white p-4 shadow-md flex justify-between items-center">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search anything"
            className="px-4 py-2 border rounded-md"
          />
        </div>
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/40"
            alt="Avatar"
            className="rounded-full w-10 h-10"
          />
          <p className="ml-3">Admin</p>
        </div>
      </div>
    );
  };
  
  export default TopBar;
  