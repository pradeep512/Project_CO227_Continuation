
// import React, { useState, useEffect, useCallback } from "react";
// import axiosClient from "../../../../../axios-client";
// import { useParams } from "react-router-dom";

// const SymptomDataById = () => {
//   const { patientId } = useParams();
//   const [symptoms, setSymptoms] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [expandedRows, setExpandedRows] = useState({}); // State to track expanded rows

//   // Use useCallback to memoize the function
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
//         // Sort symptoms by date in descending order
//         const sortedSymptoms = symptomsResponse.data.sort(
//           (a, b) => new Date(b.symptomDate) - new Date(a.symptomDate)
//         );
//         setSymptoms(sortedSymptoms);
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
//   }, [patientId]); // Add patientId as a dependency

//   useEffect(() => {
//     // Automatically fetch data on component load
//     fetchSymptomsData();
//   }, [fetchSymptomsData]); // Include fetchSymptomsData in the dependency array

//   // Toggle the expanded state of a row
//   const toggleRowExpansion = (index) => {
//     setExpandedRows((prevState) => ({
//       ...prevState,
//       [index]: !prevState[index], // Toggle the state
//     }));
//   };

//   // Add Record button handler
//   const handleAddRecord = () => {
//     // Logic to add a new symptom record
//     console.log("Add record button clicked.");
//   };

//   // Update button handler
//   const handleUpdate = (id) => {
//     // Logic to update the symptom record
//     console.log(`Update record with ID: ${id}`);
//   };

//   // Delete button handler
//   const handleDelete = async (id) => {
//     try {
//       // Logic to delete the symptom record
//       await axiosClient.delete(`/symptoms/${id}`);
//       console.log(`Deleted record with ID: ${id}`);
//       // Refresh the data
//       fetchSymptomsData();
//     } catch (err) {
//       console.error("Error deleting symptom data:", err);
//     }
//   };

//   return (
//     <div className="w-full bg-white shadow-lg rounded-lg p-8">
//       <div className="flex items-center justify-between mb-6">
//         <h1 className="text-2xl font-bold text-left ml-4">
//           Patient Symptoms Info
//         </h1>
//         <p className="font-semibold pr-4">Patient ID : {patientId}</p>
//       </div>

//       {/* Add Record button */}
//       <div className="mb-4 flex justify-end">
//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           onClick={handleAddRecord}
//         >
//           Add Record
//         </button>
//       </div>

//       {/* Error message */}
//       {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

//       {/* Display symptoms data */}
//       {symptoms.length > 0 && (
//         <div className="bg-gray-50 rounded-md p-4">
//           <div className="overflow-y-auto" style={{ maxHeight: "500px" }}>
//             <table className="min-w-full table-auto">
//               <thead>
//                 <tr className="bg-gray-200">
//                   <th className="px-4 py-2">Date(M/D/Y)</th>
//                   <th className="px-4 py-2 w-1/3">Details</th>
//                   <th className="px-4 py-2">Doctor Recommendation</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {symptoms.map((symptom, index) => (
//                   <React.Fragment key={index}>
//                     {/* Main row */}
//                     <tr
//                       className="bg-white border-b cursor-pointer"
//                       onClick={() => toggleRowExpansion(index)} // Toggle on click
//                     >
//                       <td className="px-4 py-2">
//                         {new Date(symptom.symptomDate).toLocaleDateString()}
//                       </td>
//                       <td className="px-4 py-2 text-gray-700">
//                         {expandedRows[index] ? "Hide Details" : "Show Details"}
//                       </td>
//                       <td className="px-4 py-2 text-gray-700">
//                         {symptom.doctorRecommendation || "N/A"}
//                       </td>
//                     </tr>

//                     {/* Expanded row details */}
//                     {expandedRows[index] && (
//                       <tr className="bg-gray-100 border-b">
//                         <td colSpan="3" className="px-4 py-2">
//                           <ul>
//                             <li>
//                               Bilateral Lower Limb Swelling:{" "}
//                               <span
//                                 className={`${
//                                   symptom.bilateralLowerLimbSwelling
//                                     ? "text-red-500"
//                                     : "text-green-500"
//                                 }`}
//                               >
//                                 {symptom.bilateralLowerLimbSwelling
//                                   ? "Yes"
//                                   : "No"}
//                               </span>
//                             </li>
//                             <li>
//                               Dyspnoea:{" "}
//                               <span
//                                 className={`${
//                                   symptom.dyspnoea
//                                     ? "text-red-500"
//                                     : "text-green-500"
//                                 }`}
//                               >
//                                 {symptom.dyspnoea ? "Yes" : "No"}
//                               </span>
//                             </li>
//                             <li>
//                               Orthopnoea:{" "}
//                               <span
//                                 className={`${
//                                   symptom.orthopnoea
//                                     ? "text-red-500"
//                                     : "text-green-500"
//                                 }`}
//                               >
//                                 {symptom.orthopnoea ? "Yes" : "No"}
//                               </span>
//                             </li>
//                             <li>
//                               Paroxysmal Nocturnal Dyspnoea:{" "}
//                               <span
//                                 className={`${
//                                   symptom.paroxysmalNocturnalDyspnoea
//                                     ? "text-red-500"
//                                     : "text-green-500"
//                                 }`}
//                               >
//                                 {symptom.paroxysmalNocturnalDyspnoea
//                                   ? "Yes"
//                                   : "No"}
//                               </span>
//                             </li>
//                             <li>
//                               Fatigue:{" "}
//                               <span
//                                 className={`${
//                                   symptom.fatigue
//                                     ? "text-red-500"
//                                     : "text-green-500"
//                                 }`}
//                               >
//                                 {symptom.fatigue ? "Yes" : "No"}
//                               </span>
//                             </li>
//                           </ul>
//                           {/* Update and Delete buttons */}
//                           <div className="flex justify-end mt-4 space-x-2">
//                             <button
//                               className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded"
//                               onClick={() => handleUpdate(symptom.id)}
//                             >
//                               Update
//                             </button>
//                             <button
//                               className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
//                               onClick={() => handleDelete(symptom.id)}
//                             >
//                               Delete
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                     )}
//                   </React.Fragment>
//                 ))}
//               </tbody>
//             </table>
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

// export default SymptomDataById;


import React, { useState, useEffect, useCallback } from "react";
import axiosClient from "../../../../../axios-client";
import { useParams } from "react-router-dom";
import Modal from "./Modal"; // Adjust the path to your modal component
import SymptomsUpdate from "./SymptomsUpdate"; // Import the update component
import PatientSymptomsSubmission from "./PatientSymptomsSubmission"; // Import the add record component
import ClinicalDataChart from "./ClinicalDataChart";

const SymptomDataById = () => {
  const { patientId } = useParams();
  const [symptomData, setSymptomData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [expandedRows, setExpandedRows] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false); // Control modal visibility
  const [editIndex, setEditIndex] = useState(null); // Track the index of the row being edited

  // Fetch symptom data
  const fetchSymptomData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      setSymptomData([]);

      const symptomDataResponse = await axiosClient.get(
        `/doctors/patients/${patientId}/symptoms`
      );

      if (symptomDataResponse.data && symptomDataResponse.data.length > 0) {
        const sortedData = symptomDataResponse.data.sort(
          (a, b) => new Date(b.symptomDate) - new Date(a.symptomDate)
        );
        setSymptomData(sortedData);
      } else {
        setError("No symptom data found.");
      }
    } catch (err) {
      setError("Failed to fetch symptom data. Please check the Patient ID and try again.");
      console.error("Error fetching symptom data:", err);
    } finally {
      setLoading(false);
    }
  }, [patientId]);

  useEffect(() => {
    fetchSymptomData();
  }, [fetchSymptomData]);

  const toggleRowExpansion = (index) => {
    setExpandedRows((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  // Open the modal to add a record
  const handleAddRecord = () => {
    setEditIndex(null); // Clear the edit index for adding a new record
    setIsModalOpen(true);
  };

  // Open the modal to edit a record
  const handleEditRecord = (index) => {
    setEditIndex(index); // Set the edit index
    setIsModalOpen(true);
  };

  // Close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditIndex(null); // Reset the edit index when modal closes
  };

  const handleDeleteRecord = async (index) => {
    try {
      const record = symptomData[index];
      await axiosClient.delete(`/doctors/patients/${patientId}/symptoms/${record.symptomCode}`);
      fetchSymptomData(); // Refresh the data
    } catch (err) {
      console.error("Error deleting symptom data:", err);
    }
  };

  return (
    <div className="w-full bg-white shadow-lg rounded-lg p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-left ml-4">Patient Symptom Data</h1>
        <p className="font-semibold pr-4">Patient ID : {patientId}</p>
      </div>

      {/* Add Record button */}
      <div className="mb-4 flex justify-end">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleAddRecord}
        >
          Add Record
        </button>
      </div>

      {/* Loading indicator */}
      {loading && <p className="text-blue-500 text-center">Loading data...</p>}

      {/* Error message */}
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

      {/* Display symptom data */}
      {symptomData.length > 0 && (
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
                {symptomData.map((symptom, index) => (
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
                          <div className="flex">
                            <div className="w-1/2 pr-4">
                              {/* Add the symptom details */}
                              <ul>
                                <li>
                                  Bilateral Lower Limb Swelling:{" "}
                                  <span
                                    className={
                                      symptom.bilateralLowerLimbSwelling
                                        ? "text-red-500"
                                        : "text-green-500"
                                    }
                                  >
                                    {symptom.bilateralLowerLimbSwelling ? "Yes" : "No"}
                                  </span>
                                </li>
                                <li>
                                  Dyspnoea:{" "}
                                  <span
                                    className={
                                      symptom.dyspnoea ? "text-red-500" : "text-green-500"
                                    }
                                  >
                                    {symptom.dyspnoea ? "Yes" : "No"}
                                  </span>
                                </li>
                                <li>
                                  Orthopnoea:{" "}
                                  <span
                                    className={
                                      symptom.orthopnoea ? "text-red-500" : "text-green-500"
                                    }
                                  >
                                    {symptom.orthopnoea ? "Yes" : "No"}
                                  </span>
                                </li>
                              </ul>
                            </div>
                            <div className="w-1/2">
                              <ul>
                                <li>
                                  Paroxysmal Nocturnal Dyspnoea:{" "}
                                  <span
                                    className={
                                      symptom.paroxysmalNocturnalDyspnoea
                                        ? "text-red-500"
                                        : "text-green-500"
                                    }
                                  >
                                    {symptom.paroxysmalNocturnalDyspnoea ? "Yes" : "No"}
                                  </span>
                                </li>
                                <li>
                                  Fatigue:{" "}
                                  <span
                                    className={
                                      symptom.fatigue ? "text-red-500" : "text-green-500"
                                    }
                                  >
                                    {symptom.fatigue ? "Yes" : "No"}
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/* Update and Delete buttons */}
                          <div className="flex justify-end mt-4 space-x-2">
                            <button
                              className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded"
                              onClick={() => handleEditRecord(index)}
                            >
                              Update
                            </button>
                            <button
                              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
                              onClick={() => handleDeleteRecord(index)}
                            >
                              Delete
                            </button>
                          </div>
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
      {!symptomData.length && !loading && !error && (
        <p className="text-gray-600 text-center">No symptom data available.</p>
      )}

      {/* Modal for adding/updating records */}
      <Modal isVisible={isModalOpen} onClose={handleCloseModal}>
        {editIndex === null ? (
          <PatientSymptomsSubmission patientId={patientId} onClose={handleCloseModal} />
        ) : (
          <SymptomsUpdate
            examination={symptomData[editIndex]}
            onClose={handleCloseModal}
          />
        )}
      </Modal>
      <ClinicalDataChart patientId={patientId} />
    </div>
  );
};

export default SymptomDataById;
