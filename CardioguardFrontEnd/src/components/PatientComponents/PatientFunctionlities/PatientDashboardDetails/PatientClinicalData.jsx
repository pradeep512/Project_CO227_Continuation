import { useState, useEffect, useCallback } from "react";
import {
  FaHeartbeat,
  FaDiagnoses,
  FaSyringe,
  FaSmoking,
  FaTint,
  FaChartLine,
} from "react-icons/fa"; // Import relevant icons
import axiosClient from "../../../../../axios-client";
import useStateContext from "../../../../contexts/useStateContext";

const PatientClinicalDataById = () => {
  const [clinicalData, setClinicalData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useStateContext();

  const patientId = user.patientId;

  const fetchClinicalData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      setClinicalData([]);

      // Fetch clinical data
      const clinicalDataResponse = await axiosClient.get(
        `/doctors/patients/${patientId}/clinical-data`
      );

      if (clinicalDataResponse.data && clinicalDataResponse.data.length > 0) {
        // Since it's an array, grab the first element
        setClinicalData(clinicalDataResponse.data[0]);
      } else {
        setError("No clinical data found.");
      }
    } catch (err) {
      setError(
        "Failed to fetch clinical data. Please check the Patient ID and try again."
      );
      console.error("Error fetching clinical data:", err);
    } finally {
      setLoading(false);
    }
  }, [patientId]); // Include patientId as a dependency

  useEffect(() => {
    // Automatically fetch data on component load
    fetchClinicalData();
  }, [fetchClinicalData]); // Add fetchClinicalData to the dependency array

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-full  mb-2">
      <h1 className="text-2xl font-bold text-left mb-6">
        Patient Clinical Data
      </h1>

      {/* Error message */}
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

      {/* Display clinical data */}
      {clinicalData && (
        <div className="bg-gray-50 rounded-md p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              {
                label: "Diagnosis of Heart Disease",
                value: clinicalData.diagnosisOfHeartDisease ? "Yes" : "No",
                color: clinicalData.diagnosisOfHeartDisease
                  ? "text-green-500"
                  : "text-red-500",
                icon: <FaHeartbeat className="text-blue-500 mr-4" size={40} />,
              },
              {
                label: "Presence of Anemia",
                value: clinicalData.presenceOfAnemia ? "Yes" : "No",
                color: clinicalData.presenceOfAnemia
                  ? "text-green-500"
                  : "text-red-500",
                icon: <FaTint className="text-blue-500 mr-4" size={40} />,
              },
              {
                label: "Creatinine Phosphokinase",
                value: clinicalData.creatininePhosphokinase || "N/A",
                color: "text-gray-700",
                icon: <FaSyringe className="text-blue-500 mr-4" size={40} />,
              },
              {
                label: "Diabetes",
                value: clinicalData.diabetes ? "Yes" : "No",
                color: clinicalData.diabetes
                  ? "text-green-500"
                  : "text-red-500",
                icon: <FaDiagnoses className="text-blue-500 mr-4" size={40} />,
              },
              {
                label: "Ejection Fraction",
                value: clinicalData.ejectionFraction
                  ? `${clinicalData.ejectionFraction}%`
                  : "N/A",
                color: "text-gray-700",
                icon: <FaChartLine className="text-blue-500 mr-4" size={40} />,
              },
              {
                label: "Blood Pressure",
                value: clinicalData.bloodPressure || "N/A",
                color: "text-gray-700",
                icon: <FaHeartbeat className="text-blue-500 mr-4" size={40} />,
              },
              {
                label: "Platelets",
                value: clinicalData.platelets || "N/A",
                color: "text-gray-700",
                icon: <FaSyringe className="text-blue-500 mr-4" size={40} />,
              },
              {
                label: "Serum Creatinine",
                value: clinicalData.serumCreatinine || "N/A",
                color: "text-gray-700",
                icon: <FaTint className="text-blue-500 mr-4" size={40} />,
              },
              {
                label: "Serum Sodium",
                value: clinicalData.serumSodium || "N/A",
                color: "text-gray-700",
                icon: <FaSyringe className="text-blue-500 mr-4" size={40} />,
              },
              {
                label: "Smoking",
                value: clinicalData.smoking ? "Yes" : "No",
                color: clinicalData.smoking ? "text-green-500" : "text-red-500",
                icon: <FaSmoking className="text-blue-500 mr-4" size={40} />,
              },
              {
                label: "Follow-Up Period (Days)",
                value: clinicalData.followUpPeriodDays || "N/A",
                color: "text-gray-700",
                icon: <FaChartLine className="text-blue-500 mr-4" size={40} />,
              },
            ].map((data, index) => (
              <div
                key={index}
                className="flex items-center bg-blue-100 p-4 rounded-lg h-28"
              >
                {data.icon}
                <div>
                  <p className="text-sm font-medium">{data.label}</p>
                  <p className={`text-lg ${data.color}`}>{data.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* No data message */}
      {!clinicalData && !loading && !error && (
        <p className="text-gray-600 text-center">No clinical data available.</p>
      )}
    </div>
  );
};

export default PatientClinicalDataById;
