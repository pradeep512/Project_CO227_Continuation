import { useState } from "react";
import SearchDoctors from "./SearchDoctors";
import SearchPatients from "./SearchPatients"; // Assuming these components are imported
import axiosClient from "../../axios-client";

const RegisterPatientToDoctor = () => {
  const [selectedDoctorId, setSelectedDoctorId] = useState("");
  const [selectedPatientId, setSelectedPatientId] = useState("");
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleDoctorSelect = (doctorId) => {
    setSelectedDoctorId(doctorId);
  };

  const handlePatientSelect = (patientId) => {
    setSelectedPatientId(patientId);
  };

  const handleRegister = async () => {
    if (!selectedDoctorId || !selectedPatientId) {
      setError("Please select both a doctor and a patient.");
      return;
    }

    try {
      const response = await axiosClient.put(
        `/admin/registerTo/${selectedDoctorId}/${selectedPatientId}/register`
      );
      if (response.status === 200) {
        setSuccess("Patient successfully registered to doctor!");
        setError(null);

        // Reset the selected doctor and patient after successful registration
        setSelectedDoctorId("");
        setSelectedPatientId("");

        // Clear the success message after 3 seconds
        setTimeout(() => {
          setSuccess(null);
        }, 3000);
      } else {
        setError("Failed to register patient to doctor. Please try again.");
      }
    } catch (err) {
      setError("Failed to register patient to doctor. Please try again.");
      console.error("Error registering patient to doctor:", err);
    }
  };

  return (
    <div className="flex flex-col w-full items-center bg-white shadow-lg rounded-lg p-6 mx-auto mt-8 ">
      <h1 className="text-2xl font-bold mb-4">Register Patient to Doctor</h1>

      <div className="flex flex-row gap-4 w-full mb-6">
        {/* Doctor search section */}
        <div className="flex-1">
          <h2 className="text-lg text-blue-400 font-semibold text-left mt-4 pl-4">
            Select Doctor:
          </h2>
          <SearchDoctors onSelectDoctor={handleDoctorSelect} />
          <input
            type="text"
            value={selectedDoctorId}
            disabled
            placeholder="Selected Doctor ID"
            className="w-full mt-4 p-2 border rounded-md"
          />
        </div>

        {/* Patient search section */}
        <div className="flex-1">
          <h2 className="text-lg text-blue-400 font-semibold text-left mt-4 pl-4">
            Select Patient:
          </h2>
          <SearchPatients onSelectPatient={handlePatientSelect} />
          <input
            type="text"
            value={selectedPatientId}
            disabled
            placeholder="Selected Patient ID"
            className="w-full mt-4 p-2 border rounded-md"
          />
        </div>
      </div>

      <button
        onClick={handleRegister}
        className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all disabled:opacity-50"
        disabled={!selectedDoctorId || !selectedPatientId}
      >
        Register Patient to Doctor
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {/* Success Alert */}
      {success && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4"
          role="alert"
        >
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline"> {success}</span>
        </div>
      )}
    </div>
  );
};

export default RegisterPatientToDoctor;
