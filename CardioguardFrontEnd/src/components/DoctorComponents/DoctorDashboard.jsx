import SearchPatients from "../SearchPatients"; // Assuming doctors need to search patients

const DoctorDashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex item-center justify-center space-x-4">
        <SearchPatients />
      </div>
    </div>
  );
};

export default DoctorDashboard;
