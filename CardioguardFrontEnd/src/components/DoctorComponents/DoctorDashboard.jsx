import SearchPatients from "../SearchPatients"; // Assuming doctors need to search patients

const DoctorDashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col item-center justify-center space-x-4">
        <span className="text-3xl text-center font-bold text-blue-500 mb-4">
          {" "}
          Doctor Dashboard
        </span>
        <SearchPatients />
      </div>
    </div>
  );
};

export default DoctorDashboard;
