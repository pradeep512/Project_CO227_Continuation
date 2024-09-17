// import React, { useState, useEffect, useCallback } from "react";
// import axiosClient from "../../../../../axios-client";
// import { useParams } from "react-router-dom";

// const ClinicalDataById = () => {
//   const { patientId } = useParams();
//   const [clinicalData, setClinicalData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [expandedRows, setExpandedRows] = useState({}); // State to track expanded rows

//   // Wrap fetchClinicalData in useCallback
//   const fetchClinicalData = useCallback(async () => {
//     try {
//       setLoading(true);
//       setError(null);
//       setClinicalData([]);

//       // Fetch clinical data
//       const clinicalDataResponse = await axiosClient.get(
//         `/doctors/patients/${patientId}/clinical-data`
//       );

//       console.log(clinicalDataResponse.data); // To check the structure

//       if (clinicalDataResponse.data && clinicalDataResponse.data.length > 0) {
//         // Sort the clinical data by clinicalDate in descending order
//         const sortedData = clinicalDataResponse.data.sort(
//           (a, b) => new Date(b.clinicalDate) - new Date(a.clinicalDate)
//         );
//         setClinicalData(sortedData);
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
//   }, [fetchClinicalData]); // Include fetchClinicalData in the dependency array

//   // Toggle the expanded state of a row
//   const toggleRowExpansion = (index) => {
//     setExpandedRows((prevState) => ({
//       ...prevState,
//       [index]: !prevState[index], // Toggle the state
//     }));
//   };

//   return (
//     <div className="w-full bg-white shadow-lg rounded-lg p-8">
//       <div className="flex items-center justify-between mb-6">
//         <h1 className="text-2xl font-bold text-left ml-4">
//           Patient Clinical Data
//         </h1>
//         <p className="font-semibold pr-4">Patient ID : {patientId}</p>
//       </div>

//       {/* Error message */}
//       {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

//       {/* Display clinical data */}
//       {clinicalData.length > 0 && (
//         <div className="bg-gray-50 rounded-md p-4">
//           <div className="overflow-y-auto" style={{ maxHeight: "500px" }}>
//             <table className="min-w-full table-auto">
//               <thead>
//                 <tr className="bg-gray-200">
//                   <th className="px-4 py-2">Date(M/D/Y)</th>
//                   <th className="px-4 py-2 w-2/3">Details</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {clinicalData.map((data, index) => (
//                   <React.Fragment key={index}>
//                     {/* Main row */}
//                     <tr
//                       className="bg-white border-b cursor-pointer"
//                       onClick={() => toggleRowExpansion(index)} // Toggle on click
//                     >
//                       <td className="px-4 py-2 align-top">
//                         {new Date(data.clinicalDate).toLocaleDateString()}
//                       </td>
//                       <td className="px-4 py-2 text-gray-700">
//                         {expandedRows[index] ? "Hide Details" : "Show Details"}
//                       </td>
//                     </tr>

//                     {/* Expanded row details */}
//                     {expandedRows[index] && (
//                       <tr className="bg-gray-100 border-b">
//                         <td colSpan="2" className="px-4 py-2">
//                           <div className="flex">
//                             <div className="w-1/2 pr-4">
//                               <ul>
//                                 <li>
//                                   Diagnosis of Heart Disease:{" "}
//                                   <span
//                                     className={`${
//                                       data.diagnosisOfHeartDisease
//                                         ? "text-red-500"
//                                         : "text-green-500"
//                                     }`}
//                                   >
//                                     {data.diagnosisOfHeartDisease
//                                       ? "Yes"
//                                       : "No"}
//                                   </span>
//                                 </li>
//                                 <li>
//                                   Presence of Anemia:{" "}
//                                   <span
//                                     className={`${
//                                       data.presenceOfAnemia
//                                         ? "text-red-500"
//                                         : "text-green-500"
//                                     }`}
//                                   >
//                                     {data.presenceOfAnemia ? "Yes" : "No"}
//                                   </span>
//                                 </li>
//                                 <li>
//                                   Creatinine Phosphokinase:{" "}
//                                   <span className="font-semibold">
//                                     {data.creatininePhosphokinase}
//                                   </span>
//                                 </li>
//                                 <li>
//                                   Diabetes:{" "}
//                                   <span
//                                     className={`${
//                                       data.diabetes
//                                         ? "text-red-500"
//                                         : "text-green-500"
//                                     }`}
//                                   >
//                                     {data.diabetes ? "Yes" : "No"}
//                                   </span>
//                                 </li>
//                                 <li>
//                                   Ejection Fraction:{" "}
//                                   <span className="font-semibold">
//                                     {data.ejectionFraction}%
//                                   </span>
//                                 </li>
//                               </ul>
//                             </div>
//                             <div className="w-1/2">
//                               <ul>
//                                 <li>
//                                   Blood Pressure:{" "}
//                                   <span className="font-semibold">
//                                     {data.bloodPressure}
//                                   </span>
//                                 </li>
//                                 <li>
//                                   Platelets:{" "}
//                                   <span className="font-semibold">
//                                     {data.platelets}
//                                   </span>
//                                 </li>
//                                 <li>
//                                   Serum Creatinine:{" "}
//                                   <span className="font-semibold">
//                                     {data.serumCreatinine}
//                                   </span>
//                                 </li>
//                                 <li>
//                                   Serum Sodium:{" "}
//                                   <span className="font-semibold">
//                                     {data.serumSodium}
//                                   </span>
//                                 </li>
//                                 <li>
//                                   Smoking:{" "}
//                                   <span
//                                     className={`${
//                                       data.smoking
//                                         ? "text-red-500"
//                                         : "text-green-500"
//                                     }`}
//                                   >
//                                     {data.smoking ? "Yes" : "No"}
//                                   </span>
//                                 </li>
//                                 <li>
//                                   Follow-Up Period (Days):{" "}
//                                   <span className="font-semibold">
//                                     {data.followUpPeriodDays}
//                                   </span>
//                                 </li>
//                               </ul>
//                             </div>
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
//       {!clinicalData.length && !loading && !error && (
//         <p className="text-gray-600 text-center">No clinical data available.</p>
//       )}
//     </div>
//   );
// };

// export default ClinicalDataById;





// import React, { useState, useEffect, useCallback } from "react";
// import axiosClient from "../../../../../axios-client";
// import { useParams } from "react-router-dom";
// import Modal from "./Modal"; // Import the Modal component
// import PatientClinicalDataSubmission from "./PatientClinicalDataSubmission"; // Adjust the import path

// const ClinicalDataById = () => {
//   const { patientId } = useParams();
//   const [clinicalData, setClinicalData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [expandedRows, setExpandedRows] = useState({});
//   const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal

//   // Fetch clinical data
//   const fetchClinicalData = useCallback(async () => {
//     try {
//       setLoading(true);
//       setError(null);
//       setClinicalData([]);

//       const clinicalDataResponse = await axiosClient.get(
//         `/doctors/patients/${patientId}/clinical-data`
//       );

//       if (clinicalDataResponse.data && clinicalDataResponse.data.length > 0) {
//         const sortedData = clinicalDataResponse.data.sort(
//           (a, b) => new Date(b.clinicalDate) - new Date(a.clinicalDate)
//         );
//         setClinicalData(sortedData);
//       } else {
//         setError("No clinical data found.");
//       }
//     } catch (err) {
//       setError("Failed to fetch clinical data. Please check the Patient ID and try again.");
//       console.error("Error fetching clinical data:", err);
//     } finally {
//       setLoading(false);
//     }
//   }, [patientId]);

//   useEffect(() => {
//     fetchClinicalData();
//   }, [fetchClinicalData]);

//   // Toggle the expanded state of a row
//   const toggleRowExpansion = (index) => {
//     setExpandedRows((prevState) => ({
//       ...prevState,
//       [index]: !prevState[index], // Toggle the state
//     }));
//   };

//   // Add Record button handler - Show the modal
//   const handleAddRecord = () => {
//     setIsModalOpen(true);
//   };

//   // Close the modal
//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="w-full bg-white shadow-lg rounded-lg p-8 relative">
//       <div className="flex items-center justify-between mb-6">
//         <h1 className="text-2xl font-bold text-left ml-4">
//           Patient Clinical Data
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

//       {/* Display clinical data */}
//       {clinicalData.length > 0 && (
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
//                 {clinicalData.map((data, index) => (
//                   <React.Fragment key={index}>
//                     {/* Main row */}
//                     <tr
//                       className="bg-white border-b cursor-pointer"
//                       onClick={() => toggleRowExpansion(index)} // Toggle on click
//                     >
//                       <td className="px-4 py-2 align-top">
//                         {new Date(data.clinicalDate).toLocaleDateString()}
//                       </td>
//                       <td className="px-4 py-2 text-gray-700">
//                         {expandedRows[index] ? "Hide Details" : "Show Details"}
//                       </td>
//                       <td className="px-4 py-2 text-gray-700">
//                         {data.doctorRecommendation || "N/A"}
//                       </td>
//                     </tr>

//                     {/* Expanded row details */}
//                     {expandedRows[index] && (
//                       <tr className="bg-gray-100 border-b">
//                         <td colSpan="3" className="px-4 py-2">
//                           <div className="flex">
//                             <div className="w-1/2 pr-4">
//                               <ul>
//                                 <li>
//                                   Bilateral Lower Limb Swelling:{" "}
//                                   <span
//                                     className={`${
//                                       data.bilateralLowerLimbSwelling
//                                         ? "text-red-500"
//                                         : "text-green-500"
//                                     }`}
//                                   >
//                                     {data.bilateralLowerLimbSwelling
//                                       ? "Yes"
//                                       : "No"}
//                                   </span>
//                                 </li>
//                                 <li>
//                                   Dyspnoea:{" "}
//                                   <span
//                                     className={`${
//                                       data.dyspnoea
//                                         ? "text-red-500"
//                                         : "text-green-500"
//                                     }`}
//                                   >
//                                     {data.dyspnoea ? "Yes" : "No"}
//                                   </span>
//                                 </li>
//                                 <li>
//                                   Orthopnoea:{" "}
//                                   <span
//                                     className={`${
//                                       data.orthopnoea
//                                         ? "text-red-500"
//                                         : "text-green-500"
//                                     }`}
//                                   >
//                                     {data.orthopnoea ? "Yes" : "No"}
//                                   </span>
//                                 </li>
//                                 <li>
//                                   Paroxysmal Nocturnal Dyspnoea:{" "}
//                                   <span
//                                     className={`${
//                                       data.paroxysmalNocturnalDyspnoea
//                                         ? "text-red-500"
//                                         : "text-green-500"
//                                     }`}
//                                   >
//                                     {data.paroxysmalNocturnalDyspnoea
//                                       ? "Yes"
//                                       : "No"}
//                                   </span>
//                                 </li>
//                                 <li>
//                                   Fatigue:{" "}
//                                   <span
//                                     className={`${
//                                       data.fatigue
//                                         ? "text-red-500"
//                                         : "text-green-500"
//                                     }`}
//                                   >
//                                     {data.fatigue ? "Yes" : "No"}
//                                   </span>
//                                 </li>
//                               </ul>
//                             </div>
//                           </div>
//                           {/* Update and Delete buttons */}
//                           <div className="flex justify-end mt-4 space-x-2">
//                             <button
//                               className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded"
//                               onClick={() => handleUpdate(data.id)}
//                             >
//                               Update
//                             </button>
//                             <button
//                               className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
//                               onClick={() => handleDelete(data.id)}
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
//       {!clinicalData.length && !loading && !error && (
//         <p className="text-gray-600 text-center">No clinical data available.</p>
//       )}

//       {/* Add Record Modal */}
//       <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
//         {/* Render the PatientClinicalDataSubmission component inside the modal */}
//         <PatientClinicalDataSubmission patientId={patientId} />
//       </Modal>
//     </div>
//   );
// };

// export default ClinicalDataById;














// import React, { useState, useEffect, useCallback } from "react";
// import axiosClient from "../../../../../axios-client";
// import { useParams } from "react-router-dom";
// import Modal from "./Modal"; // Import the Modal component

// const ClinicalDataById = () => {
//   const { patientId } = useParams();
//   const [clinicalData, setClinicalData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [expandedRows, setExpandedRows] = useState({}); // State to track expanded rows
//   const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal

//   // Fetch clinical data
//   const fetchClinicalData = useCallback(async () => {
//     try {
//       setLoading(true);
//       setError(null);
//       setClinicalData([]);

//       const clinicalDataResponse = await axiosClient.get(
//         `/doctors/patients/${patientId}/clinical-data`
//       );

//       if (clinicalDataResponse.data && clinicalDataResponse.data.length > 0) {
//         // Sort the clinical data by clinicalDate in descending order
//         const sortedData = clinicalDataResponse.data.sort(
//           (a, b) => new Date(b.clinicalDate) - new Date(a.clinicalDate)
//         );
//         setClinicalData(sortedData);
//       } else {
//         setError("No clinical data found.");
//       }
//     } catch (err) {
//       setError("Failed to fetch clinical data. Please check the Patient ID and try again.");
//       console.error("Error fetching clinical data:", err);
//     } finally {
//       setLoading(false);
//     }
//   }, [patientId]);

//   useEffect(() => {
//     fetchClinicalData();
//   }, [fetchClinicalData]);

//   // Toggle the expanded state of a row
//   const toggleRowExpansion = (index) => {
//     setExpandedRows((prevState) => ({
//       ...prevState,
//       [index]: !prevState[index],
//     }));
//   };

//   // Add Record button handler - Show the modal
//   const handleAddRecord = () => {
//     setIsModalOpen(true);
//   };

//   // Close the modal
//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   // Handle form submission in the modal
//   const handleAddRecordSubmit = () => {
//     // Logic to handle adding a new record
//     console.log("Add record form submitted.");
//     setIsModalOpen(false); // Close the modal
//     // Refresh data if needed
//     fetchClinicalData();
//   };

//   // Delete button handler
//   const handleDelete = async (clinicalDataId) => {
//     try {
//       console.log(`Attempting to delete record with ID: ${clinicalDataId}`);

//       // Perform the delete operation
//       await axiosClient.delete(
//         `/doctors/delete/clinical-data/patient/${patientId}/${clinicalDataId}`
//       );
//       console.log(`Deleted record with ID: ${clinicalDataId}`);

//       // Refresh the data
//       fetchClinicalData();
//     } catch (err) {
//       console.error("Error deleting clinical data:", err);
//     }
//   };

//   return (
//     <div className={`w-full bg-white shadow-lg rounded-lg p-8 ${isModalOpen ? 'blur-sm' : ''}`}>
//       <div className="flex items-center justify-between mb-6">
//         <h1 className="text-2xl font-bold text-left ml-4">
//           Patient Clinical Data
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

//       {/* Display clinical data */}
//       {clinicalData.length > 0 && (
//         <div className="bg-gray-50 rounded-md p-4">
//           <div className="overflow-y-auto" style={{ maxHeight: "500px" }}>
//             <table className="min-w-full table-auto">
//               <thead>
//                 <tr className="bg-gray-200">
//                   <th className="px-4 py-2">Date(M/D/Y)</th>
//                   <th className="px-4 py-2 w-2/3">Details</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {clinicalData.map((data, index) => (
//                   <React.Fragment key={index}>
//                     {/* Main row */}
//                     <tr
//                       className="bg-white border-b cursor-pointer"
//                       onClick={() => toggleRowExpansion(index)}
//                     >
//                       <td className="px-4 py-2 align-top">
//                         {new Date(data.clinicalDate).toLocaleDateString()}
//                       </td>
//                       <td className="px-4 py-2 text-gray-700">
//                         {expandedRows[index] ? "Hide Details" : "Show Details"}
//                       </td>
//                     </tr>

//                     {/* Expanded row details */}
//                     {expandedRows[index] && (
//                       <tr className="bg-gray-100 border-b">
//                         <td colSpan="2" className="px-4 py-2">
//                           <div className="flex">
//                             {/* Details */}
//                           </div>
//                           {/* Update and Delete buttons */}
//                           <div className="flex justify-end mt-4 space-x-2">
//                             <button
//                               className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded"
//                               onClick={() => handleUpdate(data.clinicalDataId)}
//                             >
//                               Update
//                             </button>
//                             <button
//                               className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
//                               onClick={() => handleDelete(data.clinicalDataId)} // Use the correct identifier
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
//       {!clinicalData.length && !loading && !error && (
//         <p className="text-gray-600 text-center">No clinical data available.</p>
//       )}

//       {/* Add Record Modal */}
//       <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
//         <h2 className="text-lg font-bold mb-4">Add New Clinical Record</h2>
//         {/* Add form fields for new record here */}
//         <form onSubmit={handleAddRecordSubmit}>
//           {/* Add your form inputs here */}
//           <div className="mb-4">
//             <label className="block text-gray-700">Record Details</label>
//             <input
//               type="text"
//               className="w-full border rounded px-3 py-2 mt-1"
//               placeholder="Enter details"
//             />
//           </div>
//           <div className="flex justify-end">
//             <button
//               type="button"
//               className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
//               onClick={handleCloseModal}
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//             >
//               Save
//             </button>
//           </div>
//         </form>
//       </Modal>
//     </div>
//   );
// };

// export default ClinicalDataById;






// import React, { useState, useEffect, useCallback } from "react";
// import axiosClient from "../../../../../axios-client";
// import { useParams } from "react-router-dom";
// import Modal from "./Modal"; // Adjust the path to your modal component
// import PatientClinicalDataSubmission from ".//PatientClinicalDataSubmission"; // Adjust the path accordingly

// const ClinicalDataById = () => {
//   const { patientId } = useParams();
//   const [clinicalData, setClinicalData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [expandedRows, setExpandedRows] = useState({});
//   const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

//   // Fetch clinical data
//   const fetchClinicalData = useCallback(async () => {
//     try {
//       setLoading(true);
//       setError(null);
//       setClinicalData([]);

//       const clinicalDataResponse = await axiosClient.get(
//         `/doctors/patients/${patientId}/clinical-data`
//       );

//       if (clinicalDataResponse.data && clinicalDataResponse.data.length > 0) {
//         // Sort the clinical data by clinicalDate in descending order
//         const sortedData = clinicalDataResponse.data.sort(
//           (a, b) => new Date(b.clinicalDate) - new Date(a.clinicalDate)
//         );
//         setClinicalData(sortedData);
//       } else {
//         setError("No clinical data found.");
//       }
//     } catch (err) {
//       setError("Failed to fetch clinical data. Please check the Patient ID and try again.");
//       console.error("Error fetching clinical data:", err);
//     } finally {
//       setLoading(false);
//     }
//   }, [patientId]);

//   useEffect(() => {
//     fetchClinicalData();
//   }, [fetchClinicalData]);

//   // Toggle the expanded state of a row
//   const toggleRowExpansion = (index) => {
//     setExpandedRows((prevState) => ({
//       ...prevState,
//       [index]: !prevState[index],
//     }));
//   };

//   // Open the modal to add a record
//   const handleAddRecord = () => {
//     setIsModalOpen(true);
//   };

//   // Close the modal
//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="w-full bg-white shadow-lg rounded-lg p-8">
//       <div className="flex items-center justify-between mb-6">
//         <h1 className="text-2xl font-bold text-left ml-4">Patient Clinical Data</h1>
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

//       {/* Display clinical data */}
//       {/* ... Existing clinical data table code ... */}

//       {/* Modal for Adding Clinical Data */}
//       <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
//         <PatientClinicalDataSubmission patientId={patientId} onClose={handleCloseModal} />
//       </Modal>
//     </div>
//   );
// };

// export default ClinicalDataById;





import React, { useState, useEffect, useCallback } from "react";
import axiosClient from "../../../../../axios-client";
import { useParams } from "react-router-dom";
import Modal from "./Modal"; // Adjust the path to your modal component
import PatientClinicalDataSubmission from "./PatientClinicalDataSubmission"; // Adjust the path accordingly

const ClinicalDataById = () => {
  const { patientId } = useParams();
  const [clinicalData, setClinicalData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [expandedRows, setExpandedRows] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [editIndex, setEditIndex] = useState(null); // Track the index of the row being edited

  // Fetch clinical data
  const fetchClinicalData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      setClinicalData([]);

      const clinicalDataResponse = await axiosClient.get(
        `/doctors/patients/${patientId}/clinical-data`
      );

      if (clinicalDataResponse.data && clinicalDataResponse.data.length > 0) {
        // Sort the clinical data by clinicalDate in descending order
        const sortedData = clinicalDataResponse.data.sort(
          (a, b) => new Date(b.clinicalDate) - new Date(a.clinicalDate)
        );
        setClinicalData(sortedData);
      } else {
        setError("No clinical data found.");
      }
    } catch (err) {
      setError("Failed to fetch clinical data. Please check the Patient ID and try again.");
      console.error("Error fetching clinical data:", err);
    } finally {
      setLoading(false);
    }
  }, [patientId]);

  useEffect(() => {
    fetchClinicalData();
  }, [fetchClinicalData]);

  // Toggle the expanded state of a row
  const toggleRowExpansion = (index) => {
    setExpandedRows((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  // Open the modal to add a record
  const handleAddRecord = () => {
    setEditIndex(null); // Clear the edit index
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
  };

  // Delete a record
  const handleDeleteRecord = async (index) => {
    try {
      const record = clinicalData[index];
      await axiosClient.delete(`/doctors/patients/${patientId}/clinical-data/${record.id}`); // Adjust the API endpoint as necessary
      // Refresh the data
      fetchClinicalData();
    } catch (err) {
      console.error("Error deleting clinical data:", err);
    }
  };

  return (
    <div className="w-full bg-white shadow-lg rounded-lg p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-left ml-4">Patient Clinical Data</h1>
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

      {/* Error message */}
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

      {/* Display clinical data */}
      {clinicalData.length > 0 && (
        <div className="bg-gray-50 rounded-md p-4">
          <div className="overflow-y-auto" style={{ maxHeight: "500px" }}>
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2">Date(M/D/Y)</th>
                  <th className="px-4 py-2 w-2/3">Details</th>
                </tr>
              </thead>
              <tbody>
                {clinicalData.map((data, index) => (
                  <React.Fragment key={index}>
                    {/* Main row */}
                    <tr
                      className="bg-white border-b cursor-pointer"
                      onClick={() => toggleRowExpansion(index)} // Toggle on click
                    >
                      <td className="px-4 py-2 align-top">
                        {new Date(data.clinicalDate).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-2 text-gray-700">
                        {expandedRows[index] ? "Hide Details" : "Show Details"}
                      </td>
                    </tr>

                    {/* Expanded row details */}
                    {expandedRows[index] && (
                      <tr className="bg-gray-100 border-b">
                        <td colSpan="2" className="px-4 py-2">
                          <div className="flex">
                            <div className="w-1/2 pr-4">
                              <ul>
                                <li>
                                  Diagnosis of Heart Disease:{" "}
                                  <span
                                    className={
                                      data.diagnosisOfHeartDisease
                                        ? "text-red-500"
                                        : "text-green-500"
                                    }
                                  >
                                    {data.diagnosisOfHeartDisease ? "Yes" : "No"}
                                  </span>
                                </li>
                                <li>
                                  Presence of Anemia:{" "}
                                  <span
                                    className={
                                      data.presenceOfAnemia
                                        ? "text-red-500"
                                        : "text-green-500"
                                    }
                                  >
                                    {data.presenceOfAnemia ? "Yes" : "No"}
                                  </span>
                                </li>
                                <li>
                                  Creatinine Phosphokinase:{" "}
                                  <span className="font-semibold">
                                    {data.creatininePhosphokinase}
                                  </span>
                                </li>
                                <li>
                                  Diabetes:{" "}
                                  <span
                                    className={
                                      data.diabetes
                                        ? "text-red-500"
                                        : "text-green-500"
                                    }
                                  >
                                    {data.diabetes ? "Yes" : "No"}
                                  </span>
                                </li>
                                <li>
                                  Ejection Fraction:{" "}
                                  <span className="font-semibold">
                                    {data.ejectionFraction}%
                                  </span>
                                </li>
                              </ul>
                            </div>
                            <div className="w-1/2">
                              <ul>
                                <li>
                                  Blood Pressure:{" "}
                                  <span className="font-semibold">
                                    {data.bloodPressure}
                                  </span>
                                </li>
                                <li>
                                  Platelets:{" "}
                                  <span className="font-semibold">
                                    {data.platelets}
                                  </span>
                                </li>
                                <li>
                                  Serum Creatinine:{" "}
                                  <span className="font-semibold">
                                    {data.serumCreatinine}
                                  </span>
                                </li>
                                <li>
                                  Serum Sodium:{" "}
                                  <span className="font-semibold">
                                    {data.serumSodium}
                                  </span>
                                </li>
                                <li>
                                  Smoking:{" "}
                                  <span
                                    className={
                                      data.smoking
                                        ? "text-red-500"
                                        : "text-green-500"
                                    }
                                  >
                                    {data.smoking ? "Yes" : "No"}
                                  </span>
                                </li>
                                <li>
                                  Follow-Up Period (Days):{" "}
                                  <span className="font-semibold">
                                    {data.followUpPeriodDays}
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/* Buttons for updating and deleting */}
                          <div className="mt-4 flex justify-end">
                            <button
                              className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 mr-2 rounded"
                              onClick={() => handleEditRecord(index)}
                            >
                              Update
                            </button>
                            <button
                              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
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
      {!clinicalData.length && !loading && !error && (
        <p className="text-gray-600 text-center">No clinical data available.</p>
      )}

      {/* Modal for Adding/Editing Clinical Data */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <PatientClinicalDataSubmission
          patientId={patientId}
          editData={editIndex !== null ? clinicalData[editIndex] : null}
          onClose={handleCloseModal}
        />
      </Modal>
    </div>
  );
};

export default ClinicalDataById;


