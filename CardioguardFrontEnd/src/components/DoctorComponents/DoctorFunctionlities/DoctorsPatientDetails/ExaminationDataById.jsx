// import React, { useState, useEffect, useCallback } from "react";
// import { useParams } from "react-router-dom";
// import axiosClient from "../../../../../axios-client";

// const ExaminationDataById = () => {
//   const { patientId } = useParams();
//   const [clinicalData, setClinicalData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [expandedRows, setExpandedRows] = useState({}); // State to track expanded rows

//   // Use useCallback to memoize fetchClinicalData
//   const fetchClinicalData = useCallback(async () => {
//     try {
//       setLoading(true);
//       setError(null);
//       setClinicalData([]);

//       // Fetch clinical data
//       const clinicalDataResponse = await axiosClient.get(
//         `/doctors/${patientId}/examines`
//       );

//       if (clinicalDataResponse.data) {
//         // Sort the data by date in descending order (newest first)
//         const sortedData = clinicalDataResponse.data.sort(
//           (a, b) => new Date(b.examinationDate) - new Date(a.examinationDate)
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
//   }, [patientId]); // Add patientId as a dependency

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
//         <h1 className="text-2xl font-bold text-left ml-4">Examination Data</h1>
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
//                   <th className="px-4 py-2">Examination Date</th>
//                   <th className="px-4 py-2">Details</th>
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
//                       <td className="px-4 py-2">
//                         {data.examinationDate
//                           ? new Date(data.examinationDate).toLocaleDateString()
//                           : "N/A"}
//                       </td>
//                       <td className="px-4 py-2">
//                         {expandedRows[index] ? "Hide Details" : "Show Details"}
//                       </td>
//                     </tr>

//                     {/* Expanded row details */}
//                     {expandedRows[index] && (
//                       <tr className="bg-gray-100 border-b">
//                         <td colSpan="2" className="px-4 py-2">
//                           <ul>
//                             <li>
//                               Tachycardia at Rest:{" "}
//                               <span
//                                 className={`${
//                                   data.tachycardiaAtrest
//                                     ? "text-red-500"
//                                     : "text-green-500"
//                                 }`}
//                               >
//                                 {data.tachycardiaAtrest ? "Yes" : "No"}
//                               </span>
//                             </li>
//                             <li>
//                               Hypotension:{" "}
//                               <span
//                                 className={`${
//                                   data.hypotention
//                                     ? "text-red-500"
//                                     : "text-green-500"
//                                 }`}
//                               >
//                                 {data.hypotention ? "Yes" : "No"}
//                               </span>
//                             </li>
//                             <li>
//                               Raised Jugular Venous Pressure:{" "}
//                               <span
//                                 className={`${
//                                   data.raisedJugularVenousPressure
//                                     ? "text-red-500"
//                                     : "text-green-500"
//                                 }`}
//                               >
//                                 {data.raisedJugularVenousPressure
//                                   ? "Yes"
//                                   : "No"}
//                               </span>
//                             </li>
//                             <li>
//                               Displaced Apex Beat:{" "}
//                               <span
//                                 className={`${
//                                   data.displacedApexBeat
//                                     ? "text-red-500"
//                                     : "text-green-500"
//                                 }`}
//                               >
//                                 {data.displacedApexBeat ? "Yes" : "No"}
//                               </span>
//                             </li>
//                             <li>
//                               Right Ventricular Heave:{" "}
//                               <span
//                                 className={`${
//                                   data.rightVenticularHeave
//                                     ? "text-red-500"
//                                     : "text-green-500"
//                                 }`}
//                               >
//                                 {data.rightVenticularHeave ? "Yes" : "No"}
//                               </span>
//                             </li>
//                             <li>
//                               Pleural Effusion:{" "}
//                               <span
//                                 className={`${
//                                   data.pleuralEffusion
//                                     ? "text-red-500"
//                                     : "text-green-500"
//                                 }`}
//                               >
//                                 {data.pleuralEffusion ? "Yes" : "No"}
//                               </span>
//                             </li>
//                             <li>
//                               Hepatomegaly:{" "}
//                               <span
//                                 className={`${
//                                   data.hepatomegaly
//                                     ? "text-red-500"
//                                     : "text-green-500"
//                                 }`}
//                               >
//                                 {data.hepatomegaly ? "Yes" : "No"}
//                               </span>
//                             </li>
//                             <li>
//                               Gallop Rhythm on Auscultation:{" "}
//                               <span
//                                 className={`${
//                                   data.gallopRhythmOnAuscultation
//                                     ? "text-red-500"
//                                     : "text-green-500"
//                                 }`}
//                               >
//                                 {data.gallopRhythmOnAuscultation ? "Yes" : "No"}
//                               </span>
//                             </li>
//                             <li>
//                               Pedal and Ankle Oedema:{" "}
//                               <span
//                                 className={`${
//                                   data.pedalAndAnkleOedema
//                                     ? "text-red-500"
//                                     : "text-green-500"
//                                 }`}
//                               >
//                                 {data.pedalAndAnkleOedema ? "Yes" : "No"}
//                               </span>
//                             </li>
//                             <li>
//                               Tachypnoea:{" "}
//                               <span
//                                 className={`${
//                                   data.tachypnoea
//                                     ? "text-red-500"
//                                     : "text-green-500"
//                                 }`}
//                               >
//                                 {data.tachypnoea ? "Yes" : "No"}
//                               </span>
//                             </li>
//                             <li>
//                               Ascites:{" "}
//                               <span
//                                 className={`${
//                                   data.ascites
//                                     ? "text-red-500"
//                                     : "text-green-500"
//                                 }`}
//                               >
//                                 {data.ascites ? "Yes" : "No"}
//                               </span>
//                             </li>
//                           </ul>
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
//         <p className="text-gray-600 text-center">
//           No examination data available.
//         </p>
//       )}
//     </div>
//   );
// };

// export default ExaminationDataById;





import React, { useState, useEffect, useCallback } from "react";
import axiosClient from "../../../../../axios-client";
import { useParams } from "react-router-dom";
import Modal from "./Modal"; // Adjust the path to your modal component
import DoctorExaminationUpdate from "./UpdateDoctorExamination"; // Import the update component
import DoctorExaminationSubmission from "./DoctorExaminationSubmission"; // Import the add record component

const ExaminationDataById = () => {
  const { patientId } = useParams();
  const [examinationData, setExaminationData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [expandedRows, setExpandedRows] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false); // Control modal visibility
  const [editIndex, setEditIndex] = useState(null); // Track the index of the row being edited

  // Fetch examination data
  const fetchExaminationData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      setExaminationData([]);

      const examinationDataResponse = await axiosClient.get(
        `/doctors/${patientId}/examines`
      );

      if (examinationDataResponse.data && examinationDataResponse.data.length > 0) {
        const sortedData = examinationDataResponse.data.sort(
          (a, b) => new Date(b.examinationDate) - new Date(a.examinationDate)
        );
        setExaminationData(sortedData);
      } else {
        setError("No examination data found.");
      }
    } catch (err) {
      setError("Failed to fetch examination data. Please check the Patient ID and try again.");
      console.error("Error fetching examination data:", err);
    } finally {
      setLoading(false);
    }
  }, [patientId]);

  useEffect(() => {
    fetchExaminationData();
  }, [fetchExaminationData]);

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
      const record = examinationData[index];
      await axiosClient.delete(`/doctors/${patientId}/examines/${record.examinationCode}`);
      fetchExaminationData(); // Refresh the data
    } catch (err) {
      console.error("Error deleting examination data:", err);
    }
  };

  return (
    <div className="w-full bg-white shadow-lg rounded-lg p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-left ml-4">Patient Examination Data</h1>
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

      {/* Display examination data */}
      {examinationData.length > 0 && (
        <div className="bg-gray-50 rounded-md p-4">
          <div className="overflow-y-auto" style={{ maxHeight: "500px" }}>
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2">Date (M/D/Y)</th>
                  <th className="px-4 py-2 w-2/3">Details</th>
                </tr>
              </thead>
              <tbody>
                {examinationData.map((data, index) => (
                  <React.Fragment key={index}>
                    {/* Main row */}
                    <tr
                      className="bg-white border-b cursor-pointer"
                      onClick={() => toggleRowExpansion(index)}
                    >
                      <td className="px-4 py-2 align-top">
                        {new Date(data.examinationDate).toLocaleDateString()}
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
                              {/* Add the examination details */}
                              <ul>
                                <li>
                                  Tachycardia at Rest:{" "}
                                  <span className={data.tachycardiaAtRest ? "text-red-500" : "text-green-500"}>
                                    {data.tachycardiaAtRest ? "Yes" : "No"}
                                  </span>
                                </li>
                                <li>
                                  Hypotension:{" "}
                                  <span className={data.hypotension ? "text-red-500" : "text-green-500"}>
                                    {data.hypotension ? "Yes" : "No"}
                                  </span>
                                </li>
                                <li>
                                  Raised Jugular Venous Pressure:{" "}
                                  <span className={data.raisedJugularVenousPressure ? "text-red-500" : "text-green-500"}>
                                    {data.raisedJugularVenousPressure ? "Yes" : "No"}
                                  </span>
                                </li>
                                <li>
                                  Displaced Apex Beat:{" "}
                                  <span className={data.displacedApexBeat ? "text-red-500" : "text-green-500"}>
                                    {data.displacedApexBeat ? "Yes" : "No"}
                                  </span>
                                </li>
                              </ul>
                            </div>
                            <div className="w-1/2">
                              <ul>
                                <li>
                                  Pedal and Ankle Oedema:{" "}
                                  <span className={data.pedalAndAnkleOedema ? "text-red-500" : "text-green-500"}>
                                    {data.pedalAndAnkleOedema ? "Yes" : "No"}
                                  </span>
                                </li>
                                <li>
                                  Gallop Rhythm:{" "}
                                  <span className={data.gallopRhythm ? "text-red-500" : "text-green-500"}>
                                    {data.gallopRhythm ? "Yes" : "No"}
                                  </span>
                                </li>
                                <li>
                                  Tachypnoea:{" "}
                                  <span className={data.tachypnoea ? "text-red-500" : "text-green-500"}>
                                    {data.tachypnoea ? "Yes" : "No"}
                                  </span>
                                </li>
                                <li>
                                  Ascites:{" "}
                                  <span className={data.ascites ? "text-red-500" : "text-green-500"}>
                                    {data.ascites ? "Yes" : "No"}
                                  </span>
                                </li>
                              </ul>
                            </div>
                            {/* Other columns */}
                          </div>
                          {/* Update and Delete buttons */}
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

      {/* Modal for adding/updating records */}
      <Modal isVisible={isModalOpen} onClose={handleCloseModal}>
        {editIndex !== null ? (
          <DoctorExaminationUpdate
            patientId={patientId}
            record={examinationData[editIndex]}
            onClose={handleCloseModal}
            refreshData={fetchExaminationData}
          />
        ) : (
          <DoctorExaminationSubmission
            patientId={patientId}
            onClose={handleCloseModal}
            refreshData={fetchExaminationData}
          />
        )}
      </Modal>
    </div>
  );
};

export default ExaminationDataById;



