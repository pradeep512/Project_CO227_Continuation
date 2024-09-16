import React, { useState, useEffect, useCallback } from "react";
import axiosClient from "../../../../../axios-client";
import { useParams } from "react-router-dom";

const SymptomDataById = () => {
  const { patientId } = useParams();
  const [symptoms, setSymptoms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [expandedRows, setExpandedRows] = useState({}); // State to track expanded rows

  // Use useCallback to memoize the function
  const fetchSymptomsData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      setSymptoms([]);

      // Fetch symptoms data
      const symptomsResponse = await axiosClient.get(
        `/doctors/patients/${patientId}/symptoms`
      );

      if (symptomsResponse.data) {
        // Sort symptoms by date in descending order
        const sortedSymptoms = symptomsResponse.data.sort(
          (a, b) => new Date(b.symptomDate) - new Date(a.symptomDate)
        );
        setSymptoms(sortedSymptoms);
      } else {
        setError("No symptoms data found.");
      }
    } catch (err) {
      setError(
        "Failed to fetch symptoms data. Please check the Patient ID and try again."
      );
      console.error("Error fetching symptoms data:", err);
    } finally {
      setLoading(false);
    }
  }, [patientId]); // Add patientId as a dependency

  useEffect(() => {
    // Automatically fetch data on component load
    fetchSymptomsData();
  }, [fetchSymptomsData]); // Include fetchSymptomsData in the dependency array

  // Toggle the expanded state of a row
  const toggleRowExpansion = (index) => {
    setExpandedRows((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Toggle the state
    }));
  };

  return (
    <div className="w-full bg-white shadow-lg rounded-lg p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-left ml-4">
          Patient Symptoms Info
        </h1>
        <p className="font-semibold pr-4">Patient ID : {patientId}</p>
      </div>

      {/* Error message */}
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

      {/* Display symptoms data */}
      {symptoms.length > 0 && (
        <div className="bg-gray-50 rounded-md p-4">
          <div className="overflow-y-auto" style={{ maxHeight: "500px" }}>
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2">Date(M/D/Y)</th>
                  <th className="px-4 py-2 w-1/3">Details</th>
                  <th className="px-4 py-2">Doctor Recommendation</th>
                </tr>
              </thead>
              <tbody>
                {symptoms.map((symptom, index) => (
                  <React.Fragment key={index}>
                    {/* Main row */}
                    <tr
                      className="bg-white border-b cursor-pointer"
                      onClick={() => toggleRowExpansion(index)} // Toggle on click
                    >
                      <td className="px-4 py-2">
                        {new Date(symptom.symptomDate).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-2 text-gray-700">
                        {expandedRows[index] ? "Hide Details" : "Show Details"}
                      </td>
                      <td className="px-4 py-2 text-gray-700">
                        {symptom.doctorRecommendation || "N/A"}
                      </td>
                    </tr>

                    {/* Expanded row details */}
                    {expandedRows[index] && (
                      <tr className="bg-gray-100 border-b">
                        <td colSpan="3" className="px-4 py-2">
                          <ul>
                            <li>
                              Bilateral Lower Limb Swelling:{" "}
                              <span
                                className={`${
                                  symptom.bilateralLowerLimbSwelling
                                    ? "text-red-500"
                                    : "text-green-500"
                                }`}
                              >
                                {symptom.bilateralLowerLimbSwelling
                                  ? "Yes"
                                  : "No"}
                              </span>
                            </li>
                            <li>
                              Dyspnoea:{" "}
                              <span
                                className={`${
                                  symptom.dyspnoea
                                    ? "text-red-500"
                                    : "text-green-500"
                                }`}
                              >
                                {symptom.dyspnoea ? "Yes" : "No"}
                              </span>
                            </li>
                            <li>
                              Orthopnoea:{" "}
                              <span
                                className={`${
                                  symptom.orthopnoea
                                    ? "text-red-500"
                                    : "text-green-500"
                                }`}
                              >
                                {symptom.orthopnoea ? "Yes" : "No"}
                              </span>
                            </li>
                            <li>
                              Paroxysmal Nocturnal Dyspnoea:{" "}
                              <span
                                className={`${
                                  symptom.paroxysmalNocturnalDyspnoea
                                    ? "text-red-500"
                                    : "text-green-500"
                                }`}
                              >
                                {symptom.paroxysmalNocturnalDyspnoea
                                  ? "Yes"
                                  : "No"}
                              </span>
                            </li>
                            <li>
                              Fatigue:{" "}
                              <span
                                className={`${
                                  symptom.fatigue
                                    ? "text-red-500"
                                    : "text-green-500"
                                }`}
                              >
                                {symptom.fatigue ? "Yes" : "No"}
                              </span>
                            </li>
                          </ul>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* No data message */}
      {!symptoms.length && !loading && !error && (
        <p className="text-gray-600 text-center">No symptoms data available.</p>
      )}
    </div>
  );
};

export default SymptomDataById;
