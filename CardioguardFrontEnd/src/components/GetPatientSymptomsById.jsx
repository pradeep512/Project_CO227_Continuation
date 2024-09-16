// import { useState } from "react";
// import axiosClient from "../../axios-client"; // Updated path for axiosClient

// const PatientSymptomDataById = () => {
//   const [patient, setPatient] = useState(null);
//   const [symptoms, setSymptoms] = useState([]);
//   const [patientId, setPatientId] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchPatientDataById = async () => {
//     if (!patientId) {
//       setError("Please enter a valid Patient ID");
//       return;
//     }

//     try {
//       setLoading(true);
//       setError(null);
//       setPatient(null);
//       setSymptoms([]);

//       // Fetch patient data
//       const patientResponse = await axiosClient.get(`/patients/${patientId}`);
//       // Fetch symptoms data
//       const symptomsResponse = await axiosClient.get(
//         `/doctors/patients/${patientId}/symptoms`
//       );

//       if (patientResponse.data) {
//         setPatient(patientResponse.data);
//       } else {
//         setError("No patient data found.");
//       }

//       if (symptomsResponse.data) {
//         setSymptoms(symptomsResponse.data);
//       } else {
//         setError("No symptoms data found.");
//       }
//     } catch (err) {
//       setError(
//         "Failed to fetch data. Please check the Patient ID and try again."
//       );
//       console.error("Error fetching data:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 to-orange-300">
//       <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
//         <h1 className="text-2xl font-bold text-center mb-6">
//           Patient Symptoms Data
//         </h1>

//         {/* Input field for patient ID */}
//         <input
//           type="text"
//           placeholder="Enter Patient ID"
//           value={patientId}
//           onChange={(e) => setPatientId(e.target.value)}
//           className="w-full px-4 py-2 border rounded-md mb-4"
//         />
//         {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

//         {/* Button to fetch patient data */}
//         <button
//           onClick={fetchPatientDataById}
//           disabled={loading}
//           className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all disabled:opacity-50 mb-4"
//         >
//           {loading ? (
//             <svg
//               className="animate-spin h-5 w-5 mx-auto text-white"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//             >
//               <circle
//                 className="opacity-25"
//                 cx="12"
//                 cy="12"
//                 r="10"
//                 stroke="currentColor"
//                 strokeWidth="4"
//               ></circle>
//               <path
//                 className="opacity-75"
//                 fill="currentColor"
//                 d="M4 12a8 8 0 0116 0A8 8 0 014 12z"
//               ></path>
//             </svg>
//           ) : (
//             "Get Patient Data"
//           )}
//         </button>

//         {/* Display patient data */}
//         {patient && (
//           <div className="bg-gray-50 rounded-md p-4 mb-4">
//             <h2 className="text-lg font-bold mb-2">Patient Details</h2>
//             <p>
//               <strong>Patient ID:</strong> {patient.patientId}
//             </p>
//             <p>
//               <strong>NIC:</strong> {patient.nic}
//             </p>
//             <p>
//               <strong>First Name:</strong> {patient.firstName}
//             </p>
//             <p>
//               <strong>Last Name:</strong> {patient.lastName}
//             </p>
//             <p>
//               <strong>Gender:</strong> {patient.gender}
//             </p>
//             <p>
//               <strong>Date of Birth:</strong>{" "}
//               {new Date(patient.dateOfBirth).toLocaleDateString()}
//             </p>
//             <p>
//               <strong>Email:</strong> {patient.email || "N/A"}
//             </p>
//           </div>
//         )}

//         {/* Display symptoms */}
//         {symptoms.length > 0 && (
//           <div className="bg-gray-50 rounded-md p-4">
//             <h2 className="text-lg font-bold mb-2">Symptoms Details</h2>
//             {symptoms.map((symptom, index) => (
//               <div key={index} className="mb-4">
//                 <p>
//                   <strong>Symptom Code:</strong> {symptom.symptomCode}
//                 </p>
//                 <p>
//                   <strong>Bilateral Lower Limb Swelling:</strong>{" "}
//                   {symptom.bilateralLowerLimbSwelling ? "Yes" : "No"}
//                 </p>
//                 <p>
//                   <strong>Dyspnoea:</strong> {symptom.dyspnoea ? "Yes" : "No"}
//                 </p>
//                 <p>
//                   <strong>Orthopnoea:</strong>{" "}
//                   {symptom.orthopnoea ? "Yes" : "No"}
//                 </p>
//                 <p>
//                   <strong>Paroxysmal Nocturnal Dyspnoea:</strong>{" "}
//                   {symptom.paroxysmalNocturnalDyspnoea ? "Yes" : "No"}
//                 </p>
//                 <p>
//                   <strong>Fatigue:</strong> {symptom.fatigue ? "Yes" : "No"}
//                 </p>
//                 <p>
//                   <strong>Doctor Recommendation:</strong>{" "}
//                   {symptom.doctorRecommendation}
//                 </p>
//                 <p>
//                   <strong>Symptom Date:</strong>{" "}
//                   {new Date(symptom.symptomDate).toLocaleDateString()}
//                 </p>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* No data message */}
//         {!patient && !loading && !error && (
//           <p className="text-gray-600 text-center">
//             No patient data available.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PatientSymptomDataById;





// import { useState } from "react";
// import axiosClient from "../../axios-client"; // Updated path for axiosClient

// const PatientSymptomDataById = () => {
//   const [patient, setPatient] = useState(null);
//   const [symptoms, setSymptoms] = useState([]);
//   const [patientId, setPatientId] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchPatientDataById = async () => {
//     if (!patientId) {
//       setError("Please enter a valid Patient ID");
//       return;
//     }

//     try {
//       setLoading(true);
//       setError(null);
//       setPatient(null);
//       setSymptoms([]);

//       // Fetch patient data
//       const patientResponse = await axiosClient.get(`/patients/${patientId}`);
//       // Fetch symptoms data
//       const symptomsResponse = await axiosClient.get(
//         `/doctors/patients/${patientId}/symptoms`
//       );

//       if (patientResponse.data) {
//         setPatient(patientResponse.data);
//       } else {
//         setError("No patient data found.");
//       }

//       if (symptomsResponse.data) {
//         setSymptoms(symptomsResponse.data);
//       } else {
//         setError("No symptoms data found.");
//       }
//     } catch (err) {
//       setError(
//         "Failed to fetch data. Please check the Patient ID and try again."
//       );
//       console.error("Error fetching data:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 to-orange-300">
//       <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
//         <h1 className="text-2xl font-bold text-center mb-6">Patient Symptoms Data</h1>

//         {/* Input field for patient ID */}
//         <input
//           type="text"
//           placeholder="Enter Patient ID"
//           value={patientId}
//           onChange={(e) => setPatientId(e.target.value)}
//           className="w-full px-4 py-2 border rounded-md mb-4"
//         />
//         {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

//         {/* Button to fetch patient data */}
//         <button
//           onClick={fetchPatientDataById}
//           disabled={loading}
//           className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all disabled:opacity-50 mb-4"
//         >
//           {loading ? (
//             <svg
//               className="animate-spin h-5 w-5 mx-auto text-white"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//             >
//               <circle
//                 className="opacity-25"
//                 cx="12"
//                 cy="12"
//                 r="10"
//                 stroke="currentColor"
//                 strokeWidth="4"
//               ></circle>
//               <path
//                 className="opacity-75"
//                 fill="currentColor"
//                 d="M4 12a8 8 0 0116 0A8 8 0 014 12z"
//               ></path>
//             </svg>
//           ) : (
//             "Get Patient Data"
//           )}
//         </button>

//         {/* Display patient data */}
//         {patient && (
//           <div className="mb-4">
//             <h2 className="text-lg font-bold mb-2">Patient Details</h2>
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead>
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Field</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Patient ID</td>
//                   <td className="px-6 py-4 whitespace-nowrap">{patient.patientId}</td>
//                 </tr>
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">NIC</td>
//                   <td className="px-6 py-4 whitespace-nowrap">{patient.nic}</td>
//                 </tr>
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">First Name</td>
//                   <td className="px-6 py-4 whitespace-nowrap">{patient.firstName}</td>
//                 </tr>
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Last Name</td>
//                   <td className="px-6 py-4 whitespace-nowrap">{patient.lastName}</td>
//                 </tr>
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Gender</td>
//                   <td className="px-6 py-4 whitespace-nowrap">{patient.gender}</td>
//                 </tr>
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Date of Birth</td>
//                   <td className="px-6 py-4 whitespace-nowrap">{new Date(patient.dateOfBirth).toLocaleDateString()}</td>
//                 </tr>
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Email</td>
//                   <td className="px-6 py-4 whitespace-nowrap">{patient.email || "N/A"}</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         )}

//         {/* Display symptoms */}
//         {symptoms.length > 0 && (
//           <div>
//             <h2 className="text-lg font-bold mb-2">Symptoms Details</h2>
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead>
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Field</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {symptoms.map((symptom, index) => (
//                   <tr key={index}>
//                     <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Symptom Code</td>
//                     <td className="px-6 py-4 whitespace-nowrap">{symptom.symptomCode}</td>
//                     <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Bilateral Lower Limb Swelling</td>
//                     <td className="px-6 py-4 whitespace-nowrap">{symptom.bilateralLowerLimbSwelling ? "Yes" : "No"}</td>
//                     <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Dyspnoea</td>
//                     <td className="px-6 py-4 whitespace-nowrap">{symptom.dyspnoea ? "Yes" : "No"}</td>
//                     <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Orthopnoea</td>
//                     <td className="px-6 py-4 whitespace-nowrap">{symptom.orthopnoea ? "Yes" : "No"}</td>
//                     <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Paroxysmal Nocturnal Dyspnoea</td>
//                     <td className="px-6 py-4 whitespace-nowrap">{symptom.paroxysmalNocturnalDyspnoea ? "Yes" : "No"}</td>
//                     <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Fatigue</td>
//                     <td className="px-6 py-4 whitespace-nowrap">{symptom.fatigue ? "Yes" : "No"}</td>
//                     <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Doctor Recommendation</td>
//                     <td className="px-6 py-4 whitespace-nowrap">{symptom.doctorRecommendation}</td>
//                     <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Symptom Date</td>
//                     <td className="px-6 py-4 whitespace-nowrap">{new Date(symptom.symptomDate).toLocaleDateString()}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}

//         {/* No data message */}
//         {!patient && !loading && !error && (
//           <p className="text-gray-600 text-center">
//             No patient data available.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PatientSymptomDataById;


// import { useState } from "react";
// import axiosClient from "../../axios-client"; // Updated path for axiosClient

// const PatientSymptomDataById = () => {
//   const [patient, setPatient] = useState(null);
//   const [symptoms, setSymptoms] = useState([]);
//   const [patientId, setPatientId] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchPatientDataById = async () => {
//     if (!patientId) {
//       setError("Please enter a valid Patient ID");
//       return;
//     }

//     try {
//       setLoading(true);
//       setError(null);
//       setPatient(null);
//       setSymptoms([]);

//       // Fetch patient data
//       const patientResponse = await axiosClient.get(`/patients/${patientId}`);
//       // Fetch symptoms data
//       const symptomsResponse = await axiosClient.get(
//         `/doctors/patients/${patientId}/symptoms`
//       );

//       if (patientResponse.data) {
//         setPatient(patientResponse.data);
//       } else {
//         setError("No patient data found.");
//       }

//       if (symptomsResponse.data) {
//         setSymptoms(symptomsResponse.data);
//       } else {
//         setError("No symptoms data found.");
//       }
//     } catch (err) {
//       setError(
//         "Failed to fetch data. Please check the Patient ID and try again."
//       );
//       console.error("Error fetching data:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 to-orange-300">
//       <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
//         <h1 className="text-2xl font-bold text-center mb-6">Patient Symptoms Data</h1>

//         {/* Input field for patient ID */}
//         <input
//           type="text"
//           placeholder="Enter Patient ID"
//           value={patientId}
//           onChange={(e) => setPatientId(e.target.value)}
//           className="w-full px-4 py-2 border rounded-md mb-4"
//         />
//         {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

//         {/* Button to fetch patient data */}
//         <button
//           onClick={fetchPatientDataById}
//           disabled={loading}
//           className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all disabled:opacity-50 mb-4"
//         >
//           {loading ? (
//             <svg
//               className="animate-spin h-5 w-5 mx-auto text-white"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//             >
//               <circle
//                 className="opacity-25"
//                 cx="12"
//                 cy="12"
//                 r="10"
//                 stroke="currentColor"
//                 strokeWidth="4"
//               ></circle>
//               <path
//                 className="opacity-75"
//                 fill="currentColor"
//                 d="M4 12a8 8 0 0116 0A8 8 0 014 12z"
//               ></path>
//             </svg>
//           ) : (
//             "Get Patient Data"
//           )}
//         </button>

//         {/* Display patient data */}
//         {patient && (
//           <div className="mb-4">
//             <h2 className="text-lg font-bold mb-2">Patient Details</h2>
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead>
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Field</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Patient ID</td>
//                   <td className="px-6 py-4 whitespace-nowrap">{patient.patientId}</td>
//                 </tr>
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">NIC</td>
//                   <td className="px-6 py-4 whitespace-nowrap">{patient.nic}</td>
//                 </tr>
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">First Name</td>
//                   <td className="px-6 py-4 whitespace-nowrap">{patient.firstName}</td>
//                 </tr>
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Last Name</td>
//                   <td className="px-6 py-4 whitespace-nowrap">{patient.lastName}</td>
//                 </tr>
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Gender</td>
//                   <td className="px-6 py-4 whitespace-nowrap">{patient.gender}</td>
//                 </tr>
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Date of Birth</td>
//                   <td className="px-6 py-4 whitespace-nowrap">{new Date(patient.dateOfBirth).toLocaleDateString()}</td>
//                 </tr>
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Email</td>
//                   <td className="px-6 py-4 whitespace-nowrap">{patient.email || "N/A"}</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         )}

//         {/* Display symptoms */}
//         {symptoms.length > 0 && (
//           <div>
//             <h2 className="text-lg font-bold mb-2">Symptoms Details</h2>
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead>
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Symptom Code</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bilateral Lower Limb Swelling</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dyspnoea</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Orthopnoea</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Paroxysmal Nocturnal Dyspnoea</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fatigue</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor Recommendation</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Symptom Date</th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {symptoms.map((symptom, index) => (
//                   <tr key={index}>
//                     <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{symptom.symptomCode}</td>
//                     <td className="px-6 py-4 whitespace-nowrap">{symptom.bilateralLowerLimbSwelling ? "Yes" : "No"}</td>
//                     <td className="px-6 py-4 whitespace-nowrap">{symptom.dyspnoea ? "Yes" : "No"}</td>
//                     <td className="px-6 py-4 whitespace-nowrap">{symptom.orthopnoea ? "Yes" : "No"}</td>
//                     <td className="px-6 py-4 whitespace-nowrap">{symptom.paroxysmalNocturnalDyspnoea ? "Yes" : "No"}</td>
//                     <td className="px-6 py-4 whitespace-nowrap">{symptom.fatigue ? "Yes" : "No"}</td>
//                     <td className="px-6 py-4 whitespace-nowrap">{symptom.doctorRecommendation}</td>
//                     <td className="px-6 py-4 whitespace-nowrap">{new Date(symptom.symptomDate).toLocaleDateString()}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}

//         {/* No data message */}
//         {!patient && !loading && !error && (
//           <p className="text-gray-600 text-center">
//             No patient data available.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PatientSymptomDataById;



import { useState } from "react";
import axiosClient from "../../axios-client"; // Updated path for axiosClient

const PatientSymptomDataById = () => {
  const [patient, setPatient] = useState(null);
  const [symptoms, setSymptoms] = useState([]);
  const [patientId, setPatientId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPatientDataById = async () => {
    if (!patientId) {
      setError("Please enter a valid Patient ID");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setPatient(null);
      setSymptoms([]);

      // Fetch patient data
      const patientResponse = await axiosClient.get(`/patients/${patientId}`);
      // Fetch symptoms data
      const symptomsResponse = await axiosClient.get(
        `/doctors/patients/${patientId}/symptoms`
      );

      if (patientResponse.data) {
        setPatient(patientResponse.data);
      } else {
        setError("No patient data found.");
      }

      if (symptomsResponse.data) {
        setSymptoms(symptomsResponse.data);
      } else {
        setError("No symptoms data found.");
      }
    } catch (err) {
      setError(
        "Failed to fetch data. Please check the Patient ID and try again."
      );
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 to-orange-300">
      {/* Enlarge the outer box */}
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-5xl">
        <h1 className="text-2xl font-bold text-center mb-6">
          Patient Symptoms Data
        </h1>

        {/* Input field for patient ID */}
        <input
          type="text"
          placeholder="Enter Patient ID"
          value={patientId}
          onChange={(e) => setPatientId(e.target.value)}
          className="w-full px-4 py-2 border rounded-md mb-4"
        />
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        {/* Button to fetch patient data */}
        <button
          onClick={fetchPatientDataById}
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all disabled:opacity-50 mb-4"
        >
          {loading ? (
            <svg
              className="animate-spin h-5 w-5 mx-auto text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 0116 0A8 8 0 014 12z"
              ></path>
            </svg>
          ) : (
            "Get Patient Data"
          )}
        </button>

        {/* Display patient data */}
        {patient && (
          <div className="bg-gray-50 rounded-md p-4 mb-4">
            <h2 className="text-lg font-bold text-center mb-2">Patient Details</h2>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="border-b-2 border-r-2 p-2">Field</th>
                  <th className="border-b-2 p-2">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 font-bold border-r-2">Patient ID</td>
                  <td className="p-2">{patient.patientId}</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold border-r-2">NIC</td>
                  <td className="p-2">{patient.nic}</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold border-r-2">First Name</td>
                  <td className="p-2">{patient.firstName}</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold border-r-2">Last Name</td>
                  <td className="p-2">{patient.lastName}</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold border-r-2">Gender</td>
                  <td className="p-2">{patient.gender}</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold border-r-2">Date of Birth</td>
                  <td className="p-2">
                    {new Date(patient.dateOfBirth).toLocaleDateString()}
                  </td>
                </tr>
                <tr>
                  <td className="p-2 font-bold border-r-2">Email</td>
                  <td className="p-2">{patient.email || "N/A"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Display symptoms data in a table */}
        {symptoms.length > 0 && (
          <div className="bg-gray-50 rounded-md p-4">
            <h2 className="text-lg font-bold text-center mb-2">Symptoms Details</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="border-b-2 border-r-2 p-2">Symptom Code</th>
                    <th className="border-b-2 border-r-2 p-2">Bilateral Lower Limb Swelling</th>
                    <th className="border-b-2 border-r-2 p-2">Dyspnoea</th>
                    <th className="border-b-2 border-r-2 p-2">Orthopnoea</th>
                    <th className="border-b-2 border-r-2 p-2">Paroxysmal Nocturnal Dyspnoea</th>
                    <th className="border-b-2 border-r-2 p-2">Fatigue</th>
                    <th className="border-b-2 border-r-2 p-2">Doctor Recommendation</th>
                    <th className="border-b-2 p-2">Symptom Date</th>
                  </tr>
                </thead>
                <tbody>
                  {symptoms.map((symptom, index) => (
                    <tr key={index}>
                      <td className="p-2 border-r-2">{symptom.symptomCode}</td>
                      <td className="p-2 border-r-2">{symptom.bilateralLowerLimbSwelling ? "Yes" : "No"}</td>
                      <td className="p-2 border-r-2">{symptom.dyspnoea ? "Yes" : "No"}</td>
                      <td className="p-2 border-r-2">{symptom.orthopnoea ? "Yes" : "No"}</td>
                      <td className="p-2 border-r-2">{symptom.paroxysmalNocturnalDyspnoea ? "Yes" : "No"}</td>
                      <td className="p-2 border-r-2">{symptom.fatigue ? "Yes" : "No"}</td>
                      <td className="p-2 border-r-2">{symptom.doctorRecommendation}</td>
                      <td className="p-2">{new Date(symptom.symptomDate).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* No data message */}
        {!patient && !loading && !error && (
          <p className="text-gray-600 text-center">
            No patient data available.
          </p>
        )}
      </div>
    </div>
  );
};

export default PatientSymptomDataById;














// import { useState } from "react";
// import axiosClient from "../../axios-client"; // Updated path for axiosClient

// const PatientSymptomDataById = () => {
//   const [patient, setPatient] = useState(null);
//   const [symptoms, setSymptoms] = useState([]);
//   const [patientId, setPatientId] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchPatientDataById = async () => {
//     if (!patientId) {
//       setError("Please enter a valid Patient ID");
//       return;
//     }

//     try {
//       setLoading(true);
//       setError(null);
//       setPatient(null);
//       setSymptoms([]);

//       // Fetch patient data
//       const patientResponse = await axiosClient.get(`/patients/${patientId}`);
//       // Fetch symptoms data
//       const symptomsResponse = await axiosClient.get(
//         `/doctors/patients/${patientId}/symptoms`
//       );

//       if (patientResponse.data) {
//         setPatient(patientResponse.data);
//       } else {
//         setError("No patient data found.");
//       }

//       if (symptomsResponse.data) {
//         setSymptoms(symptomsResponse.data);
//       } else {
//         setError("No symptoms data found.");
//       }
//     } catch (err) {
//       setError(
//         "Failed to fetch data. Please check the Patient ID and try again."
//       );
//       console.error("Error fetching data:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 to-orange-300">
//       <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
//         <h1 className="text-2xl font-bold text-center mb-6">
//           Patient Symptoms Data
//         </h1>

//         {/* Input field for patient ID */}
//         <input
//           type="text"
//           placeholder="Enter Patient ID"
//           value={patientId}
//           onChange={(e) => setPatientId(e.target.value)}
//           className="w-full px-4 py-2 border rounded-md mb-4"
//         />
//         {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

//         {/* Button to fetch patient data */}
//         <button
//           onClick={fetchPatientDataById}
//           disabled={loading}
//           className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all disabled:opacity-50 mb-4"
//         >
//           {loading ? (
//             <svg
//               className="animate-spin h-5 w-5 mx-auto text-white"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//             >
//               <circle
//                 className="opacity-25"
//                 cx="12"
//                 cy="12"
//                 r="10"
//                 stroke="currentColor"
//                 strokeWidth="4"
//               ></circle>
//               <path
//                 className="opacity-75"
//                 fill="currentColor"
//                 d="M4 12a8 8 0 0116 0A8 8 0 014 12z"
//               ></path>
//             </svg>
//           ) : (
//             "Get Patient Data"
//           )}
//         </button>

//         {/* Display patient data */}
//         {patient && (
//           <div className="bg-gray-50 rounded-md p-4 mb-4">
//             <h2 className="text-lg font-bold mb-2">Patient Details</h2>
//             <table className="w-full text-left">
//               <thead>
//                 <tr>
//                   <th className="border-b-2 p-2">Patient ID</th>
//                   <th className="border-b-2 p-2">NIC</th>
//                   <th className="border-b-2 p-2">First Name</th>
//                   <th className="border-b-2 p-2">Last Name</th>
//                   <th className="border-b-2 p-2">Gender</th>
//                   <th className="border-b-2 p-2">Date of Birth</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td className="p-2">{patient.patientId}</td>
//                   <td className="p-2">{patient.nic}</td>
//                   <td className="p-2">{patient.firstName}</td>
//                   <td className="p-2">{patient.lastName}</td>
//                   <td className="p-2">{patient.gender}</td>
//                   <td className="p-2">
//                     {new Date(patient.dateOfBirth).toLocaleDateString()}
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         )}

//         {/* Display symptoms in a table */}
//         {symptoms.length > 0 && (
//           <div className="bg-gray-50 rounded-md p-4">
//             <h2 className="text-lg font-bold mb-2">Symptoms Details</h2>
//             <table className="w-full text-left">
//               <thead>
//                 <tr>
//                   <th className="border-b-2 p-2">Symptom Code</th>
//                   <th className="border-b-2 p-2">Bilateral Lower Limb Swelling</th>
//                   <th className="border-b-2 p-2">Dyspnoea</th>
//                   <th className="border-b-2 p-2">Orthopnoea</th>
//                   <th className="border-b-2 p-2">Paroxysmal Nocturnal Dyspnoea</th>
//                   <th className="border-b-2 p-2">Fatigue</th>
//                   <th className="border-b-2 p-2">Doctor Recommendation</th>
//                   <th className="border-b-2 p-2">Symptom Date</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {symptoms.map((symptom, index) => (
//                   <tr key={index}>
//                     <td className="p-2">{symptom.symptomCode}</td>
//                     <td className="p-2">{symptom.bilateralLowerLimbSwelling ? "Yes" : "No"}</td>
//                     <td className="p-2">{symptom.dyspnoea ? "Yes" : "No"}</td>
//                     <td className="p-2">{symptom.orthopnoea ? "Yes" : "No"}</td>
//                     <td className="p-2">{symptom.paroxysmalNocturnalDyspnoea ? "Yes" : "No"}</td>
//                     <td className="p-2">{symptom.fatigue ? "Yes" : "No"}</td>
//                     <td className="p-2">{symptom.doctorRecommendation}</td>
//                     <td className="p-2">{new Date(symptom.symptomDate).toLocaleDateString()}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}

//         {/* No data message */}
//         {!patient && !loading && !error && (
//           <p className="text-gray-600 text-center">
//             No patient data available.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PatientSymptomDataById;
