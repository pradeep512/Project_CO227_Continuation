// import { useState, useEffect, useCallback } from "react";
// import {
//   FaHeartbeat,
//   FaDiagnoses,
//   FaSyringe,
//   FaSmoking,
//   FaTint,
//   FaChartLine,
// } from "react-icons/fa"; // Import relevant icons
// import axiosClient from "../../../../../axios-client";
// import useStateContext from "../../../../contexts/useStateContext";

// const PatientClinicalDataById = () => {
//   const [clinicalData, setClinicalData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const { user } = useStateContext();

//   const patientId = user.patientId;

//   const fetchClinicalData = useCallback(async () => {
//     try {
//       setLoading(true);
//       setError(null);
//       setClinicalData([]);

//       // Fetch clinical data
//       const clinicalDataResponse = await axiosClient.get(
//         `/doctors/patients/${patientId}/clinical-data`
//       );

//       if (clinicalDataResponse.data && clinicalDataResponse.data.length > 0) {
//         // Since it's an array, grab the first element
//         setClinicalData(clinicalDataResponse.data[0]);
//       } else {
//         setError("No clinical data found.");
//       }
//     } catch (err) {
//       setError(
//         "Failed to fetch clinical data. Please check the Patient ID and try again."
//       );
//       console.error("Error fetching clinical data:", err);
//     } finally {
//       setLoading(false);
//     }
//   }, [patientId]); // Include patientId as a dependency

//   useEffect(() => {
//     // Automatically fetch data on component load
//     fetchClinicalData();
//   }, [fetchClinicalData]); // Add fetchClinicalData to the dependency array

//   return (
//     <div className="bg-white shadow-lg rounded-lg p-4 w-full  mb-2">
//       <h1 className="text-2xl font-bold text-left mb-6">
//         Patient Clinical Data
//       </h1>

//       {/* Error message */}
//       {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

//       {/* Display clinical data */}
//       {clinicalData && (
//         <div className="bg-gray-50 rounded-md p-4">
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//             {[
//               {
//                 label: "Diagnosis of Heart Disease",
//                 value: clinicalData.diagnosisOfHeartDisease ? "Yes" : "No",
//                 color: clinicalData.diagnosisOfHeartDisease
//                   ? "text-green-500"
//                   : "text-red-500",
//                 icon: <FaHeartbeat className="text-blue-500 mr-4" size={40} />,
//               },
//               {
//                 label: "Presence of Anemia",
//                 value: clinicalData.presenceOfAnemia ? "Yes" : "No",
//                 color: clinicalData.presenceOfAnemia
//                   ? "text-green-500"
//                   : "text-red-500",
//                 icon: <FaTint className="text-blue-500 mr-4" size={40} />,
//               },
//               {
//                 label: "Creatinine Phosphokinase",
//                 value: clinicalData.creatininePhosphokinase || "N/A",
//                 color: "text-gray-700",
//                 icon: <FaSyringe className="text-blue-500 mr-4" size={40} />,
//               },
//               {
//                 label: "Diabetes",
//                 value: clinicalData.diabetes ? "Yes" : "No",
//                 color: clinicalData.diabetes
//                   ? "text-green-500"
//                   : "text-red-500",
//                 icon: <FaDiagnoses className="text-blue-500 mr-4" size={40} />,
//               },
//               {
//                 label: "Ejection Fraction",
//                 value: clinicalData.ejectionFraction
//                   ? `${clinicalData.ejectionFraction}%`
//                   : "N/A",
//                 color: "text-gray-700",
//                 icon: <FaChartLine className="text-blue-500 mr-4" size={40} />,
//               },
//               {
//                 label: "Blood Pressure",
//                 value: clinicalData.bloodPressure || "N/A",
//                 color: "text-gray-700",
//                 icon: <FaHeartbeat className="text-blue-500 mr-4" size={40} />,
//               },
//               {
//                 label: "Platelets",
//                 value: clinicalData.platelets || "N/A",
//                 color: "text-gray-700",
//                 icon: <FaSyringe className="text-blue-500 mr-4" size={40} />,
//               },
//               {
//                 label: "Serum Creatinine",
//                 value: clinicalData.serumCreatinine || "N/A",
//                 color: "text-gray-700",
//                 icon: <FaTint className="text-blue-500 mr-4" size={40} />,
//               },
//               {
//                 label: "Serum Sodium",
//                 value: clinicalData.serumSodium || "N/A",
//                 color: "text-gray-700",
//                 icon: <FaSyringe className="text-blue-500 mr-4" size={40} />,
//               },
//               {
//                 label: "Smoking",
//                 value: clinicalData.smoking ? "Yes" : "No",
//                 color: clinicalData.smoking ? "text-green-500" : "text-red-500",
//                 icon: <FaSmoking className="text-blue-500 mr-4" size={40} />,
//               },
//               {
//                 label: "Follow-Up Period (Days)",
//                 value: clinicalData.followUpPeriodDays || "N/A",
//                 color: "text-gray-700",
//                 icon: <FaChartLine className="text-blue-500 mr-4" size={40} />,
//               },
//             ].map((data, index) => (
//               <div
//                 key={index}
//                 className="flex items-center bg-blue-100 p-4 rounded-lg h-28"
//               >
//                 {data.icon}
//                 <div>
//                   <p className="text-sm font-medium">{data.label}</p>
//                   <p className={`text-lg ${data.color}`}>{data.value}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* No data message */}
//       {!clinicalData && !loading && !error && (
//         <p className="text-gray-600 text-center">No clinical data available.</p>
//       )}
//     </div>
//   );
// };

// export default PatientClinicalDataById;





// import { useState, useEffect, useCallback } from "react";
// import {
//   FaHeartbeat,
//   FaDiagnoses,
//   FaSyringe,
//   FaSmoking,
//   FaTint,
//   FaChartLine,
// } from "react-icons/fa";
// import axiosClient from "../../../../../axios-client";
// import useStateContext from "../../../../contexts/useStateContext";

// const PatientClinicalDataById = () => {
//   const [clinicalDataList, setClinicalDataList] = useState([]);
//   const [selectedClinicalData, setSelectedClinicalData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const { user } = useStateContext();

//   const patientId = user.patientId;

//   const fetchClinicalData = useCallback(async () => {
//     try {
//       setLoading(true);
//       setError(null);
//       setClinicalDataList([]);

//       // Fetch clinical data
//       const clinicalDataResponse = await axiosClient.get(
//         `/doctors/patients/${patientId}/clinical-data`
//       );

//       if (clinicalDataResponse.data && clinicalDataResponse.data.length > 0) {
//         setClinicalDataList(clinicalDataResponse.data);
//       } else {
//         setError("No clinical data found.");
//       }
//     } catch (err) {
//       setError(
//         "Failed to fetch clinical data. Please check the Patient ID and try again."
//       );
//       console.error("Error fetching clinical data:", err);
//     } finally {
//       setLoading(false);
//     }
//   }, [patientId]);

//   useEffect(() => {
//     fetchClinicalData();
//   }, [fetchClinicalData]);

//   const handleShowDetails = (data) => {
//     setSelectedClinicalData(data);
//   };

//   const handleBackToList = () => {
//     setSelectedClinicalData(null);
//   };

//   return (
//     <div className="bg-white shadow-lg rounded-lg p-4 w-full mb-2">
//       <h1 className="text-2xl font-bold text-left mb-6">Patient Clinical Data</h1>

//       {/* Error message */}
//       {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

//       {/* Loading state */}
//       {loading && <p className="text-gray-600 text-center">Loading...</p>}

//       {/* Show details view */}
//       {selectedClinicalData ? (
//         <div>
//           <button
//             onClick={handleBackToList}
//             className="bg-blue-500 text-white p-2 rounded mb-4"
//           >
//             Back to List
//           </button>
//           <DetailedClinicalData data={selectedClinicalData} />
//         </div>
//       ) : (
//         // Table view
//         <div>
//           {clinicalDataList.length > 0 ? (
//             <table className="w-full bg-gray-50 rounded-md">
//               <thead>
//                 <tr>
//                   <th className="text-left p-4">Date</th>
//                   <th className="text-left p-4">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {clinicalDataList.map((data, index) => (
//                   <tr key={index} className="border-t">
//                     <td className="p-4">{data.date || "N/A"}</td>
//                     <td className="p-4">
//                       <button
//                         onClick={() => handleShowDetails(data)}
//                         className="bg-blue-500 text-white p-2 rounded"
//                       >
//                         Show Details
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           ) : (
//             !loading && !error && (
//               <p className="text-gray-600 text-center">
//                 No clinical data available.
//               </p>
//             )
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// // Component to render the details view of clinical data
// const DetailedClinicalData = ({ data }) => (
//   <div className="bg-gray-50 rounded-md p-4">
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//       {[
//         {
//           label: "Diagnosis of Heart Disease",
//           value: data.diagnosisOfHeartDisease ? "Yes" : "No",
//           color: data.diagnosisOfHeartDisease ? "text-green-500" : "text-red-500",
//           icon: <FaHeartbeat className="text-blue-500 mr-4" size={40} />,
//         },
//         {
//           label: "Presence of Anemia",
//           value: data.presenceOfAnemia ? "Yes" : "No",
//           color: data.presenceOfAnemia ? "text-green-500" : "text-red-500",
//           icon: <FaTint className="text-blue-500 mr-4" size={40} />,
//         },
//         {
//           label: "Creatinine Phosphokinase",
//           value: data.creatininePhosphokinase || "N/A",
//           color: "text-gray-700",
//           icon: <FaSyringe className="text-blue-500 mr-4" size={40} />,
//         },
//         {
//           label: "Diabetes",
//           value: data.diabetes ? "Yes" : "No",
//           color: data.diabetes ? "text-green-500" : "text-red-500",
//           icon: <FaDiagnoses className="text-blue-500 mr-4" size={40} />,
//         },
//         {
//           label: "Ejection Fraction",
//           value: data.ejectionFraction ? `${data.ejectionFraction}%` : "N/A",
//           color: "text-gray-700",
//           icon: <FaChartLine className="text-blue-500 mr-4" size={40} />,
//         },
//         {
//           label: "Blood Pressure",
//           value: data.bloodPressure || "N/A",
//           color: "text-gray-700",
//           icon: <FaHeartbeat className="text-blue-500 mr-4" size={40} />,
//         },
//         {
//           label: "Platelets",
//           value: data.platelets || "N/A",
//           color: "text-gray-700",
//           icon: <FaSyringe className="text-blue-500 mr-4" size={40} />,
//         },
//         {
//           label: "Serum Creatinine",
//           value: data.serumCreatinine || "N/A",
//           color: "text-gray-700",
//           icon: <FaTint className="text-blue-500 mr-4" size={40} />,
//         },
//         {
//           label: "Serum Sodium",
//           value: data.serumSodium || "N/A",
//           color: "text-gray-700",
//           icon: <FaSyringe className="text-blue-500 mr-4" size={40} />,
//         },
//         {
//           label: "Smoking",
//           value: data.smoking ? "Yes" : "No",
//           color: data.smoking ? "text-green-500" : "text-red-500",
//           icon: <FaSmoking className="text-blue-500 mr-4" size={40} />,
//         },
//         {
//           label: "Follow-Up Period (Days)",
//           value: data.followUpPeriodDays || "N/A",
//           color: "text-gray-700",
//           icon: <FaChartLine className="text-blue-500 mr-4" size={40} />,
//         },
//       ].map((detail, index) => (
//         <div key={index} className="flex items-center bg-blue-100 p-4 rounded-lg h-28">
//           {detail.icon}
//           <div>
//             <p className="text-sm font-medium">{detail.label}</p>
//             <p className={`text-lg ${detail.color}`}>{detail.value}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// export default PatientClinicalDataById;



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
  const [clinicalDataList, setClinicalDataList] = useState([]);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useStateContext();

  const patientId = user.patientId;

  const fetchClinicalData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      setClinicalDataList([]);

      // Fetch clinical data
      const clinicalDataResponse = await axiosClient.get(
        `/doctors/patients/${patientId}/clinical-data`
      );

      if (clinicalDataResponse.data && clinicalDataResponse.data.length > 0) {
        setClinicalDataList(clinicalDataResponse.data);
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
  }, [patientId]);

  useEffect(() => {
    fetchClinicalData();
  }, [fetchClinicalData]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-full mb-2">
      <h1 className="text-2xl font-bold text-left mb-6">
        Patient Clinical Data
      </h1>

      {/* Error message */}
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

      {/* Clinical data list view */}
      {!selectedRecord && clinicalDataList.length > 0 && (
        <table className="min-w-full bg-gray-50 rounded-md">
          <thead>
            <tr>
              <th className="py-2 px-4 text-left">Date</th>
              <th className="py-2 px-4 flex justify-end">Details</th>
            </tr>
          </thead>
          <tbody>
            {clinicalDataList.map((data, index) => (
              <tr key={index} className="border-t">
                <td className="py-2 px-4">
                  {data.clinicalDate ? new Date(data.clinicalDate).toLocaleDateString() : "N/A"}
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

      {/* Detailed view of selected clinical data */}
      {selectedRecord && (
        <div className="bg-gray-50 rounded-md p-4 mt-6">
          <h2 className="text-xl font-bold mb-4">Clinical Data Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              {
                label: "Diagnosis of Heart Disease",
                value: selectedRecord.diagnosisOfHeartDisease ? "Yes" : "No",
                color: selectedRecord.diagnosisOfHeartDisease
                  ? "text-green-500"
                  : "text-red-500",
                icon: <FaHeartbeat className="text-blue-500 mr-4" size={40} />,
              },
              {
                label: "Presence of Anemia",
                value: selectedRecord.presenceOfAnemia ? "Yes" : "No",
                color: selectedRecord.presenceOfAnemia
                  ? "text-green-500"
                  : "text-red-500",
                icon: <FaTint className="text-blue-500 mr-4" size={40} />,
              },
              {
                label: "Creatinine Phosphokinase",
                value: selectedRecord.creatininePhosphokinase || "N/A",
                color: "text-gray-700",
                icon: <FaSyringe className="text-blue-500 mr-4" size={40} />,
              },
              {
                label: "Diabetes",
                value: selectedRecord.diabetes ? "Yes" : "No",
                color: selectedRecord.diabetes
                  ? "text-green-500"
                  : "text-red-500",
                icon: <FaDiagnoses className="text-blue-500 mr-4" size={40} />,
              },
              {
                label: "Ejection Fraction",
                value: selectedRecord.ejectionFraction
                  ? `${selectedRecord.ejectionFraction}%`
                  : "N/A",
                color: "text-gray-700",
                icon: <FaChartLine className="text-blue-500 mr-4" size={40} />,
              },
              {
                label: "Blood Pressure",
                value: selectedRecord.bloodPressure || "N/A",
                color: "text-gray-700",
                icon: <FaHeartbeat className="text-blue-500 mr-4" size={40} />,
              },
              {
                label: "Platelets",
                value: selectedRecord.platelets || "N/A",
                color: "text-gray-700",
                icon: <FaSyringe className="text-blue-500 mr-4" size={40} />,
              },
              {
                label: "Serum Creatinine",
                value: selectedRecord.serumCreatinine || "N/A",
                color: "text-gray-700",
                icon: <FaTint className="text-blue-500 mr-4" size={40} />,
              },
              {
                label: "Serum Sodium",
                value: selectedRecord.serumSodium || "N/A",
                color: "text-gray-700",
                icon: <FaSyringe className="text-blue-500 mr-4" size={40} />,
              },
              {
                label: "Smoking",
                value: selectedRecord.smoking ? "Yes" : "No",
                color: selectedRecord.smoking ? "text-green-500" : "text-red-500",
                icon: <FaSmoking className="text-blue-500 mr-4" size={40} />,
              },
              {
                label: "Follow-Up Period (Days)",
                value: selectedRecord.followUpPeriodDays || "N/A",
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

          <button
            className="mt-4 bg-gray-500 text-white px-4 py-2 rounded"
            onClick={() => setSelectedRecord(null)}
          >
            Back to List
          </button>
        </div>
      )}

      {/* No data message */}
      {!clinicalDataList.length && !loading && !error && (
        <p className="text-gray-600 text-center">No clinical data available.</p>
      )}
    </div>
  );
};

export default PatientClinicalDataById;
