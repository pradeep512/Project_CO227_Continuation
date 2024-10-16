// import { useState, useEffect, useCallback } from "react";
// import { FaStethoscope } from "react-icons/fa"; // Use the stethoscope icon
// import axiosClient from "../../../../../axios-client";
// import useStateContext from "../../../../contexts/useStateContext";

// const PatientSymptomDataById = () => {
//   const [symptoms, setSymptoms] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const { user } = useStateContext();

//   const patientId = user.patientId;

//   const fetchSymptomsData = useCallback(async () => {
//     try {
//       setLoading(true);
//       setError(null);
//       setSymptoms([]);

//       // Fetch symptoms data
//       const symptomsResponse = await axiosClient.get(
//         `/doctors/patients/${patientId}/symptoms`
//       );

//       if (symptomsResponse.data) {
//         setSymptoms(symptomsResponse.data);
//       } else {
//         setError("No symptoms data found.");
//       }
//     } catch (err) {
//       setError(
//         "Failed to fetch symptoms data. Please check the Patient ID and try again."
//       );
//       console.error("Error fetching symptoms data:", err);
//     } finally {
//       setLoading(false);
//     }
//   }, [patientId]); // Include patientId as a dependency

//   useEffect(() => {
//     // Automatically fetch data on component load
//     fetchSymptomsData();
//   }, [fetchSymptomsData]); // Add fetchSymptomsData to the dependency array

//   return (
//     <div className="bg-white shadow-lg rounded-lg p-4 w-full mb-2">
//       <h1 className="text-2xl font-bold text-left mb-6">
//         Patient Symptoms Info
//       </h1>

//       {/* Error message */}
//       {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

//       {/* Display symptoms data */}
//       {symptoms.length > 0 && (
//         <div className="bg-gray-50 rounded-md p-4">
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//             {[
//               {
//                 label: "Bilateral Lower Limb Swelling",
//                 value: symptoms[0].bilateralLowerLimbSwelling ? "Yes" : "No",
//                 color: symptoms[0].bilateralLowerLimbSwelling
//                   ? "text-green-500"
//                   : "text-red-500",
//               },
//               {
//                 label: "Dyspnoea",
//                 value: symptoms[0].dyspnoea ? "Yes" : "No",
//                 color: symptoms[0].dyspnoea ? "text-green-500" : "text-red-500",
//               },
//               {
//                 label: "Orthopnoea",
//                 value: symptoms[0].orthopnoea ? "Yes" : "No",
//                 color: symptoms[0].orthopnoea
//                   ? "text-green-500"
//                   : "text-red-500",
//               },
//               {
//                 label: "Paroxysmal Nocturnal Dyspnoea",
//                 value: symptoms[0].paroxysmalNocturnalDyspnoea ? "Yes" : "No",
//                 color: symptoms[0].paroxysmalNocturnalDyspnoea
//                   ? "text-green-500"
//                   : "text-red-500",
//               },
//               {
//                 label: "Fatigue",
//                 value: symptoms[0].fatigue ? "Yes" : "No",
//                 color: symptoms[0].fatigue ? "text-green-500" : "text-red-500",
//               },
//               {
//                 label: "Symptom Date",
//                 value: new Date(symptoms[0].symptomDate).toLocaleDateString(),
//                 color: "text-gray-700", // Neutral color for date
//               },
//               {
//                 label: "Doctor Recommendation",
//                 value: symptoms[0].doctorRecommendation || "N/A",
//                 color: "text-gray-700", // Neutral color for text recommendation
//                 span: true, // Flag to indicate this item should span two columns
//               },
//             ].map((symptom, index) => (
//               <div
//                 key={index}
//                 className={`flex items-center bg-blue-100 p-4 rounded-lg h-28 ${
//                   symptom.span
//                     ? "col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-2"
//                     : ""
//                 }`} // Apply col-span classes based on screen size
//               >
//                 <FaStethoscope className="text-blue-500 mr-4" size={40} />{" "}
//                 {/* Fixed icon size */}
//                 <div>
//                   <p className="text-sm font-medium">{symptom.label}</p>
//                   <p className={`text-lg ${symptom.color}`}>
//                     {symptom.value}
//                   </p>{" "}
//                   {/* Color based on value */}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* No data message */}
//       {!symptoms.length && !loading && !error && (
//         <p className="text-gray-600 text-center">No symptoms data available.</p>
//       )}
//     </div>
//   );
// };

// export default PatientSymptomDataById;



import { useState, useEffect, useCallback } from "react";
import { FaStethoscope } from "react-icons/fa";
import axiosClient from "../../../../../axios-client";
import useStateContext from "../../../../contexts/useStateContext";

const PatientSymptomDataById = () => {
  const [symptoms, setSymptoms] = useState([]);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useStateContext();

  const patientId = user.patientId;

  const fetchSymptomsData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      setSymptoms([]);

      const symptomsResponse = await axiosClient.get(
        `/doctors/patients/${patientId}/symptoms`
      );

      if (symptomsResponse.data) {
        setSymptoms(symptomsResponse.data);
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
  }, [patientId]);

  useEffect(() => {
    fetchSymptomsData();
  }, [fetchSymptomsData]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-full mb-2">
      <h1 className="text-2xl font-bold text-left mb-6">
        Patient Symptoms Info
      </h1>

      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

      {!selectedRecord && symptoms.length > 0 && (
        <table className="min-w-full bg-gray-50 rounded-md">
          <thead>
            <tr>
              <th className="py-2 px-4 text-left">Symptom Date</th>
              <th className="py-2 px-4 flex justify-end">Details</th>
            </tr>
          </thead>
          <tbody>
            {symptoms.map((data, index) => (
              <tr key={index} className="border-t">
                <td className="py-2 px-4">
                  {data.symptomDate
                    ? new Date(data.symptomDate).toLocaleDateString()
                    : "N/A"}
                </td>
                <td className="py-2 px-6 flex justify-end">
                  <button
                    className="bg-blue-500 text-white px-4 py-1 rounded"
                    onClick={() => setSelectedRecord(data)}
                  >
                    Show Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {!symptoms.length && !loading && !error && (
        <p className="text-gray-600 text-center">No symptoms data available.</p>
      )}

      {selectedRecord && (
        <div className="bg-gray-50 rounded-md p-4 mt-6">
          <h2 className="text-xl font-bold mb-4">Symptom Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              {
                label: "Bilateral Lower Limb Swelling",
                value: selectedRecord.bilateralLowerLimbSwelling ? "Yes" : "No",
                color: selectedRecord.bilateralLowerLimbSwelling
                  ? "text-green-500"
                  : "text-red-500",
              },
              {
                label: "Dyspnoea",
                value: selectedRecord.dyspnoea ? "Yes" : "No",
                color: selectedRecord.dyspnoea ? "text-green-500" : "text-red-500",
              },
              {
                label: "Orthopnoea",
                value: selectedRecord.orthopnoea ? "Yes" : "No",
                color: selectedRecord.orthopnoea
                  ? "text-green-500"
                  : "text-red-500",
              },
              {
                label: "Paroxysmal Nocturnal Dyspnoea",
                value: selectedRecord.paroxysmalNocturnalDyspnoea ? "Yes" : "No",
                color: selectedRecord.paroxysmalNocturnalDyspnoea
                  ? "text-green-500"
                  : "text-red-500",
              },
              {
                label: "Fatigue",
                value: selectedRecord.fatigue ? "Yes" : "No",
                color: selectedRecord.fatigue ? "text-green-500" : "text-red-500",
              },
              {
                label: "Symptom Date",
                value: new Date(selectedRecord.symptomDate).toLocaleDateString(),
                color: "text-gray-700",
              },
              {
                label: "Doctor Recommendation",
                value: selectedRecord.doctorRecommendation || "N/A",
                color: "text-gray-700",
                span: true,
              },
            ].map((symptom, index) => (
              <div
                key={index}
                className={`flex items-center bg-blue-100 p-4 rounded-lg h-28 ${
                  symptom.span
                    ? "col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-2"
                    : ""
                }`}
              >
                <FaStethoscope className="text-blue-500 mr-4" size={40} />
                <div>
                  <p className="text-sm font-medium">{symptom.label}</p>
                  <p className={`text-lg ${symptom.color}`}>
                    {symptom.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            className="mt-4 bg-gray-500 text-white px-4 py-2 rounded"
            onClick={() => setSelectedRecord(null)}
          >
            Back to List
          </button>
        </div>
      )}
    </div>
  );
};

export default PatientSymptomDataById;

