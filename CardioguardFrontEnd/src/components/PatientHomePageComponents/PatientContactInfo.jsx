import { useState, useEffect } from "react";
import axiosClient from "../../../axios-client"; // Updated path for axiosClient

const PatientContactInfo = () => {
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Hardcoded patient ID
  const patientId = 1; // Change this to the ID you want to fetch

  // Fetch patient data when the component loads
  useEffect(() => {
    const fetchPatientDataById = async () => {
      try {
        setLoading(true);
        setError(null);
        setPatient(null);

        // Fetch patient data
        const patientResponse = await axiosClient.get(`/patients/${patientId}`);

        if (patientResponse.data) {
          setPatient(patientResponse.data);
        } else {
          setError("No patient data found.");
        }
      } catch (err) {
        setError("Failed to fetch data. Please check the Patient ID and try again.");
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPatientDataById();
  }, [patientId]); // Fetch data when patientId is loaded (which is hardcoded here)

  return (
          <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm">
          <h2 className="text-lg font-bold mb-4">Patient Info</h2>
          {patient ? (
            <div>
              {/* First Name */}
              <div className="mb-4">
                <p className="text-sm text-gray-500">First Name</p>
                <p className="text-md font-medium">{patient.firstName || "N/A"}</p>
              </div>
  
              {/* Last Name */}
              <div className="mb-4">
                <p className="text-sm text-gray-500">Last Name</p>
                <p className="text-md font-medium">{patient.lastName || "N/A"}</p>
              </div>
  
              {/* NIC */}
              <div className="mb-4">
                <p className="text-sm text-gray-500">NIC</p>
                <p className="text-md font-medium">{patient.nic || "N/A"}</p>
              </div>
  
              {/* Email */}
              <div className="mb-4">
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-md font-medium">{patient.email || "N/A"}</p>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500">
              {error || "Loading..."}
            </div>
          )}
        </div>
  );
};

export default PatientContactInfo;
